import type { Locale, LocalizedText } from '../content/types'

export function getLocalizedValue(text: LocalizedText, locale: Locale): string {
  return text[locale]
}