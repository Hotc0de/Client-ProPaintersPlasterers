import { Header } from './components/layout/Header'
import { useLanguage } from './hooks/useLanguage'
import { Hero } from './sections/Hero/Hero'

export default function App() {
  const { locale, setLocale } = useLanguage('en')

  return (
    <div id="top">
      <Header locale={locale} onChangeLanguage={setLocale} />

      <main>
        <Hero locale={locale} />
      </main>
    </div>
  )
}