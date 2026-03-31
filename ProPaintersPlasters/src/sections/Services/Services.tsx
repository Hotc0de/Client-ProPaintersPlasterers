import type { Locale } from '../../content/types'
import { serviceItems, servicesContent } from '../../content/home'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import { motion, useReducedMotion } from 'framer-motion'
import {
  fadeUp,
  getRevealProps,
  luxuryEase,
  revealViewport,
  softScaleIn,
  staggerContainer,
} from '../../utils/motion'

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
  const reduceMotion = useReducedMotion()

  const headingRevealProps = reduceMotion
    ? {
        initial: false as const,
        animate: 'visible' as const,
      }
    : {
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: revealViewport,
      }

  const eyebrowVariants = {
    hidden: { opacity: 0, y: -56 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: luxuryEase,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, x: 62 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.85,
        ease: luxuryEase,
        delay: 0.06,
      },
    },
  }

  const descriptionVariants = {
    hidden: { opacity: 0, x: -62 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.85,
        ease: luxuryEase,
        delay: 0.12,
      },
    },
  }

  return (
    <section id="services" className="services">
      <div className="services__inner">
        <motion.div
          className="section-heading section-heading--center services__heading"
          variants={staggerContainer(0.1)}
          {...headingRevealProps}
        >
          <motion.p
            className="section-heading__eyebrow services__eyebrow"
            variants={eyebrowVariants}
          >
            {getLocalizedValue(servicesContent.eyebrow, locale)}
          </motion.p>

          <motion.h2
            className="section-heading__title services__title"
            variants={titleVariants}
          >
            {getLocalizedValue(servicesContent.title, locale)}
          </motion.h2>

          <motion.p
            className="section-heading__description services__description"
            variants={descriptionVariants}
          >
            {getLocalizedValue(servicesContent.description, locale)}
          </motion.p>
        </motion.div>

        <motion.div
          className="services__grid"
          variants={staggerContainer(0.1)}
          {...getRevealProps(reduceMotion)}
        >
          {serviceItems.map((service) => (
            <motion.article
              key={service.id}
              className="service-card"
              variants={softScaleIn()}
            >
              <div
                className="service-card__image"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              <div className="service-card__overlay" />

              <motion.div className="service-card__content" variants={staggerContainer(0.08)}>
                <motion.div className="service-card__badge" variants={fadeUp()}>
                  <img
                    src={iconMap[service.id]}
                    alt=""
                    className="service-card__icon"
                    aria-hidden="true"
                  />
                </motion.div>

                <motion.h3 className="service-card__title" variants={fadeUp(0.02)}>
                  {getLocalizedValue(service.title, locale)}
                </motion.h3>

                <motion.p className="service-card__description" variants={fadeUp(0.04)}>
                  {getLocalizedValue(service.description, locale)}
                </motion.p>

                <motion.div className="service-card__arrow" aria-hidden="true" variants={fadeUp(0.06)}>
                  →
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}