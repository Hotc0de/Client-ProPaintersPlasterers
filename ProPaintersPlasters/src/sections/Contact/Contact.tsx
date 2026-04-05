import { useMemo, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { contactSectionContent } from '../../content/home'
import { contactInfo } from '../../content/site'
import type { Locale } from '../../content/types'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import contactImage from '../../assets/images/gallery/gallery-2.jpg'
import { motion, useReducedMotion } from 'framer-motion'
import {
  fadeUp,
  getRevealProps,
  scaleOnHover,
  softScaleIn,
  staggerContainer,
} from '../../utils/motion'
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
  const reduceMotion = useReducedMotion()
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

  const heroTitleVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: 'easeOut' as const, delay: 0 },
    },
  }

  const heroSubtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: 'easeOut' as const, delay: 0.3 },
    },
  }

  return (
    <section id="contact" className="contact">
      <motion.section
        className="contact-hero"
        variants={staggerContainer(0.1)}
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.div className="contact-hero__content" variants={staggerContainer(0)}>
          <motion.h1 className="contact-hero__eyebrow" variants={heroTitleVariants}>
            {getLocalizedValue(contactSectionContent.eyebrow, locale)}
          </motion.h1>
          <motion.h2 className="contact-hero__title" variants={heroTitleVariants}>
            {getLocalizedValue(contactSectionContent.title, locale)}
          </motion.h2>
          <motion.h3 className="contact-hero__subtitle" variants={heroSubtitleVariants}>
            {getLocalizedValue(contactSectionContent.description, locale)}
          </motion.h3>
        </motion.div>
      </motion.section>

      <div className="contact__inner">
        <div className="contact__layout">
          <motion.article
            className="contact-panel contact-panel--info"
            variants={softScaleIn()}
            {...getRevealProps(reduceMotion)}
          >
            <div className="contact-panel__image-wrap">
              <img
                src={contactImage}
                alt={text.formTitle}
                className="contact-panel__image"
              />
              <div className="contact-panel__image-overlay" />
            </div>

            <motion.div className="contact-panel__details" variants={staggerContainer(0.08)}>
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
            </motion.div>
          </motion.article>

          <motion.article
            className="contact-panel contact-panel--form"
            variants={softScaleIn(0.05)}
            {...getRevealProps(reduceMotion)}
          >
            <motion.h3 className="contact-form__title" variants={fadeUp()}>
              {text.formTitle}
            </motion.h3>

            <motion.form
              className="contact-form"
              onSubmit={onSubmit}
              noValidate
              variants={staggerContainer(0.06)}
            >
              <motion.div className="contact-form__group" variants={fadeUp()}>
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
              </motion.div>

              <motion.div className="contact-form__row" variants={fadeUp()}>
                <motion.div className="contact-form__group">
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
                </motion.div>

                <motion.div className="contact-form__group">
                  <label htmlFor="phone">{text.phoneInputLabel}</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={onFieldChange}
                    placeholder={text.phonePlaceholder}
                  />
                </motion.div>
              </motion.div>

              <motion.div className="contact-form__group" variants={fadeUp()}>
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
              </motion.div>

              <motion.div className="contact-form__group" variants={fadeUp()}>
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
              </motion.div>

              <motion.button
                type="submit"
                className="contact-form__submit"
                whileHover={reduceMotion ? undefined : scaleOnHover}
                variants={fadeUp()}
              >
                <span aria-hidden="true">➤</span>
                <span>{text.submitButtonText}</span>
              </motion.button>

              {isSubmitted && (
                <p className="contact-form__success" role="status" aria-live="polite">
                  {text.successMessage}
                </p>
              )}
            </motion.form>
          </motion.article>
        </div>
      </div>
    </section>
  )
}