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

type TitleSection = {
  text: string
  highlighted?: boolean
}

const titleHighlights: Record<Locale, string> = {
  en: 'painting and plastering',
  vi: 'sơn và bả',
  zh: '油漆和抹灰',
}

function buildTitleSections(title: string, locale: Locale): TitleSection[] {
  const highlight = titleHighlights[locale]
  const lowerTitle = title.toLocaleLowerCase(locale)
  const lowerHighlight = highlight.toLocaleLowerCase(locale)
  const highlightIndex = lowerTitle.indexOf(lowerHighlight)

  if (highlightIndex === -1) {
    return [{ text: title }]
  }

  const before = title.slice(0, highlightIndex).trim()
  const matched = title.slice(highlightIndex, highlightIndex + highlight.length)
  const after = title.slice(highlightIndex + highlight.length).trim()

  return [
    before ? { text: before } : null,
    { text: matched, highlighted: true },
    after ? { text: after } : null,
  ].filter((section): section is TitleSection => section !== null)
}

function splitAnimatedTokens(text: string) {
  if (/\s/u.test(text)) {
    return text.split(/\s+/).filter(Boolean)
  }

  return [text]
}

export function Hero({ locale }: HeroProps) {
  const reduceMotion = useReducedMotion()
  const parallaxStyle = useSubtleParallax(24)
  const localizedTitle = getLocalizedValue(heroContent.title, locale)
  const titleSections = buildTitleSections(localizedTitle, locale)

  const titleContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
        delayChildren: reduceMotion ? 0 : 0.42,
      },
    },
  }

  const titleWordVariants = {
    hidden: reduceMotion
      ? { opacity: 1, y: 0, scale: 1 }
      : { opacity: 0, y: 50, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : {
            type: 'spring' as const,
            damping: 10,
            stiffness: 100,
            duration: 0.8,
          },
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
            variants={titleContainerVariants}
            initial={reduceMotion ? false : 'hidden'}
            animate="visible"
          >
            {titleSections.map((section, sectionIndex) => (
              <span
                key={`${section.text}-${sectionIndex}`}
                className={section.highlighted ? 'hero__highlight' : undefined}
              >
                {splitAnimatedTokens(section.text).map((token, tokenIndex) => (
                  <motion.span
                    key={`${sectionIndex}-${token}-${tokenIndex}`}
                    className="hero__title-token"
                    variants={titleWordVariants}
                  >
                    {token}
                  </motion.span>
                ))}
              </span>
            ))}
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