import { create } from 'zustand'

type UserProps = {
    currentUser: boolean
    setCurrentUser: (mode: boolean) => void
}

export const useUserStore = create<UserProps>((set) => ({
    currentUser: true,

    setCurrentUser: (mode) => set({ currentUser: mode })
}))