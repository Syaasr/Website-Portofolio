"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { ThemeToggler } from "./animate-ui/primitives/effects/theme-toggler"

export function ModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()

  // Ensure hydration match
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
     return (
        <Button variant="ghost" size="icon" className="rounded-full">
           <span className="sr-only">Loading theme</span>
        </Button>
     )
  }

  return (
    <ThemeToggler
      theme={theme as "light" | "dark" | "system"}
      setTheme={setTheme}
      resolvedTheme={resolvedTheme as "light" | "dark"}
      direction="ttb" // Added animation direction for flare
    >
      {({ toggleTheme, effective }) => (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggleTheme(effective === 'dark' ? 'light' : 'dark')}
          className="rounded-full"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      )}
    </ThemeToggler>
  )
}
