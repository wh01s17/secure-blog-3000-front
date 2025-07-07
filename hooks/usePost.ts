import { useEffect } from 'react'
import { useBlogStore } from '@/store/useBlogStore'
import { postService } from '@/services/postService'

export const usePost = (id: String) => {
    const { activePost, loading, error, setActivePost, setLoading, setError, clearError } = useBlogStore()

    const fetchPost = async (id: String) => {
        setLoading(true)
        clearError()

        try {
            const post = await postService.getPost(id)
            setActivePost(post)
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Error desconocido')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPost(id)
    }, [])

    return {
        activePost,
        loading,
        error,
        refetch: fetchPost
    }
}