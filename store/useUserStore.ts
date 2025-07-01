import { User } from '@/types/User';
import { create } from 'zustand'

type State = {
    user: User | null;
    setUser: (user: User) => void;
    logout: () => void;
};

export const useUserStore = create<State>((set) => ({
    user: null,

    setUser: (user) => set({ user }),
    logout: () => set({ user: null }),
}))
