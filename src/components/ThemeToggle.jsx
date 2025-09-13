"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  const toggleTheme = () => setTheme(isDark ? "light" : "dark")

  return (
    <div
      onClick={toggleTheme}
      className="flex items-center justify-between gap-x-2 cursor-pointer border rounded-full px-1 py-0.5 relative overflow-hidden w-14"
    >
      <Sun size={15} />
      <Moon size={15} />
      <div
        className={`h-4 w-4 rounded-full absolute bg-green-500 top-0.5 transition-all ${
          isDark ? "right-1" : "left-1"
        }`}
      />
    </div>
  )
}
