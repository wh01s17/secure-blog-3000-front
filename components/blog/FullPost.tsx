'use client'

import { usePost } from '@/hooks/usePost'
import React from 'react'
import { Loading } from '../ui/Loading'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export const FullPost = ({ id }: { id: String }) => {
    const { activePost, loading } = usePost(id)

    if (loading || !activePost) {
        return (
            <div className='min-h-screen flex items-center justify-center'>
                <Loading />
            </div>
        )
    }

    const { title, description, body, created_at } = activePost

    const formatDate = (date: string | Date) => {
        const d = typeof date === 'string' ? new Date(date) : date
        return d
            .toLocaleDateString('es-CL', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })
            .replace(/^\w/, (c) => c.toUpperCase())
    }

    const getReadingTime = (text: string) => {
        const wordsPerMinute = 200
        const words = text.split(' ').length
        const minutes = Math.ceil(words / wordsPerMinute)
        return `${minutes} min de lectura`
    }

    return (
        <div className="h-full bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-black dark:to-gray-800 overflow-y-scroll">
            {/* Header con navegación */}
            <div className="sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <Link
                        href='/blog'
                        className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span className="font-medium">Volver al blog</span>
                    </Link>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
                <article className="space-y-8">
                    {/* Hero section */}
                    <header className="space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
                                {title}
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                                {description}
                            </p>
                        </div>

                        {/* Metadatos */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(created_at)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{getReadingTime(body)}</span>
                            </div>
                            <Badge variant="secondary" className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700">
                                Artículo
                            </Badge>
                        </div>

                        {/* Imagen destacada */}
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-black">
                            <Image
                                src="/images/default-post.jpg"
                                alt={`Imagen del artículo: ${title}`}
                                width={800}
                                height={400}
                                className="w-full h-64 md:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 dark:from-black/60 to-transparent" />
                        </div>
                    </header>

                    {/* Contenido del artículo */}
                    <section className="relative">
                        {/* Línea decorativa */}
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-gray-800 to-gray-600 dark:from-gray-600 dark:to-gray-400 rounded-full opacity-30" />

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <div className="space-y-6 text-gray-800 dark:text-gray-300 leading-relaxed">
                                {body.split('\n').map((para, idx) => (
                                    para.trim() && (
                                        <p
                                            key={idx}
                                            className="text-lg leading-8 "
                                        >
                                            {para}
                                        </p>
                                    )
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Footer del artículo */}
                    <footer className="pt-8 border-t border-gray-300 dark:border-gray-700">
                        <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black rounded-xl p-6 border border-gray-300 dark:border-gray-800">
                            <div className="text-center space-y-2">
                                <p className="text-gray-700 dark:text-gray-300">
                                    ¿Te gustó este artículo?
                                </p>
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-700 dark:to-gray-600 text-white rounded-lg font-medium hover:from-gray-700 hover:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-700 dark:border-gray-600"
                                >
                                    Ver más artículos
                                </Link>
                            </div>
                        </div>
                    </footer>
                </article>
            </div>
        </div>
    )
}