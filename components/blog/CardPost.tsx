import { Post } from '@/types/Post'
import React from 'react'

export const CardPost = ({ post }: { post: Post }) => {
    const { body, description, title, created_at } = post

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

    return (
        <div
            className="w-full max-w-3xl mx-auto p-6 bg-white dark:bg-neutral-900 border-1 border-white
                        rounded-2xl shadow-lg hover:shadow-xl transition"
        >
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
            <p className="text-sm text-muted-foreground mb-1">
                {formatDate(created_at)}
            </p>
            <h3 className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
                {description}
            </h3>
            <div className="prose dark:prose-invert max-w-none">
                <p>{body}</p>
            </div>
        </div>
    )
}