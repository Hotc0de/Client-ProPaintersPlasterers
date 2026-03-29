import type { Locale } from '../../content/types'
import { whyChooseUsContent, whyChooseUsFeatures } from '../../content/home'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import './WhyChooseUs.css'

type WhyChooseUsProps = {
  locale: Locale
}

export function WhyChooseUs({ locale }: WhyChooseUsProps) {
  return (
    <section id="why-choose-us" className="WhyChooseUs">
      <div className="about__glow about__glow--left" />
      <div className="about__glow about__glow--right" />

      <div className="about__inner">
        <div className="about__media">
          <div className="about__image-frame">
            <img
              src={whyChooseUsContent.image}
              alt={getLocalizedValue(whyChooseUsContent.imageAlt, locale)}
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
            {getLocalizedValue(whyChooseUsContent.eyebrow, locale)}
          </p>

          <h2 className="about__title">
            {getLocalizedValue(whyChooseUsContent.title, locale)}
          </h2>

          <p className="about__description">
            {getLocalizedValue(whyChooseUsContent.description, locale)}
          </p>

          <div className="about__features">
            {whyChooseUsFeatures.map((feature) => (
              <div key={feature.id} className="about__feature">
                <span className="about__feature-icon">✓</span>
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

            <div className="about__stat">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}