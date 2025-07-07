'use client'
import React, { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import Link from 'next/link'
import { useDarkModeStore } from '@/store/useDarkModeStore'
import { Button } from './ui/button'
import { useUserStore } from '@/store/useUserStore'
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const { isDark } = useDarkModeStore()
    const { user } = useUserStore()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className={`flex justify-between w-dvw px-4 sm:px-6 lg:px-8 py-4 sm:py-5 border-0 border-b-1 items-center relative
                ${isDark ? 'border-white' : 'border-black'}`}>
            {/* Logo */}
            <div className="flex-shrink-0">
                <Link
                    href='/'
                    className='text-xl sm:text-2xl lg:text-3xl font-bold duration-200 hover:text-zinc-500'
                >
                    <span className="hidden sm:inline">SecureBlog 3000™</span>
                    <span className="sm:hidden">SecureBlog</span>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex gap-4 lg:gap-8 items-center'>
                {
                    user
                        ? <div className="flex gap-2 lg:gap-4">
                            <Link href='/blog'>
                                <Button variant="ghost" size="sm" className="lg:text-base">
                                    Blog
                                </Button>
                            </Link>

                            <Link href='/about'>
                                <Button variant="ghost" size="sm" className="lg:text-base">
                                    <span className="hidden lg:inline">Quienes somos</span>
                                    <span className="lg:hidden">Nosotros</span>
                                </Button>
                            </Link>

                            <Button variant="ghost" size="sm" className="lg:text-base">
                                Cerrar sesión
                            </Button>
                        </div>
                        : <div className="flex gap-2 lg:gap-4">
                            <Link href='/login'>
                                <Button variant="outline" size="sm" className="lg:text-base">
                                    Iniciar sesión
                                </Button>
                            </Link>
                            <Link href='/signup'>
                                <Button size="sm" className="lg:text-base">
                                    Registrarse
                                </Button>
                            </Link>
                        </div>
                }
                <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
                <ThemeToggle />
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2"
                >
                    {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
                <div className={`absolute top-full left-0 right-0 md:hidden border-b-1 z-50
                        ${isDark ? 'bg-black border-white' : 'bg-white border-black'}`}>
                    <div className="flex flex-col p-4 space-y-2">
                        {
                            !user
                                ? <>
                                    <Link href='/blog' onClick={() => setMobileMenuOpen(false)}>
                                        <Button variant="ghost" className="w-full justify-start">
                                            Blog
                                        </Button>
                                    </Link>

                                    <Link href='/about' onClick={() => setMobileMenuOpen(false)}>
                                        <Button variant="ghost" className="w-full justify-start">
                                            Quienes somos
                                        </Button>
                                    </Link>

                                    <Button variant="ghost" className="w-full justify-start">
                                        Cerrar sesión
                                    </Button>
                                </>
                                : <>
                                    <Link href='/login' onClick={() => setMobileMenuOpen(false)}>
                                        <Button variant="outline" className="w-full">
                                            Iniciar sesión
                                        </Button>
                                    </Link>
                                    <Link href='/signup' onClick={() => setMobileMenuOpen(false)}>
                                        <Button className="w-full">
                                            Registrarse
                                        </Button>
                                    </Link>
                                </>
                        }
                    </div>
                </div>
            )}
        </nav>
    )
}
