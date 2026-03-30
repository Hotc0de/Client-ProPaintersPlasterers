import { heroContent, heroStats } from '../../content/home'
import type { Locale } from '../../content/types'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import { motion, useReducedMotion } from 'framer-motion'
import {
  durations,
  fadeUp,
  luxuryEase,
  scaleOnHover,
  staggerContainer,
  useSubtleParallax,
} from '../../utils/motion'
import './Hero.css'
import heroImage from '../../assets/images/hero/hero.jpg'

type HeroProps = {
  locale: Locale
}

export function Hero({ locale }: HeroProps) {
  const reduceMotion = useReducedMotion()
  const parallaxStyle = useSubtleParallax(24)

  return (
    <motion.section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: durations.slow, ease: luxuryEase }}
    >
      <div className="hero__overlay" />
      <motion.div className="hero__glow" style={parallaxStyle} />

      <div className="hero__inner">
        <motion.div
          className="hero__content"
          variants={staggerContainer(0.12, 0.1)}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
        >
          <motion.p className="hero__eyebrow" variants={fadeUp()}>
            <span className="hero__eyebrow-stars" aria-hidden="true">
              ★★★★★
            </span>
            <span>{getLocalizedValue(heroContent.eyebrow, locale)}</span>
          </motion.p>

          <motion.h1 className="hero__title" variants={fadeUp(0.03)}>
            {getLocalizedValue(heroContent.title, locale)}
          </motion.h1>

          <motion.p className="hero__description" variants={fadeUp(0.06)}>
            {getLocalizedValue(heroContent.description, locale)}
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp(0.09)}>
            <motion.a
              href="#contact"
              className="btn btn--primary"
              whileHover={reduceMotion ? undefined : scaleOnHover}
            >
              {getLocalizedValue(heroContent.primaryButton, locale)}
            </motion.a>

            <motion.a
              href="#gallery"
              className="btn btn--secondary hero__secondary-btn"
              whileHover={reduceMotion ? undefined : scaleOnHover}
            >
              {getLocalizedValue(heroContent.secondaryButton, locale)}
            </motion.a>
          </motion.div>

          <motion.div className="hero__stats" variants={staggerContainer(0.08)}>
            {heroStats.map((stat) => (
              <motion.div key={stat.id} className="hero__stat" variants={fadeUp()}>
                <p className="hero__stat-value">{stat.value}</p>
                <p className="hero__stat-label">
                  {getLocalizedValue(stat.label, locale)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}