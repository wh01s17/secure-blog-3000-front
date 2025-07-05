import { useEffect } from 'react'
import { useBlogStore } from '@/store/useBlogStore'
import { postService } from '@/services/postService'

export const usePosts = () => {
    const { posts, loading, error, setPosts, setLoading, setError, clearError } = useBlogStore()

    const fetchPosts = async () => {
        setLoading(true)
        clearError()

        try {
            const posts = await postService.getPosts()
            setPosts(posts)
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Error desconocido')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return {
        posts,
        loading,
        error,
        refetch: fetchPosts
    }
}