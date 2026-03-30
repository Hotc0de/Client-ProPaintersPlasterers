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
import { AnimatedCounter } from './AnimatedCounter'
import './Hero.css'
import heroImage from '../../assets/images/hero/hero.jpg'

type HeroProps = {
  locale: Locale
}

function getTitleLines(locale: Locale, title: string) {
  if (locale === 'en') {
    return ['Professional', 'Painting and Plastering', 'Services']
  }

  const words = title.split(/\s+/).filter(Boolean)
  if (words.length < 3) {
    return [title]
  }

  const firstBreak = Math.ceil(words.length / 3)
  const secondBreak = Math.ceil((words.length * 2) / 3)

  return [
    words.slice(0, firstBreak).join(' '),
    words.slice(firstBreak, secondBreak).join(' '),
    words.slice(secondBreak).join(' '),
  ].filter(Boolean)
}

export function Hero({ locale }: HeroProps) {
  const reduceMotion = useReducedMotion()
  const parallaxStyle = useSubtleParallax(24)
  const localizedTitle = getLocalizedValue(heroContent.title, locale)
  const titleLines = getTitleLines(locale, localizedTitle)

  const titleTopDownVariants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -34 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 1.15, ease: luxuryEase, delay: 0.4 },
    },
  }

  const titleBottomUpVariants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 1.15, ease: luxuryEase, delay: 0.65 },
    },
  }

  const titleRightToLeftVariants = {
    hidden: reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 52 },
    visible: {
      opacity: 1,
      x: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 2, ease: luxuryEase, delay: 0.56 },
    },
  }

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

          <motion.h1
            className="hero__title"
            initial={reduceMotion ? false : 'hidden'}
            animate="visible"
          >
            <motion.span className="hero__title-line" variants={titleTopDownVariants}>
              {titleLines[0]}
            </motion.span>
            {titleLines[1] && (
              <motion.span
                className="hero__title-line hero__title-line--accent"
                variants={titleRightToLeftVariants}
              >
                {titleLines[1]}
              </motion.span>
            )}
            {titleLines[2] && (
              <motion.span
                className="hero__title-line"
                variants={titleBottomUpVariants}
              >
                {titleLines[2]}
              </motion.span>
            )}
          </motion.h1>

          <motion.p className="hero__description" variants={fadeUp(0.06)}>
            {getLocalizedValue(heroContent.description, locale)}
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp(0.09)}>
            <motion.a
              href="#contact"
              className="btn btn--primary hero__button hero__button--primary"
              whileHover={reduceMotion ? undefined : {
                ...scaleOnHover,
                boxShadow: '0 12px 32px rgba(212, 175, 55, 0.45)',
              }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              {getLocalizedValue(heroContent.primaryButton, locale)}
            </motion.a>

            <motion.a
              href="#gallery"
              className="btn btn--secondary hero__button hero__button--secondary hero__secondary-btn"
              whileHover={reduceMotion ? undefined : {
                scale: 1.03,
                y: -4,
              }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              {getLocalizedValue(heroContent.secondaryButton, locale)}
            </motion.a>
          </motion.div>

          <motion.div className="hero__stats" variants={staggerContainer(0.08)}>
            {heroStats.map((stat, index) => (
              <motion.article
                key={stat.id}
                className="hero__stat"
                variants={fadeUp()}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                transition={{ duration: 0.3, ease: luxuryEase }}
              >
                <p className="hero__stat-value">
                  <AnimatedCounter
                    value={stat.value}
                    duration={stat.value.includes('1000') ? 2.5 : 2}
                    delay={0.9 + index * 0.1}
                  />
                </p>
                <p className="hero__stat-label">
                  {getLocalizedValue(stat.label, locale)}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}