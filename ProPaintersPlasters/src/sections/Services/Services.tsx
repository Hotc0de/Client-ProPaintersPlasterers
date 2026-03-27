import type { Locale } from '../../content/types'
import { SectionHeading } from '../../components/common/SectionHeading'
import { serviceItems, servicesContent } from '../../content/home'
import { getLocalizedValue } from '../../utils/getLocalizedValue'

import interiorIcon from '../../assets/icons/interior.svg'
import exteriorIcon from '../../assets/icons/exterior.svg'
import plasterIcon from '../../assets/icons/plaster.svg'
import commercialIcon from '../../assets/icons/commercial.svg'

import './Services.css'

type ServicesProps = {
  locale: Locale
}

const iconMap: Record<string, string> = {
  'interior-painting': interiorIcon,
  'exterior-painting': exteriorIcon,
  plastering: plasterIcon,
  commercial: commercialIcon,
}

export function Services({ locale }: ServicesProps) {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <SectionHeading
          locale={locale}
          eyebrow={servicesContent.eyebrow}
          title={servicesContent.title}
          description={servicesContent.description}
          align="center"
        />

        <div className="services__grid">
          {serviceItems.map((service) => (
            <article key={service.id} className="service-card">
              <div
                className="service-card__image"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              <div className="service-card__overlay" />

              <div className="service-card__content">
                <div className="service-card__badge">
                  <img
                    src={iconMap[service.id]}
                    alt=""
                    className="service-card__icon"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="service-card__title">
                  {getLocalizedValue(service.title, locale)}
                </h3>

                <p className="service-card__description">
                  {getLocalizedValue(service.description, locale)}
                </p>

                <div className="service-card__arrow" aria-hidden="true">
                  →
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}