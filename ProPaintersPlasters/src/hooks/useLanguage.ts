import { useState } from 'react'
import type { Locale } from '../content/types'

export function useLanguage(defaultLocale: Locale = 'en') {
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  return {
    locale,
    setLocale,
  }
}