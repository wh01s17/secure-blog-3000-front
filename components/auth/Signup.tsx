'use client'
import React, { useEffect } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { signupSchema } from '@/lib/signupSchema'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

type SignUpFormData = yup.InferType<typeof signupSchema>

export const Signup = () => {
    const router = useRouter()
    const currentUser = false
    const loading = false

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignUpFormData>({
        resolver: yupResolver(signupSchema),
        defaultValues: {}
    })

    const onSubmit = async (data: SignUpFormData) => {
        try {
            toast.success(`Hola ${data.userName}, bienvenido 😄`)
            router.push('/')
        } catch (error) {
            const errMsg = error instanceof Error
                ? error.message
                : 'Error signing up'
            toast.error(errMsg)
        }
    }

    useEffect(() => {
        if (currentUser) {
            router.push('/')
        }
    }, [currentUser, router])

    return (
        <section className="flex flex-col justify-center items-center 2xl:min-h-[calc(100dvh-214px)]">
            <div className="p-6 rounded-lg shadow-lg bg-white/10 h-full w-md">
                <h1 className="text-4xl font-bold mb-10 text-center">
                    Registrarse
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-6 w-full" >
                    {/* Username */}
                    <div className="mb-6">
                        <Label htmlFor="name" className="mb-2">Nombre de usuario:</Label>
                        <Input
                            {...register('userName')}
                            type="text"
                            id="userName"
                            placeholder="User1234"
                        />
                        {errors.userName && <p className="text-red-600 mt-1">{errors.userName.message}</p>}
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                        <Label htmlFor="email" className="mb-2">Correo electrónico:</Label>
                        <Input
                            {...register('email')}
                            type="email"
                            id="email"
                            placeholder="example@example.com"
                        />
                        {errors.email && <p className="text-red-600 mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <Label htmlFor="password" className="mb-2">Contraseña:</Label>
                        <Input
                            {...register('password')}
                            type="password"
                            id="password"
                            placeholder="********"
                        />
                        {errors.password && <p className="text-red-600 mt-1">{errors.password.message}</p>}
                    </div>

                    {/* Retype Password */}
                    <div className="mb-6">
                        <Label htmlFor="confirmPassword" className="mb-2">Nuevamente su contraseña:</Label>
                        <Input
                            {...register('confirmPassword')}
                            type="password"
                            id="confirmPassword"
                            placeholder="********"
                        />
                        {errors.confirmPassword && <p className="text-red-600 mt-1">{errors.confirmPassword.message}</p>}
                    </div>

                    {/* Submit */}
                    <Button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Creando cuenta...' : 'Registrarse'}
                    </Button>
                </form>
            </div>
        </section>
    )
}
