import { heroContent, heroStats } from '../../content/home'
import type { Locale } from '../../content/types'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import './Hero.css'
import heroImage from '../../assets/images/hero/hero.jpg'

type HeroProps = {
  locale: Locale
}

export function Hero({ locale }: HeroProps) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero__overlay" />
      <div className="hero__glow" />

      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-stars" aria-hidden="true">
              ★★★★★
            </span>
            <span>{getLocalizedValue(heroContent.eyebrow, locale)}</span>
          </p>

          <h1 className="hero__title">
            {getLocalizedValue(heroContent.title, locale)}
          </h1>

          <p className="hero__description">
            {getLocalizedValue(heroContent.description, locale)}
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              {getLocalizedValue(heroContent.primaryButton, locale)}
            </a>

            <a href="#gallery" className="btn btn--secondary hero__secondary-btn">
              {getLocalizedValue(heroContent.secondaryButton, locale)}
            </a>
          </div>

          <div className="hero__stats">
            {heroStats.map((stat) => (
              <div key={stat.id} className="hero__stat">
                <p className="hero__stat-value">{stat.value}</p>
                <p className="hero__stat-label">
                  {getLocalizedValue(stat.label, locale)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}