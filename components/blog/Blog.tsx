'use client'
import React from 'react'
import { CardPost } from './CardPost'
import { usePosts } from '@/hooks/usePosts'
import { Loading } from '../ui/Loading'

export const Blog = () => {
    const { posts, loading, error } = usePosts()

    if (loading) {
        return <div className='h-full flex justify-center'>
            <Loading />
        </div>
    }

    if (error) return <div>Error: {error}</div>

    return (
        <div className="h-full bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="h-full w-full bg-black/80 overflow-y-auto">
                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-100 py-6 sm:py-8 lg:py-10">
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
