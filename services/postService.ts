import axios from 'axios'
import { Post } from '@/types/Post'

export const postService = {
    async getPosts(): Promise<Post[]> {
        try {
            const response = await axios.get('/api/posts')
            return response.data
        } catch (error) {
            throw new Error('Error al obtener posts')
        }
    },

    async getPost(id: string): Promise<Post> {
        try {
            const response = await axios.get(`/api/posts/${id}`)
            return response.data
        } catch (error) {
            throw new Error('Error al obtener el post')
        }
    },

    async createPost(post: Omit<Post, 'id'>): Promise<Post> {
        try {
            const response = await axios.post('/api/posts', post)
            return response.data
        } catch (error) {
            throw new Error('Error al crear el post')
        }
    }
}