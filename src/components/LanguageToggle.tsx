"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/LanguageProvider"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="rounded-full text-lg"
      title={language === "EN" ? "Switch to Indonesian" : "Switch to English"}
    >
      {language === "EN" ? "🇺🇸" : "🇮🇩"}
      <span className="sr-only">Toggle Language</span>
    </Button>
  )
}
