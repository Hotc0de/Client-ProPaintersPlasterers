import type { Locale, LocalizedText } from '../../content/types'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, getRevealProps, staggerContainer } from '../../utils/motion'
import './SectionHeading.css'

type SectionHeadingProps = {
  locale: Locale
  eyebrow?: LocalizedText
  title: LocalizedText
  description?: LocalizedText
  align?: 'left' | 'center'
}

export function SectionHeading({
  locale,
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={`section-heading section-heading--${align}`}
      variants={staggerContainer(0.1)}
      {...getRevealProps(reduceMotion)}
    >
      {eyebrow && (
        <motion.p className="section-heading__eyebrow" variants={fadeUp()}>
          {getLocalizedValue(eyebrow, locale)}
        </motion.p>
      )}

      <motion.h2 className="section-heading__title" variants={fadeUp(0.03)}>
        {getLocalizedValue(title, locale)}
      </motion.h2>

      {description && (
        <motion.p className="section-heading__description" variants={fadeUp(0.06)}>
          {getLocalizedValue(description, locale)}
        </motion.p>
      )}
    </motion.div>
  )
}