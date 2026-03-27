import { heroContent } from '../../content/home'
import type { Locale } from '../../content/types'
import './Hero.css'

import heroImage from '../../assets/images/hero/hero.jpg' // or hero/hero.jpg if you move it

type HeroProps = {
  locale: Locale
}

export function Hero({ locale }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero__inner"> {/* 👈 THIS IS NEW */}
        
        <div className="hero__content">
          <p className="hero__eyebrow">
            {heroContent.eyebrow[locale]}
          </p>

          <h1 className="hero__title">
            {heroContent.title[locale]}
          </h1>

          <p className="hero__description">
            {heroContent.description[locale]}
          </p>

          <div className="hero__actions">
            <a href="#contact" className="hero__button hero__button--primary">
              {heroContent.primaryButton[locale]}
            </a>

            <a href="#gallery" className="hero__button hero__button--secondary">
              {heroContent.secondaryButton[locale]}
            </a>
          </div>
        </div>

        <div className="hero__image"> {/* 👈 THIS IS NEW */}
          <img src={heroImage} alt="Painting work" />
        </div>

      </div>
    </section>
  )
}