import { SectionHeading } from '../../components/common/SectionHeading'
import { contactSectionContent } from '../../content/home'
import { contactInfo } from '../../content/site'
import type { Locale } from '../../content/types'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import './Contact.css'

type ContactProps = {
  locale: Locale
}

export function Contact({ locale }: ContactProps) {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <SectionHeading
          locale={locale}
          eyebrow={contactSectionContent.eyebrow}
          title={contactSectionContent.title}
          description={contactSectionContent.description}
          align="center"
        />

        <div className="contact__grid">
          <article className="contact-card card-hover">
            <h3 className="contact-card__label">
              {getLocalizedValue(contactSectionContent.callLabel, locale)}
            </h3>
            <a className="contact-card__value" href={`tel:${contactInfo.phone}`}>
              {contactInfo.phone}
            </a>
          </article>

          <article className="contact-card card-hover">
            <h3 className="contact-card__label">
              {getLocalizedValue(contactSectionContent.emailLabel, locale)}
            </h3>
            <a className="contact-card__value" href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </a>
          </article>

          <article className="contact-card card-hover">
            <h3 className="contact-card__label">
              {getLocalizedValue(contactSectionContent.addressLabel, locale)}
            </h3>
            <p className="contact-card__value">
              {getLocalizedValue(contactInfo.address, locale)}
            </p>
          </article>
        </div>

        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${contactInfo.email}`}>
            {getLocalizedValue(contactSectionContent.buttonText, locale)}
          </a>
        </div>
      </div>
    </section>
  )
}