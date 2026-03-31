import aboutImage from '../../assets/images/about/about-main.jpeg'
import type { Locale } from '../../content/types'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, getRevealProps, scaleOnHover, softScaleIn, staggerContainer } from '../../utils/motion'
import './AboutUs.css'

type AboutUsProps = {
  locale: Locale
}

export function AboutUs({ locale }: AboutUsProps) {
  const reduceMotion = useReducedMotion()

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
    story: {
      label: {
        en: 'OUR STORY',
        vi: 'CÂU CHUYỆN CỦA CHÚNG TÔI',
        zh: '我们的故事',
      },
      title: {
        en: 'Built on Craftsmanship and Trust',
        vi: 'Xây Dựng Trên Tay Nghề Và Niềm Tin',
        zh: '以工艺与信任为基石',
      },
      content: {
        en: 'With over 10 years of experience in the industry, Pro Painters & Plasters has grown from a small family business to a trusted name in painting and plastering services. We take pride in delivering quality workmanship for both residential and commercial clients, with clear communication, reliable service, and finishes that stand the test of time.',
        vi: 'Với hơn 10 năm kinh nghiệm trong ngành, Pro Painters & Plasters đã phát triển từ một doanh nghiệp gia đình nhỏ thành một đơn vị đáng tin cậy trong lĩnh vực sơn và bả. Chúng tôi tự hào mang đến tay nghề chất lượng cho cả khách hàng nhà ở và thương mại, với giao tiếp rõ ràng, dịch vụ đáng tin cậy và chất lượng hoàn thiện bền vững theo thời gian.',
        zh: '凭借十多年的行业经验，Pro Painters & Plasters 已从一家小型家族企业发展成为值得信赖的油漆与抹灰服务品牌。我们为住宅和商业客户提供高质量施工、清晰沟通、可靠服务以及经得起时间考验的完工效果。',
      },
    },
    mission: {
      label: {
        en: 'OUR MISSION',
        vi: 'SỨ MỆNH CỦA CHÚNG TÔI',
        zh: '我们的使命',
      },
      title: {
        en: 'Deliver Lasting Results with Zero Guesswork',
        vi: 'Mang Đến Kết Quả Bền Vững Không Mập Mờ',
        zh: '以透明流程交付持久成果',
      },
      content: {
        en: 'Our mission is simple: deliver beautiful, durable finishes through careful preparation, expert execution, and honest communication at every stage.',
        vi: 'Sứ mệnh của chúng tôi rất rõ ràng: mang lại bề mặt hoàn thiện đẹp và bền bằng quy trình chuẩn bị kỹ lưỡng, thi công chuyên nghiệp và giao tiếp minh bạch ở mọi giai đoạn.',
        zh: '我们的使命很明确：通过细致准备、专业施工和全程透明沟通，交付美观且耐久的完工品质。',
      },
    },
    values: {
      title: {
        en: 'Our Core Values',
        vi: 'Giá Trị Cốt Lõi',
        zh: '我们的核心价值',
      },
      items: [
        {
          id: 'quality',
          title: {
            en: 'Quality First',
            vi: 'Chất Lượng Hàng Đầu',
            zh: '质量优先',
          },
          description: {
            en: 'We treat every surface with care and deliver finishes we are proud to stand behind.',
            vi: 'Chúng tôi chăm chút từng bề mặt và mang đến chất lượng hoàn thiện mà chúng tôi tự hào bảo chứng.',
            zh: '我们认真对待每一处细节，交付值得长期信赖的完工质量。',
          },
        },
        {
          id: 'trust',
          title: {
            en: 'Transparency',
            vi: 'Minh Bạch',
            zh: '透明沟通',
          },
          description: {
            en: 'Clear timelines, fair pricing, and honest updates from start to finish.',
            vi: 'Tiến độ rõ ràng, báo giá hợp lý và cập nhật trung thực từ đầu đến cuối.',
            zh: '从开始到结束，时间、报价与进度都清晰透明。',
          },
        },
        {
          id: 'care',
          title: {
            en: 'Client Care',
            vi: 'Tận Tâm Với Khách Hàng',
            zh: '客户关怀',
          },
          description: {
            en: 'We listen closely, respect your space, and tailor solutions to your goals.',
            vi: 'Chúng tôi lắng nghe kỹ, tôn trọng không gian của bạn và đưa ra giải pháp phù hợp.',
            zh: '我们重视沟通，尊重您的空间，并按您的目标定制方案。',
          },
        },
        {
          id: 'precision',
          title: {
            en: 'Precision',
            vi: 'Chính Xác',
            zh: '精准执行',
          },
          description: {
            en: 'From prep work to final coat, we focus on the details that make a lasting difference.',
            vi: 'Từ khâu chuẩn bị đến lớp hoàn thiện cuối cùng, chúng tôi chú trọng từng chi tiết tạo nên khác biệt.',
            zh: '从基层处理到最后一层涂装，我们专注每个决定品质的细节。',
          },
        },
      ],
    },
    team: {
      title: {
        en: 'A Team You Can Rely On',
        vi: 'Đội Ngũ Bạn Có Thể Tin Cậy',
        zh: '值得信赖的团队',
      },
      description: {
        en: 'Our experienced painters and plasterers work as one team, keeping your project smooth, efficient, and stress-free.',
        vi: 'Đội ngũ thợ sơn và bả giàu kinh nghiệm của chúng tôi phối hợp chặt chẽ để dự án diễn ra mượt mà, hiệu quả và ít áp lực.',
        zh: '我们的油漆与抹灰团队协作高效，让项目过程顺畅、省心、可控。',
      },
    },
    commitment: {
      title: {
        en: 'Our Commitment to Every Project',
        vi: 'Cam Kết Cho Mọi Công Trình',
        zh: '我们对每个项目的承诺',
      },
      description: {
        en: 'No shortcuts. No hidden surprises. Just dependable service, clear communication, and results that elevate your home or business.',
        vi: 'Không cắt giảm quy trình. Không phát sinh mập mờ. Chỉ có dịch vụ đáng tin cậy, giao tiếp rõ ràng và kết quả nâng tầm công trình của bạn.',
        zh: '不走捷径，不玩文字游戏。我们只提供可靠服务、清晰沟通和真正提升空间品质的成果。',
      },
    },
  }

  const valueIcons = ['★', '🛡', '❤', '◎']

  const t = (text: Record<Locale, string>) => text[locale]

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
  }

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
  }

  return (
    <section id="about-us" className="about-us-page">
      <motion.section
        className="about-hero"
        variants={staggerContainer(0.1)}
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.div className="about-hero-content" variants={staggerContainer(0)}>
          <motion.h1 className="about-hero-title" variants={heroTitleVariants}>{t(content.title)}</motion.h1>
          <motion.p className="about-hero-subtitle" variants={heroSubtitleVariants}>{t(content.subtitle)}</motion.p>
        </motion.div>
      </motion.section>

      <section className="about-section">
        <div className="about-container">
          <motion.div
            className="about-content-wrapper"
            variants={staggerContainer(0.12)}
            {...getRevealProps(reduceMotion)}
          >
            <motion.div className="about-text-content" variants={fadeUp()}>
              <motion.div className="about-label" variants={fadeUp()}>{t(content.story.label)}</motion.div>
              <motion.h2 className="about-section-title" variants={fadeUp(0.03)}>{t(content.story.title)}</motion.h2>
              <motion.p className="about-section-text" variants={fadeUp(0.05)}>{t(content.story.content)}</motion.p>
            </motion.div>

            <motion.div className="about-image-container" variants={softScaleIn(0.06)}>
              <motion.img
                src={aboutImage}
                alt={t(content.story.title)}
                className="about-main-image"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="about-section about-section-alt">
        <div className="about-container">
          <motion.div
            className="about-content-wrapper about-content-reverse"
            variants={staggerContainer(0.12)}
            {...getRevealProps(reduceMotion)}
          >
            <motion.div className="about-image-container" variants={softScaleIn()}>
              <motion.img
                src={aboutImage}
                alt={t(content.mission.title)}
                className="about-main-image"
              />
            </motion.div>

            <motion.div className="about-text-content" variants={fadeUp(0.04)}>
              <motion.div className="about-label" variants={fadeUp()}>{t(content.mission.label)}</motion.div>
              <motion.h2 className="about-section-title" variants={fadeUp(0.03)}>{t(content.mission.title)}</motion.h2>
              <motion.p className="about-section-text" variants={fadeUp(0.05)}>{t(content.mission.content)}</motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <motion.div className="about-values-header" variants={fadeUp()} {...getRevealProps(reduceMotion)}>
            <h2 className="about-section-title-centered">{t(content.values.title)}</h2>
          </motion.div>

          <motion.div
            className="about-values-grid"
            variants={staggerContainer(0.08)}
            {...getRevealProps(reduceMotion)}
          >
            {content.values.items.map((value, index) => (
              <motion.article
                key={value.id}
                className="about-value-card"
                variants={softScaleIn()}
                whileHover={reduceMotion ? undefined : scaleOnHover}
              >
                <div className="about-value-icon">{valueIcons[index] ?? '•'}</div>
                <h3 className="about-value-title">{t(value.title)}</h3>
                <p className="about-value-description">{t(value.description)}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="about-section about-section-alt">
        <div className="about-container">
          <motion.div className="about-team-content" variants={staggerContainer(0.1)} {...getRevealProps(reduceMotion)}>
            <motion.h2 className="about-section-title-centered" variants={fadeUp()}>{t(content.team.title)}</motion.h2>
            <motion.p className="about-team-description" variants={fadeUp(0.04)}>{t(content.team.description)}</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="about-section about-commitment">
        <div className="about-container">
          <motion.div className="about-commitment-content" variants={staggerContainer(0.1)} {...getRevealProps(reduceMotion)}>
            <motion.h2 className="about-section-title-centered" variants={fadeUp()}>{t(content.commitment.title)}</motion.h2>
            <motion.p className="about-commitment-description" variants={fadeUp(0.04)}>{t(content.commitment.description)}</motion.p>
          </motion.div>
        </div>
      </section>
    </section>
  )
}