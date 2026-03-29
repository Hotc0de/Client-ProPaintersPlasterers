import aboutImage from '../../assets/images/about/about-main.jpeg'
import type { Locale } from '../../content/types'
import './AboutUs.css'

type AboutUsProps = {
  locale: Locale
}

export function AboutUs({ locale }: AboutUsProps) {
  const content = {
    title: {
      en: 'About Us',
      vi: 'Về Chúng Tôi',
      zh: '关于我们',
    },
    subtitle: {
      en: 'Your trusted partner in painting and plastering excellence',
      vi: 'Đối tác đáng tin cậy trong lĩnh vực sơn và bả chuyên nghiệp',
      zh: '您在油漆与抹灰方面值得信赖的合作伙伴',
    },
    storyTitle: {
      en: 'Our Story',
      vi: 'Câu Chuyện Của Chúng Tôi',
      zh: '我们的故事',
    },
    storyText: {
      en: 'With over 10 years of experience in the industry, Pro Painters & Plasters has grown from a small family business to a trusted name in painting and plastering services. We take pride in delivering quality workmanship for both residential and commercial clients, with clear communication, reliable service, and finishes that stand the test of time.',
      vi: 'Với hơn 10 năm kinh nghiệm trong ngành, Pro Painters & Plasters đã phát triển từ một doanh nghiệp gia đình nhỏ thành một đơn vị đáng tin cậy trong lĩnh vực sơn và bả. Chúng tôi tự hào mang đến tay nghề chất lượng cho cả khách hàng nhà ở và thương mại, với giao tiếp rõ ràng, dịch vụ đáng tin cậy và chất lượng hoàn thiện bền vững theo thời gian.',
      zh: '凭借十多年的行业经验，Pro Painters & Plasters 已从一家小型家族企业发展成为值得信赖的油漆与抹灰服务品牌。我们为住宅和商业客户提供高质量施工、清晰沟通、可靠服务以及经得起时间考验的完工效果。',
    },
  }

  const t = <T extends keyof typeof content>(key: T) => content[key][locale]

  return (
    <section id="about-us" className="about-page">
      <section className="about-page__hero">
        <div className="about-page__hero-inner">
          <h1 className="about-page__title">{t('title')}</h1>
          <p className="about-page__subtitle">{t('subtitle')}</p>
        </div>
      </section>

      <section className="about-page__story">
        <div className="about-page__story-inner">
          <div className="about-page__story-copy">
            <p className="about-page__eyebrow">{t('storyTitle')}</p>
            <h2 className="about-page__story-heading">{t('storyTitle')}</h2>
            <p className="about-page__story-text">{t('storyText')}</p>
          </div>

          <div className="about-page__story-media">
            <div className="about-page__image-frame">
              <img
                src={aboutImage}
                alt={t('title')}
                className="about-page__image"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}