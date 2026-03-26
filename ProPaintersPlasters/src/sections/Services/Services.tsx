import type { Locale } from '../../content/types'
import { SectionHeading } from '../../components/common/SectionHeading'
import { serviceItems, servicesContent } from '../../content/home'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import './Services.css'

type ServicesProps = {
  locale: Locale
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
          align="left"
        />

        <div className="services__grid">
          {serviceItems.map((service) => (
            <article key={service.id} className="service-card">
              <h3 className="service-card__title">
                {getLocalizedValue(service.title, locale)}
              </h3>

              <p className="service-card__description">
                {getLocalizedValue(service.description, locale)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}