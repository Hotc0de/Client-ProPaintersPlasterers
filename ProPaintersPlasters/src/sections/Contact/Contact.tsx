import { useMemo, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { SectionHeading } from '../../components/common/SectionHeading'
import { contactSectionContent } from '../../content/home'
import { contactInfo } from '../../content/site'
import type { Locale } from '../../content/types'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import contactImage from '../../assets/images/gallery/gallery-2.jpg'
import './Contact.css'

type ContactProps = {
  locale: Locale
}

type ContactFormData = {
  fullName: string
  email: string
  phone: string
  service: string
  message: string
}

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>

export function Contact({ locale }: ContactProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const text = useMemo(
    () => ({
      callLabel: getLocalizedValue(contactSectionContent.callLabel, locale),
      emailLabel: getLocalizedValue(contactSectionContent.emailLabel, locale),
      addressLabel: getLocalizedValue(contactSectionContent.addressLabel, locale),
      hoursLabel: getLocalizedValue(contactSectionContent.hoursLabel, locale),
      hoursValue: getLocalizedValue(contactSectionContent.hoursValue, locale),
      formTitle: getLocalizedValue(contactSectionContent.formTitle, locale),
      fullNameLabel: getLocalizedValue(contactSectionContent.fullNameLabel, locale),
      fullNamePlaceholder: getLocalizedValue(contactSectionContent.fullNamePlaceholder, locale),
      emailInputLabel: getLocalizedValue(contactSectionContent.emailInputLabel, locale),
      emailPlaceholder: getLocalizedValue(contactSectionContent.emailPlaceholder, locale),
      phoneInputLabel: getLocalizedValue(contactSectionContent.phoneInputLabel, locale),
      phonePlaceholder: getLocalizedValue(contactSectionContent.phonePlaceholder, locale),
      serviceLabel: getLocalizedValue(contactSectionContent.serviceLabel, locale),
      servicePlaceholder: getLocalizedValue(contactSectionContent.servicePlaceholder, locale),
      messageLabel: getLocalizedValue(contactSectionContent.messageLabel, locale),
      messagePlaceholder: getLocalizedValue(contactSectionContent.messagePlaceholder, locale),
      submitButtonText: getLocalizedValue(contactSectionContent.submitButtonText, locale),
      validationNameRequired: getLocalizedValue(contactSectionContent.validationNameRequired, locale),
      validationEmailRequired: getLocalizedValue(contactSectionContent.validationEmailRequired, locale),
      validationEmailInvalid: getLocalizedValue(contactSectionContent.validationEmailInvalid, locale),
      validationMessageRequired: getLocalizedValue(contactSectionContent.validationMessageRequired, locale),
      successMessage: getLocalizedValue(contactSectionContent.successMessage, locale),
    }),
    [locale],
  )

  function onFieldChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    if (formErrors[name as keyof ContactFormData]) {
      setFormErrors((previous) => ({
        ...previous,
        [name]: undefined,
      }))
    }
  }

  function validateForm(): ContactFormErrors {
    const errors: ContactFormErrors = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formData.fullName.trim()) {
      errors.fullName = text.validationNameRequired
    }

    if (!formData.email.trim()) {
      errors.email = text.validationEmailRequired
    } else if (!emailPattern.test(formData.email)) {
      errors.email = text.validationEmailInvalid
    }

    if (!formData.message.trim()) {
      errors.message = text.validationMessageRequired
    }

    return errors
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const errors = validateForm()

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      setIsSubmitted(false)
      return
    }

    setFormErrors({})
    setIsSubmitted(true)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    })
  }

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

        <div className="contact__layout">
          <article className="contact-panel contact-panel--info">
            <div className="contact-panel__image-wrap">
              <img
                src={contactImage}
                alt={text.formTitle}
                className="contact-panel__image"
              />
              <div className="contact-panel__image-overlay" />
            </div>

            <div className="contact-panel__details">
              <div className="contact-detail-row">
                <span className="contact-detail-row__icon" aria-hidden="true">☎</span>
                <div className="contact-detail-row__text">
                  <h3>{text.callLabel}</h3>
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </div>
              </div>

              <div className="contact-detail-row">
                <span className="contact-detail-row__icon" aria-hidden="true">✉</span>
                <div className="contact-detail-row__text">
                  <h3>{text.emailLabel}</h3>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
              </div>

              <div className="contact-detail-row">
                <span className="contact-detail-row__icon" aria-hidden="true">⌂</span>
                <div className="contact-detail-row__text">
                  <h3>{text.addressLabel}</h3>
                  <p>{getLocalizedValue(contactInfo.address, locale)}</p>
                </div>
              </div>

              <div className="contact-detail-row">
                <span className="contact-detail-row__icon" aria-hidden="true">🕒</span>
                <div className="contact-detail-row__text">
                  <h3>{text.hoursLabel}</h3>
                  <p>{text.hoursValue}</p>
                </div>
              </div>
            </div>
          </article>

          <article className="contact-panel contact-panel--form">
            <h3 className="contact-form__title">{text.formTitle}</h3>

            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="contact-form__group">
                <label htmlFor="fullName">{text.fullNameLabel}</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={onFieldChange}
                  placeholder={text.fullNamePlaceholder}
                  required
                />
                {formErrors.fullName && <p className="contact-form__error">{formErrors.fullName}</p>}
              </div>

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="email">{text.emailInputLabel}</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={onFieldChange}
                    placeholder={text.emailPlaceholder}
                    required
                  />
                  {formErrors.email && <p className="contact-form__error">{formErrors.email}</p>}
                </div>

                <div className="contact-form__group">
                  <label htmlFor="phone">{text.phoneInputLabel}</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={onFieldChange}
                    placeholder={text.phonePlaceholder}
                  />
                </div>
              </div>

              <div className="contact-form__group">
                <label htmlFor="service">{text.serviceLabel}</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={onFieldChange}
                >
                  <option value="">{text.servicePlaceholder}</option>
                  {contactSectionContent.serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {getLocalizedValue(option.label, locale)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-form__group">
                <label htmlFor="message">{text.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={onFieldChange}
                  placeholder={text.messagePlaceholder}
                  rows={5}
                  required
                />
                {formErrors.message && <p className="contact-form__error">{formErrors.message}</p>}
              </div>

              <button type="submit" className="contact-form__submit">
                <span aria-hidden="true">➤</span>
                <span>{text.submitButtonText}</span>
              </button>

              {isSubmitted && (
                <p className="contact-form__success" role="status" aria-live="polite">
                  {text.successMessage}
                </p>
              )}
            </form>
          </article>
        </div>
      </div>
    </section>
  )
}