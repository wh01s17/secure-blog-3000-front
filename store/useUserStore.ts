import { User } from '@/types/User';
import { create } from 'zustand'

type State = {
    user: User | null
    setUser: (user: User) => void
    login: (user: User) => void
    logout: () => void
}

export const useUserStore = create<State>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    login: (user) => set({ user }), // alias de setUser
    logout: () => set({ user: null }),
}))