import { Header } from './components/layout/Header'
import { About } from './sections/About/About'
import { Gallery } from './sections/Gallery/Gallery'
import { Hero } from './sections/Hero/Hero'
import { Services } from './sections/Services/Services'
import { useLanguage } from './hooks/useLanguage'

export default function App() {
  const { locale, setLocale } = useLanguage('en')

  return (
    <div id="top">
      <Header locale={locale} onChangeLanguage={setLocale} />

      <main>
        <Hero locale={locale} />
        <Services locale={locale} />
        <Gallery locale={locale} />
        <About locale={locale} />
      </main>
    </div>
  )
}