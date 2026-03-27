import { navigationItems } from '../../content/navigation'
import { companyName } from '../../content/site'
import type { Locale } from '../../content/types'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
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

export function Header({ locale, onChangeLanguage }: HeaderProps) {
  const activeLanguage =
    languageOptions.find((item) => item.value === locale) ?? languageOptions[0]

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__brand">
          <a href="#top" className="site-header__logo">
            <span className="site-header__logo-mark">🎨</span>
            <span className="site-header__logo-text">{companyName}</span>
          </a>
        </div>

        <nav className="site-header__nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a key={item.id} href={item.href}>
              {getLocalizedValue(item.label, locale)}
            </a>
          ))}
        </nav>

        <div className="site-header__language">
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
        </div>
      </div>
    </header>
  )
}