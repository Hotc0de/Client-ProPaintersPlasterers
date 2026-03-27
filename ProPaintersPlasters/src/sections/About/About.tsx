import { aboutContent, aboutFeatures } from '../../content/home'
import type { Locale } from '../../content/types'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import './About.css'

type AboutProps = {
  locale: Locale
}

export function About({ locale }: AboutProps) {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__image-column">
          <img
            src={aboutContent.image}
            alt={getLocalizedValue(aboutContent.imageAlt, locale)}
            className="about__image"
          />
        </div>

        <div className="about__content-column">
          <p className="about__eyebrow">
            {getLocalizedValue(aboutContent.eyebrow, locale)}
          </p>

          <h2 className="about__title">
            {getLocalizedValue(aboutContent.title, locale)}
          </h2>

          <p className="about__description">
            {getLocalizedValue(aboutContent.description, locale)}
          </p>

          <ul className="about__features">
            {aboutFeatures.map((feature) => (
              <li key={feature.id} className="about__feature-item">
                {getLocalizedValue(feature.text, locale)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}