import { Post } from '@/types/Post'
import { create } from 'zustand'

type State = {
    activePost: Post | null
    posts: Post[]
    loading: boolean
    error: string | null

    setPosts: (posts: Post[]) => void
    setActivePost: (post: Post) => void
    setLoading: (loading: boolean) => void
    setError: (error: string | null) => void
    clearError: () => void
}

export const useBlogStore = create<State>((set) => ({
    activePost: null,
    posts: [],
    loading: false,
    error: null,

    setPosts: (posts) => set({ posts }),
    setActivePost: (post) => set({ activePost: post }),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
    clearError: () => set({ error: null })
}))