import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { AboutUs } from './sections/AboutUs/AboutUs'
import { WhyChooseUs } from './sections/WhyChooseUs/WhyChooseUs'
import { Contact } from './sections/Contact/Contact'
import { Gallery } from './sections/Gallery/Gallery'
import { Hero } from './sections/Hero/Hero'
import { Services } from './sections/Services/Services'
import { useLanguage } from './hooks/useLanguage'
import { motion, useReducedMotion } from 'framer-motion'
import { durations, fadeIn, luxuryEase } from './utils/motion'

export default function App() {
  const { locale, setLocale } = useLanguage('en')
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      id="top"
      initial={reduceMotion ? false : 'hidden'}
      animate="visible"
      variants={fadeIn(0)}
      transition={{ duration: durations.slow, ease: luxuryEase }}
    >
      <Header locale={locale} onChangeLanguage={setLocale} />

      <main>
        <Hero locale={locale} />
        <Services locale={locale} />
        <Gallery locale={locale} />
        <WhyChooseUs locale={locale} />
        <AboutUs locale={locale} />
        <Contact locale={locale} />
      </main>

      <Footer locale={locale} />
    </motion.div>
  )
}