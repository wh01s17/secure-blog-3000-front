'use client'
import React, { useState } from 'react'
import { CardPost } from './CardPost'
import { usePosts } from '@/hooks/usePosts'
import { Loading } from '../ui/Loading'
import { Search } from 'lucide-react'

export const Blog = () => {
    const { posts, loading, error } = usePosts()
    const [search, setSearch] = useState('')    // texto crudo inyectado con XSS
    const [rawSearch, setRawSearch] = useState('') // contenido textarea

    const handleRawSearch = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setRawSearch(e.target.value)
    }

    const handleSubmit = () => {
        setSearch(rawSearch)
    }

    const handleLoadXSSPayload = () => {
        const payload = `<img src="x" onerror="alert('XSS desde payload')" />`
        setRawSearch(payload)
        setSearch('')  // limpia la vista antes de cargar el payload
    }

    if (loading) {
        return (
            <div className='h-full flex justify-center'>
                <Loading />
            </div>
        )
    }

    if (error) return <div>Error: {error}</div>

    const filteredPost = search.length > 0
        ? posts.filter(post => {
            const lower = search.toLowerCase()
            return (
                post.title.toLowerCase().includes(lower) ||
                post.body.toLowerCase().includes(lower) ||
                post.description?.toLowerCase().includes(lower)
            )
        })
        : posts

    return (
        <div className="h-full bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="h-full w-full bg-black/80 overflow-y-auto">

                <div className="flex flex-col px-4 py-6 justify-center items-center gap-4 max-w-3xl mx-auto">
                    <textarea
                        rows={4}
                        value={rawSearch}
                        onChange={handleRawSearch}
                        placeholder="Escribe HTML malicioso aquí..."
                        className="w-full p-3 rounded-xl bg-white/10 backdrop-blur text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all resize-none"
                    />

                    <div className="flex gap-4">
                        <button
                            onClick={handleSubmit}
                            className="bg-white/10 text-white px-6 py-2 rounded hover:bg-white/20 transition"
                        >
                            Buscar
                        </button>
                        <button
                            onClick={handleLoadXSSPayload}
                            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
                        >
                            Cargar payload XSS de prueba
                        </button>
                    </div>

                    <div className="text-white text-sm w-full break-words">
                        Resultados para:{' '}
                        <span
                            dangerouslySetInnerHTML={{ __html: search }}
                            className="text-green-400"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 px-6 sm:px-10 md:px-20 lg:px-28 xl:px-36 2xl:px-40 py-6 sm:py-8 lg:py-10 max-w-7xl mx-auto">
                    {filteredPost.map(post => (
                        // Asegúrate que CardPost tenga clases como max-w-full o max-w-4xl
                        <CardPost key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}
