import type { Locale } from '../../content/types'
import { whyChooseUsContent, whyChooseUsFeatures } from '../../content/home'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, getRevealProps, softScaleIn, staggerContainer } from '../../utils/motion'
import './WhyChooseUs.css'

type WhyChooseUsProps = {
  locale: Locale
}

const heroTitleVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: 'easeOut' as const,
      delay: 0,
    },
  },
} as const

const heroSubtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: 'easeOut' as const,
      delay: 0.3,
    },
  },
} as const

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.9,
      ease: 'easeOut' as const,
      delay: 0.46,
    },
  },
} as const

export function WhyChooseUs({ locale }: WhyChooseUsProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="why-choose-us" className="WhyChooseUs about">
      <div className="about__glow about__glow--left" />
      <div className="about__glow about__glow--right" />

      <motion.div
        className="whychooseus-hero"
        variants={staggerContainer(0.1)}
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.div className="whychooseus-hero-content" variants={staggerContainer(0)}>
          <motion.h2 className="whychooseus-hero-title" variants={heroTitleVariants}>
            {getLocalizedValue(whyChooseUsContent.eyebrow, locale)}
          </motion.h2>

          <motion.p className="whychooseus-hero-subtitle" variants={heroSubtitleVariants}>
            {getLocalizedValue(whyChooseUsContent.title, locale)}
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div className="about__inner" variants={staggerContainer(0.12)} {...getRevealProps(reduceMotion)}>
        <motion.div className="about__media" variants={softScaleIn()}>
          <motion.div className="about__image-frame" variants={fadeUp()}>
            <img
              src={whyChooseUsContent.image}
              alt={getLocalizedValue(whyChooseUsContent.imageAlt, locale)}
              className="about__image"
            />
            <div className="about__image-overlay" />
          </motion.div>

          <motion.div className="about__floating-card" variants={fadeUp(0.04)}>
            <span className="about__floating-label">★★★★★</span>
            <p className="about__floating-text">
              {locale === 'vi'
                ? 'Đáng tin cậy và chuyên nghiệp'
                : locale === 'zh'
                  ? '值得信赖且专业'
                  : 'Trusted and professional'}
            </p>
          </motion.div>
        </motion.div>

        <motion.div className="about__content" variants={staggerContainer(0.08)}>
          <motion.p className="about__description" variants={descriptionVariants}>
            {getLocalizedValue(whyChooseUsContent.description, locale)}
          </motion.p>

          <motion.div className="about__features" variants={staggerContainer(0.06)}>
            {whyChooseUsFeatures.map((feature) => (
              <motion.div key={feature.id} className="about__feature" variants={fadeUp()}>
                <span className="about__feature-icon">✓</span>
                <span className="about__feature-text">
                  {getLocalizedValue(feature.text, locale)}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="about__stats" variants={staggerContainer(0.08)}>
            <motion.div className="about__stat" variants={fadeUp()}>
              <p className="about__stat-value">10+</p>
              <p className="about__stat-label">
                {locale === 'vi'
                  ? 'Năm kinh nghiệm'
                  : locale === 'zh'
                    ? '年经验'
                    : 'Years experience'}
              </p>
            </motion.div>

            <motion.div className="about__stat" variants={fadeUp()}>
              <p className="about__stat-value">200+</p>
              <p className="about__stat-label">
                {locale === 'vi'
                  ? 'Dự án hoàn thành'
                  : locale === 'zh'
                    ? '已完成项目'
                    : 'Projects completed'}
              </p>
            </motion.div>

            <motion.div className="about__stat" variants={fadeUp()}>
              <p className="about__stat-value">
                {locale === 'vi'
                  ? 'Nhà ở & Thương mại'
                  : locale === 'zh'
                    ? '住宅与商业'
                    : 'Residential & Commercial'}
              </p>
              <p className="about__stat-label">
                {locale === 'vi'
                  ? 'Dự án mọi quy mô'
                  : locale === 'zh'
                    ? '各类规模项目'
                    : 'Projects of all sizes'}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}