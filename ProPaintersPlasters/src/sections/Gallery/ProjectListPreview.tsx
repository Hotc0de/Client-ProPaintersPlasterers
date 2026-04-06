import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { GalleryProject } from '../../content/galleryProjects'
import type { Locale } from '../../content/types'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import { staggerContainer, softScaleIn } from '../../utils/motion'

type ProjectListPreviewProps = {
  projects: GalleryProject[]
  locale: Locale
  reduceMotion: boolean | null
}

export function ProjectListPreview({ projects, locale, reduceMotion }: ProjectListPreviewProps) {
  const [selectedId, setSelectedId] = useState(projects[0]?.id ?? '')
  const selected = projects.find((p) => p.id === selectedId) ?? projects[0]

  const previewVariants = {
    enter: { opacity: 0, scale: 0.97 },
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.97,
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="project-list-preview">
      <motion.div
        className="project-list-preview__list"
        variants={staggerContainer(0.06)}
        initial={reduceMotion ? false : 'hidden'}
        animate="visible"
      >
        {projects.map((project) => (
          <motion.button
            key={project.id}
            className={`project-list-preview__item ${project.id === selectedId ? 'project-list-preview__item--active' : ''}`}
            onClick={() => setSelectedId(project.id)}
            type="button"
            variants={softScaleIn()}
          >
            <img
              src={project.image}
              alt={getLocalizedValue(project.title, locale)}
              className="project-list-preview__thumb"
            />
            <div className="project-list-preview__item-info">
              <h4 className="project-list-preview__item-title">
                {getLocalizedValue(project.title, locale)}
              </h4>
              <span className="project-list-preview__item-tag">{project.category}</span>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <div className="project-list-preview__panel">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            className="project-list-preview__preview"
            variants={previewVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <img
              src={selected.image}
              alt={getLocalizedValue(selected.title, locale)}
              className="project-list-preview__image"
            />
            <div className="project-list-preview__overlay">
              <span className="project-list-preview__badge">{selected.category}</span>
              <h3 className="project-list-preview__title">
                {getLocalizedValue(selected.title, locale)}
              </h3>
              <p className="project-list-preview__description">
                {getLocalizedValue(selected.description, locale)}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
