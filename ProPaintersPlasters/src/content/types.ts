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

export type ServiceItem = {
  id: string
  image: string
  title: LocalizedText
  description: LocalizedText
}

export type GalleryItem = {
  id: string
  image: string
  alt: LocalizedText
  title: LocalizedText
}

export type FeatureItem = {
  id: string
  text: LocalizedText
}

export type WhyChooseUsContent = {
  eyebrow: LocalizedText
  title: LocalizedText
  description: LocalizedText
  image: string
  imageAlt: LocalizedText
}

export type SectionIntroContent = {
  eyebrow: LocalizedText
  title: LocalizedText
  description: LocalizedText
}

export type ContactSectionContent = {
  eyebrow: LocalizedText
  title: LocalizedText
  description: LocalizedText
  callLabel: LocalizedText
  emailLabel: LocalizedText
  addressLabel: LocalizedText
  buttonText: LocalizedText
}

export type FooterContent = {
  copyright: LocalizedText
  navigationLabel: LocalizedText
}

export type NavigationItem = {
  id: string
  label: LocalizedText
  href: string
}

export type StatItem = {
  id: string
  value: string
  label: LocalizedText
}

