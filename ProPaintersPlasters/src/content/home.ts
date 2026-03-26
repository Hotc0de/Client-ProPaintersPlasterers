import type { HeroContent, ServiceItem } from './types'


export const heroContent: HeroContent = {
  eyebrow: {
    en: 'Trusted local team',
    vi: 'Đội ngũ địa phương đáng tin cậy',
    zh: '值得信赖的本地团队',
  },
  title: {
    en: 'Professional painting and plastering for homes and businesses',
    vi: 'Dịch vụ sơn và bả chuyên nghiệp cho nhà ở và doanh nghiệp',
    zh: '为住宅和商业提供专业油漆和抹灰服务',
  },
  description: {
    en: 'We deliver quality finishes, clear communication, and reliable service from start to finish.',
    vi: 'Chúng tôi mang đến chất lượng hoàn thiện cao, giao tiếp rõ ràng và dịch vụ đáng tin cậy từ đầu đến cuối.',
    zh: '我们提供高质量的施工效果、清晰沟通以及可靠的全程服务。',
  },
  primaryButton: {
    en: 'Get a Free Quote',
    vi: 'Nhận Báo Giá Miễn Phí',
    zh: '获取免费报价',
  },
  secondaryButton: {
    en: 'View Our Work',
    vi: 'Xem Công Trình',
    zh: '查看我们的作品',
  },
}

export const servicesContent = {
  sectionTitle: {
    en: 'Our Services',
    vi: 'Dịch Vụ Của Chúng Tôi',
    zh: '我们的服务',
  },
  sectionDescription: {
    en: 'We provide reliable painting and plastering services for residential and commercial projects.',
    vi: 'Chúng tôi cung cấp dịch vụ sơn và bả đáng tin cậy cho các công trình nhà ở và thương mại.',
    zh: '我们为住宅和商业项目提供可靠的油漆和抹灰服务。',
  },
}

export const serviceItems: ServiceItem[] = [
  {
    id: 'interior-painting',
    title: {
      en: 'Interior Painting',
      vi: 'Sơn Nội Thất',
      zh: '室内油漆',
    },
    description: {
      en: 'Clean, careful painting for walls, ceilings, trims, and living spaces.',
      vi: 'Sơn cẩn thận, sạch sẽ cho tường, trần, len tường và không gian sống.',
      zh: '为墙面、天花板、线条和生活空间提供干净细致的油漆服务。',
    },
  },
  {
    id: 'exterior-painting',
    title: {
      en: 'Exterior Painting',
      vi: 'Sơn Ngoại Thất',
      zh: '室外油漆',
    },
    description: {
      en: 'Durable exterior finishes designed to protect and improve your property.',
      vi: 'Lớp sơn ngoại thất bền đẹp giúp bảo vệ và nâng cao giá trị công trình.',
      zh: '耐用的室外涂装可保护并提升您的房产外观。',
    },
  },
  {
    id: 'plastering',
    title: {
      en: 'Plastering',
      vi: 'Bả Tường',
      zh: '抹灰服务',
    },
    description: {
      en: 'Smooth and professional plastering work ready for a high-quality finish.',
      vi: 'Công việc bả tường mịn và chuyên nghiệp, sẵn sàng cho lớp hoàn thiện chất lượng cao.',
      zh: '平整专业的抹灰施工，为高质量饰面做好准备。',
    },
  },
]