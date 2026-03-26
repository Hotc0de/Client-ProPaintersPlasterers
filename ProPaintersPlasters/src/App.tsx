import { useLanguage } from './hooks/useLanguage'
import { heroContent } from './content/home'
import { getLocalizedValue } from './utils/getLocalizedValue'
import { companyName } from './content/site'

export default function App() {
  const { locale, setLocale } = useLanguage('en')

  return (
    <div>
      <header>
        <h1>{companyName}</h1>

        <div>
          <button onClick={() => setLocale('en')}>EN</button>
          <button onClick={() => setLocale('vi')}>VI</button>
          <button onClick={() => setLocale('zh')}>中文</button>
        </div>
      </header>

      <main>
        <p>{getLocalizedValue(heroContent.eyebrow, locale)}</p>
        <h2>{getLocalizedValue(heroContent.title, locale)}</h2>
        <p>{getLocalizedValue(heroContent.description, locale)}</p>
      </main>
    </div>
  )
}