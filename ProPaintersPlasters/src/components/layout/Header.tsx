import { navigationItems } from '../../content/navigation'
import { companyName } from '../../content/site'
import type { Locale } from '../../content/types'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import './Header.css'

type HeaderProps = {
  locale: Locale
  onChangeLanguage: (locale: Locale) => void
}

export function Header({ locale, onChangeLanguage }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__brand">
          <a href="#top" className="site-header__logo">
            {companyName}
          </a>
        </div>

        <nav className="site-header__nav" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <a key={item.id} href={item.href}>
              {getLocalizedValue(item.label, locale)}
            </a>
          ))}
        </nav>

        <div className="site-header__languages">
          <button
            type="button"
            className={locale === 'en' ? 'is-active' : ''}
            onClick={() => onChangeLanguage('en')}
          >
            EN
          </button>

          <button
            type="button"
            className={locale === 'vi' ? 'is-active' : ''}
            onClick={() => onChangeLanguage('vi')}
          >
            VI
          </button>

          <button
            type="button"
            className={locale === 'zh' ? 'is-active' : ''}
            onClick={() => onChangeLanguage('zh')}
          >
            中文
          </button>
        </div>
      </div>
    </header>
  )
}