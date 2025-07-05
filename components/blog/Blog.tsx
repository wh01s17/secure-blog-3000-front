'use client'
import React from 'react'
import { CardPost } from './CardPost'
import { usePosts } from '@/hooks/usePosts'
import { Loading } from '../ui/Loading'

export const Blog = () => {
    const { posts, loading, error } = usePosts()

    if (loading) return <Loading />
    if (error) return <div>Error: {error}</div>

    return (
        <div
            className="h-full bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat"
        >
            <div
                className="h-full w-full bg-black/80 overflow-y-auto"
            >
                <div className="flex flex-col gap-20 px-100 py-10">
                    {
                        posts.map(post => {
                            return <CardPost key={post.id} post={post} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
