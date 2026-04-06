import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { GalleryProject } from '../../content/galleryProjects'
import type { Locale } from '../../content/types'
import { getLocalizedValue } from '../../utils/getLocalizedValue'

type FeaturedProjectCarouselProps = {
  projects: GalleryProject[]
  locale: Locale
}

const AUTO_ADVANCE_MS = 6000

export function FeaturedProjectCarousel({ projects, locale }: FeaturedProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const project = projects[currentIndex]

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, AUTO_ADVANCE_MS)
  }, [projects.length])

  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [currentIndex, resetTimer])

  function goTo(index: number) {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  function goPrev() {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  function goNext() {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const slideVariants = {
    enter: (d: number) => ({
      x: d > 0 ? '40%' : '-40%',
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (d: number) => ({
      x: d > 0 ? '-40%' : '40%',
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  const infoVariants = {
    enter: { opacity: 0, y: 16 },
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="featured-carousel">
      <div className="featured-carousel__stage">
        <button
          className="featured-carousel__arrow featured-carousel__arrow--prev"
          onClick={goPrev}
          type="button"
          aria-label="Previous project"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="featured-carousel__image-frame">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={project.id}
              className="featured-carousel__slide"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <img
                src={project.image}
                alt={getLocalizedValue(project.title, locale)}
                className="featured-carousel__image"
              />
              <span className="featured-carousel__badge">{project.category}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className="featured-carousel__arrow featured-carousel__arrow--next"
          onClick={goNext}
          type="button"
          aria-label="Next project"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          className="featured-carousel__info"
          variants={infoVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <div className="featured-carousel__accent-line" />
          <h3 className="featured-carousel__title">
            {getLocalizedValue(project.title, locale)}
          </h3>
          <p className="featured-carousel__description">
            {getLocalizedValue(project.description, locale)}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="featured-carousel__dots">
        {projects.map((p, i) => (
          <button
            key={p.id}
            className={`featured-carousel__dot ${i === currentIndex ? 'featured-carousel__dot--active' : ''}`}
            onClick={() => goTo(i)}
            type="button"
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
