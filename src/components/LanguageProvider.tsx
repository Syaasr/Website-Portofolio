"use client"

import * as React from "react"

type Language = "EN" | "ID"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = React.useState<Language>("EN")

  const toggleLanguage = React.useCallback(() => {
    setLanguage(prev => {
      const newLang = prev === "EN" ? "ID" : "EN"
      console.log(`Language changed to: ${newLang}`)
      return newLang
    })
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
