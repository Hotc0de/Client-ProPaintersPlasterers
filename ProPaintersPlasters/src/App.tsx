import { Header } from './components/layout/Header'
import { useLanguage } from './hooks/useLanguage'
import { Gallery } from './sections/Gallery/Gallery'
import { Hero } from './sections/Hero/Hero'
import { Services } from './sections/Services/Services'

export default function App() {
  const { locale, setLocale } = useLanguage('en')

  return (
    <div id="top">
      <Header locale={locale} onChangeLanguage={setLocale} />

      <main>
        <Hero locale={locale} />
        <Services locale={locale} />
        <Gallery locale={locale} />
      </main>
    </div>
  )
}