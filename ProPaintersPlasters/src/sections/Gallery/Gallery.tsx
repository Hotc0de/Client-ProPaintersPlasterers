import { useState } from 'react'
import type { Locale } from '../../content/types'
import { galleryContent } from '../../content/home'
import { galleryProjects } from '../../content/galleryProjects'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { staggerContainer, revealViewport } from '../../utils/motion'
import { GalleryViewSwitcher } from './GalleryViewSwitcher'
import { FeaturedProjectCarousel } from './FeaturedProjectCarousel'
import { ProjectListPreview } from './ProjectListPreview'
import './Gallery.css'

type GalleryProps = {
  locale: Locale
}

type GalleryViewMode = 'featured' | 'list'

const titleVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.9,
      ease: 'easeOut' as const,
      delay: 0,
    },
  },
}

const descriptionVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.9,
      ease: 'easeOut' as const,
      delay: 0.24,
    },
  },
}

const viewTransition = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -14,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Gallery({ locale }: GalleryProps) {
  const reduceMotion = useReducedMotion()
  const [viewMode, setViewMode] = useState<GalleryViewMode>('featured')

  return (
    <section id="gallery" className="gallery">
      <div className="gallery__intro-hero">
        <motion.div
          className="gallery__header"
          variants={staggerContainer(0)}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={revealViewport}
        >
          <motion.h2 className="gallery__title" variants={titleVariant}>
            {getLocalizedValue(galleryContent.title, locale)}
          </motion.h2>

          <motion.p className="gallery__description" variants={descriptionVariant}>
            {getLocalizedValue(galleryContent.description, locale)}
          </motion.p>
        </motion.div>
      </div>

      <div className="gallery__inner">
        <GalleryViewSwitcher activeView={viewMode} onViewChange={setViewMode} />

        <AnimatePresence mode="wait">
          {viewMode === 'featured' ? (
            <motion.div key="featured" {...viewTransition}>
              <FeaturedProjectCarousel projects={galleryProjects} locale={locale} />
            </motion.div>
          ) : (
            <motion.div key="list" {...viewTransition}>
              <ProjectListPreview
                projects={galleryProjects}
                locale={locale}
                reduceMotion={reduceMotion}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}