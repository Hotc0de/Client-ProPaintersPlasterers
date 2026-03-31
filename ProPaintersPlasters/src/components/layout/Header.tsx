import { useEffect, useState } from 'react'
import { navigationItems } from '../../content/navigation'
import { companyName } from '../../content/site'
import type { Locale } from '../../content/types'
import { useActiveSection } from '../../hooks/useActiveSection'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import { motion, useReducedMotion } from 'framer-motion'
import { durations, luxuryEase } from '../../utils/motion'
import './Header.css'

type HeaderProps = {
  locale: Locale
  onChangeLanguage: (locale: Locale) => void
}

const languageOptions: Array<{
  value: Locale
  label: string
  flag: string
}> = [
  { value: 'en', label: 'English', flag: '🇬🇧' },
  { value: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { value: 'zh', label: '中文', flag: '🇨🇳' },
]

const navigationSectionIds = navigationItems.map((item) => item.href.replace('#', ''))

export function Header({ locale, onChangeLanguage }: HeaderProps) {
  const [isCompact, setIsCompact] = useState(false)
  const reduceMotion = useReducedMotion()
  const { activeSection, setActiveSection } = useActiveSection(navigationSectionIds, {
    defaultSectionId: 'home',
  })

  useEffect(() => {
    const onScroll = () => {
      setIsCompact(window.scrollY > 18)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const activeLanguage =
    languageOptions.find((item) => item.value === locale) ?? languageOptions[0]

  return (
    <motion.header
      className={`site-header ${isCompact ? 'site-header--compact' : ''}`}
      initial={reduceMotion ? false : { opacity: 0, y: -22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: durations.base, ease: luxuryEase }}
    >
      <div className="site-header__inner">
        <motion.div
          className="site-header__brand"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: durations.base, delay: 0.02, ease: luxuryEase }}
        >
          <a href="#top" className="site-header__logo">
            <span className="site-header__logo-mark">🎨</span>
            <span className="site-header__logo-text">{companyName}</span>
          </a>
        </motion.div>

        <nav className="site-header__nav" aria-label="Primary navigation">
          {navigationItems.map((item) => {
            const sectionId = item.href.replace('#', '')

            return (
              <motion.a
                key={item.id}
                href={item.href}
                className={activeSection === sectionId ? 'is-active' : undefined}
                aria-current={activeSection === sectionId ? 'page' : undefined}
                onClick={() => setActiveSection(sectionId)}
                whileHover={reduceMotion ? undefined : { y: -1 }}
                transition={{ duration: durations.fast, ease: luxuryEase }}
              >
                {getLocalizedValue(item.label, locale)}
              </motion.a>
            )
          })}
        </nav>

        <motion.div
          className="site-header__language"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: durations.base, delay: 0.1, ease: luxuryEase }}
        >
          <label className="site-header__language-label" htmlFor="language-select">
            Language
          </label>

          <div className="site-header__language-control">
            <span className="site-header__language-flag" aria-hidden="true">
              {activeLanguage.flag}
            </span>

            <span className="site-header__language-value">
              {activeLanguage.label}
            </span>

            <select
              id="language-select"
              value={locale}
              onChange={(event) => onChangeLanguage(event.target.value as Locale)}
              aria-label="Select language"
            >
              {languageOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>

            <span className="site-header__language-chevron" aria-hidden="true">
              ▾
            </span>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}