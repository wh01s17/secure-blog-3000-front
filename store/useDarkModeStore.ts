import { create } from 'zustand'

type DarkModeProps = {
    isDark: boolean
    setIsDark: (mode: boolean) => void
}

export const useDarkModeStore = create<DarkModeProps>((set) => ({
    isDark: true,

    setIsDark: (mode) => set({ isDark: mode })
}))