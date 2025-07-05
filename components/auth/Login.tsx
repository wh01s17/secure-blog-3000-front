'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import Link from 'next/link'
import { Loading } from '../ui/Loading'
import { useUserStore } from '@/store/useUserStore'

export const Login = () => {
    const [creds, setCreds] = useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const login = useUserStore((state) => state.login)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!creds.email || !creds.password) {
            toast.error('Todos los campos son obligatorios')
            return
        }

        setLoading(true)

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(creds),
            })

            if (!res.ok) {
                setLoading(false)
                toast.error('Correo y/o contraseña incorrectos')
                return
            }

            // Usar los datos del login directamente
            const userData = await res.json()
            console.log('Usuario logueado:', userData)

            login(userData.user)
            toast.success('Bienvenido 😬')
            router.push('/')

        } catch (err) {
            console.error(err)
            toast.error('Error inesperado al iniciar sesión')
        } finally {
            setLoading(false)
        }
    }

    const handleCreds = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className="flex flex-col justify-center items-center 2xl:min-h-[calc(100dvh-214px)]">
            {
                loading
                    ? <Loading />
                    : <div className="p-6 rounded-lg shadow-lg bg-white/10 h-full w-md">
                        <h1 className="text-4xl font-bold mb-10 text-center">
                            Iniciar sesión
                        </h1>

                        <form onSubmit={handleSubmit} className="flex flex-col space-y-6 w-full">
                            {/* Email */}
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="email">
                                    Correo electrónico
                                </Label>
                                <div className="relative">
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="example@example.com"
                                        value={creds.email}
                                        onChange={handleCreds}
                                        aria-label="Email"
                                    />
                                    <i className="ri-mail-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                </div>
                            </div>

                            {/* Password */}
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="password">
                                    Contraseña
                                </Label>
                                <div className="relative">
                                    <Input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="********"
                                        value={creds.password}
                                        onChange={handleCreds}
                                        aria-label="Password"
                                    />
                                    <i className="ri-lock-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                </div>
                            </div>

                            {/* Login Button */}
                            <div className='flex flex-col items-center gap-2'>
                                <Button
                                    type="submit"
                                    className='w-full'
                                >
                                    Login
                                </Button>
                                <Button variant='link' className='h-fit w-fit text-xs'>
                                    <Link href='/signup'>
                                        No tienes una cuenta? Regstrate
                                    </Link>
                                </Button>
                            </div>
                        </form>
                    </div>
            }
        </section>
    )
}
