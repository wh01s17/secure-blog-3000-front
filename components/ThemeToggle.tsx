'use client'
import { Switch } from "@/components/ui/switch"
import { useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { useDarkModeStore } from "@/store/useDarkModeStore"

export const ThemeToggle = () => {
    const { isDark, setIsDark } = useDarkModeStore()

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [isDark])

    return (
        <div className="flex items-center gap-2">
            <Sun className={`w-7 h-7 ${isDark ? 'text-white' : 'text-black'}`} />
            <Switch checked={isDark} onCheckedChange={setIsDark} className="cursor-pointer" />
            <Moon className={`w-7 h-7 ${isDark ? 'text-white' : 'text-black'}`} />
        </div>
    )
}