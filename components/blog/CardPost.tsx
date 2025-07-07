import { Post } from '@/types/Post'
import Link from 'next/link'
import React from 'react'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export const CardPost = ({ post }: { post: Post }) => {
    const { body, description, title, created_at, id } = post

    const formatDate = (date: string | Date) => {
        const parsed = typeof date === 'string' ? new Date(date) : date

        return parsed
            .toLocaleDateString('es-CL', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })
            .replace(/^\w/, c => c.toUpperCase())
    }

    const getReadingTime = (text: string) => {
        const wordsPerMinute = 200
        const words = text.split(' ').length
        const minutes = Math.ceil(words / wordsPerMinute)
        return `${minutes} min`
    }



    return (
        <article className="group w-full max-w-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden mx-4 sm:mx-auto">
            {/* Header con gradiente sutil */}
            <div className="relative p-4 sm:p-6 pb-3 sm:pb-4 bg-gradient-to-r from-transparent to-gray-100/50 dark:to-gray-800/50">
                {/* Badge de categoría */}
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <Badge variant="secondary" className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 text-xs sm:text-sm">
                        Artículo
                    </Badge>
                </div>

                {/* Título */}
                <Link href={`/blog/${id}`} className="block hover:scale-[1.01] sm:hover:scale-[1.02] transition-transform duration-300">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight hover:from-gray-800 hover:to-gray-600 dark:hover:from-gray-100 dark:hover:to-gray-200 transition-all duration-300">
                        {title}
                    </h1>
                </Link>

                {/* Metadatos */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{formatDate(created_at)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{getReadingTime(body)}</span>
                    </div>
                </div>

                {/* Descripción */}
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Contenido del body */}
            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="relative">
                    {/* Línea decorativa - oculta en móvil */}
                    <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-gray-800 to-gray-600 dark:from-gray-600 dark:to-gray-400 rounded-full opacity-20 hidden sm:block" />

                    <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none sm:pl-4">
                        <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            <p className="line-clamp-3 sm:line-clamp-2">
                                {body}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer con call-to-action */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Link
                        href={`/blog/${id}`}
                        className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium group"
                    >
                        <span>Leer más</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Efecto de hover en el borde */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-gray-300 dark:group-hover:border-gray-600 transition-colors duration-300 pointer-events-none" />
        </article>
    )
}