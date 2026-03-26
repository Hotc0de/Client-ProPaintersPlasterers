import type { Locale } from '../../content/types'
import { heroContent } from '../../content/home'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import './Hero.css'

type HeroProps = {
  locale: Locale
}

export function Hero({ locale }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">
          {getLocalizedValue(heroContent.eyebrow, locale)}
        </p>

        <h1 className="hero__title">
          {getLocalizedValue(heroContent.title, locale)}
        </h1>

        <p className="hero__description">
          {getLocalizedValue(heroContent.description, locale)}
        </p>

        <div className="hero__actions">
          <a href="#contact" className="hero__button hero__button--primary">
            {getLocalizedValue(heroContent.primaryButton, locale)}
          </a>

          <a href="#gallery" className="hero__button hero__button--secondary">
            {getLocalizedValue(heroContent.secondaryButton, locale)}
          </a>
        </div>
      </div>
    </section>
  )
}