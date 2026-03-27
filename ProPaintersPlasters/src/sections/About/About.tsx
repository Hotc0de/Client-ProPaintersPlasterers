import type { Locale } from '../../content/types'
import { aboutContent, aboutFeatures } from '../../content/home'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import './About.css'

type AboutProps = {
  locale: Locale
}

export function About({ locale }: AboutProps) {
  return (
    <section id="about" className="about">
      <div className="about__glow about__glow--left" />
      <div className="about__glow about__glow--right" />

      <div className="about__inner">
        <div className="about__media">
          <div className="about__image-frame">
            <img
              src={aboutContent.image}
              alt={getLocalizedValue(aboutContent.imageAlt, locale)}
              className="about__image"
            />
            <div className="about__image-overlay" />
          </div>

          <div className="about__floating-card">
            <span className="about__floating-label">★★★★★</span>
            <p className="about__floating-text">
              {locale === 'vi'
                ? 'Đáng tin cậy và chuyên nghiệp'
                : locale === 'zh'
                  ? '值得信赖且专业'
                  : 'Trusted and professional'}
            </p>
          </div>
        </div>

        <div className="about__content">
          <p className="about__eyebrow">
            {getLocalizedValue(aboutContent.eyebrow, locale)}
          </p>

          <h2 className="about__title">
            {getLocalizedValue(aboutContent.title, locale)}
          </h2>

          <p className="about__description">
            {getLocalizedValue(aboutContent.description, locale)}
          </p>

          <div className="about__features">
            {aboutFeatures.map((feature) => (
              <div key={feature.id} className="about__feature">
                <span className="about__feature-icon" aria-hidden="true">
                  ✓
                </span>
                <span className="about__feature-text">
                  {getLocalizedValue(feature.text, locale)}
                </span>
              </div>
            ))}
          </div>

          <div className="about__stats">
            <div className="about__stat">
              <p className="about__stat-value">10+</p>
              <p className="about__stat-label">
                {locale === 'vi'
                  ? 'Năm kinh nghiệm'
                  : locale === 'zh'
                    ? '年经验'
                    : 'Years experience'}
              </p>
            </div>

            <div className="about__stat">
              <p className="about__stat-value">200+</p>
              <p className="about__stat-label">
                {locale === 'vi'
                  ? 'Dự án hoàn thành'
                  : locale === 'zh'
                    ? '已完成项目'
                    : 'Projects completed'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}