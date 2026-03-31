import type { Locale } from '../../content/types'
import { galleryItems, galleryContent } from '../../content/home'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import { motion, useReducedMotion } from 'framer-motion'
import {
  getRevealProps,
  luxuryEase,
  durations,
  softScaleIn,
  staggerContainer,
  revealViewport,
} from '../../utils/motion'
import './Gallery.css'

type GalleryProps = {
  locale: Locale
}

const titleVariant = {
  hidden: { opacity: 0, y: 38 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: luxuryEase,
      delay: 0.14,
    },
  },
}

const descriptionVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: luxuryEase,
      delay: 0.24,
    },
  },
}

const eyebrowVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.base,
      ease: luxuryEase,
      delay: 0.04,
    },
  },
}

export function Gallery({ locale }: GalleryProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="gallery" className="gallery">
      <div className="gallery__inner">
        <motion.div
          className="gallery__header"
          variants={staggerContainer(0)}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={revealViewport}
        >
          <motion.p className="gallery__eyebrow" variants={eyebrowVariant}>
            {getLocalizedValue(galleryContent.eyebrow, locale)}
          </motion.p>

          <motion.h2 className="gallery__title" variants={titleVariant}>
            {getLocalizedValue(galleryContent.title, locale)}
          </motion.h2>

          <motion.p className="gallery__description" variants={descriptionVariant}>
            {getLocalizedValue(galleryContent.description, locale)}
          </motion.p>
        </motion.div>

        <motion.div
          className="gallery__grid"
          variants={staggerContainer(0.08)}
          {...getRevealProps(reduceMotion)}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className="gallery__card"
              variants={softScaleIn()}
            >
              <motion.div className="gallery__image-wrapper">
                <motion.img
                  src={item.image}
                  alt={getLocalizedValue(item.alt, locale)}
                  className="gallery__image"
                />

                <motion.div
                  className="gallery__overlay"
                  initial={reduceMotion ? undefined : { opacity: 0 }}
                  whileHover={reduceMotion ? undefined : { opacity: 1 }}
                  transition={{ duration: 0.35 }}
                >
                  <motion.h3
                    className="gallery__card-title"
                    initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
                    whileHover={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {getLocalizedValue(item.title, locale)}
                  </motion.h3>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}