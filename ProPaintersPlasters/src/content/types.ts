export type Locale = 'en' | 'vi' | 'zh'

export type LocalizedText = {
  en: string
  vi: string
  zh: string
}

export type HeroContent = {
  eyebrow: LocalizedText
  title: LocalizedText
  description: LocalizedText
  primaryButton: LocalizedText
  secondaryButton: LocalizedText
}

export type ContactInfo = {
  phone: string
  email: string
  address: LocalizedText
}