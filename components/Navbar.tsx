'use client'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import Link from 'next/link'
import { useDarkModeStore } from '@/store/useDarkModeStore'
import { Button } from './ui/button'
import { useUserStore } from '@/store/useUserStore'

export const Navbar = () => {
    const { isDark } = useDarkModeStore()
    const { currentUser } = useUserStore()

    return (
        <nav
            className={`flex justify-between w-dvw px-5 py-5 border-0 border-b-1 items-center
                        ${isDark ? 'border-white' : 'border-black'}`}
        >
            <div>
                <Link
                    href='/'
                    className='text-3xl font-bold duration-200 hover:text-zinc-500'
                >
                    SecureBlog 3000™
                </Link>
            </div>
            <div className='flex gap-8'>
                {
                    currentUser
                        ? <div>
                            <Link href='/blog'>
                                <Button variant="ghost">
                                    Blog
                                </Button>
                            </Link>

                            <Link href='/about'>
                                <Button variant="ghost">
                                    Quienes somos
                                </Button>
                            </Link>

                            <Button variant="ghost">
                                Cerrar sesión
                            </Button>
                        </div>
                        : <div className="space-x-2 mr-5">
                            <Link href='/login'>
                                <Button variant="outline">Iniciar sesión</Button>
                            </Link>
                            <Link href='/signup'>
                                <Button>Registrarse</Button>
                            </Link>
                        </div>
                }
                <ThemeToggle />
            </div>
        </nav>
    )
}
