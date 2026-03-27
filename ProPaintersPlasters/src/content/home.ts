import galleryImage1 from '../assets/images/gallery/gallery-1.jpg'
import galleryImage2 from '../assets/images/gallery/gallery-2.jpg'
import galleryImage3 from '../assets/images/gallery/gallery-3.jpg'
import aboutImage from '../assets/images/about/about-main.jpeg'

import type {
  AboutContent,
  FeatureItem,
  GalleryItem,
  HeroContent,
  SectionIntroContent,
  ServiceItem,
} from './types'


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

export const servicesContent: SectionIntroContent = {
  eyebrow: {
    en: 'What We Do',
    vi: 'Chúng Tôi Làm Gì',
    zh: '我们的业务',
  },
  title: {
    en: 'Our Services',
    vi: 'Dịch Vụ Của Chúng Tôi',
    zh: '我们的服务',
  },
  description: {
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

export const galleryContent: SectionIntroContent = {
  eyebrow: {
    en: 'Our Work',
    vi: 'Công Trình Của Chúng Tôi',
    zh: '我们的作品',
  },
  title: {
    en: 'Recent Projects',
    vi: 'Các Dự Án Gần Đây',
    zh: '近期项目',
  },
  description: {
    en: 'Take a look at some of our recent painting and plastering work.',
    vi: 'Xem qua một số công trình sơn và bả gần đây của chúng tôi.',
    zh: '查看我们最近完成的一些油漆和抹灰项目。',
  },
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    image: galleryImage1,
    alt: {
      en: 'Interior painting project',
      vi: 'Công trình sơn nội thất',
      zh: '室内油漆项目',
    },
    title: {
      en: 'Interior Finish',
      vi: 'Hoàn Thiện Nội Thất',
      zh: '室内完工效果',
    },
  },
  {
    id: 'gallery-2',
    image: galleryImage2,
    alt: {
      en: 'Exterior house painting project',
      vi: 'Công trình sơn ngoại thất nhà ở',
      zh: '住宅外墙油漆项目',
    },
    title: {
      en: 'Exterior Refresh',
      vi: 'Làm Mới Ngoại Thất',
      zh: '外墙翻新',
    },
  },
  {
    id: 'gallery-3',
    image: galleryImage3,
    alt: {
      en: 'Plastering and finishing project',
      vi: 'Công trình bả và hoàn thiện',
      zh: '抹灰与完工项目',
    },
    title: {
      en: 'Smooth Plaster Finish',
      vi: 'Bề Mặt Bả Mịn',
      zh: '平整抹灰效果',
    },
  },
]

export const aboutContent: AboutContent = {
  eyebrow: {
    en: 'Why Choose Us',
    vi: 'Tại Sao Chọn Chúng Tôi',
    zh: '为什么选择我们',
  },
  title: {
    en: 'Reliable workmanship with clear communication',
    vi: 'Tay nghề đáng tin cậy cùng giao tiếp rõ ràng',
    zh: '可靠施工与清晰沟通',
  },
  description: {
    en: 'We focus on quality finishes, dependable service, and a smooth experience from the first quote to the final result.',
    vi: 'Chúng tôi tập trung vào chất lượng hoàn thiện, dịch vụ đáng tin cậy và trải nghiệm suôn sẻ từ báo giá đầu tiên đến kết quả cuối cùng.',
    zh: '我们专注于高质量完工、可靠服务，以及从首次报价到最终成果的顺畅体验。',
  },
  image: aboutImage,
  imageAlt: {
    en: 'Painting and plastering team at work',
    vi: 'Đội ngũ sơn và bả đang làm việc',
    zh: '油漆和抹灰团队施工中',
  },
}

export const aboutFeatures: FeatureItem[] = [
  {
    id: 'quality',
    text: {
      en: 'Quality finishes for homes and commercial spaces',
      vi: 'Hoàn thiện chất lượng cho nhà ở và không gian thương mại',
      zh: '为住宅和商业空间提供高质量完工效果',
    },
  },
  {
    id: 'communication',
    text: {
      en: 'Clear communication throughout the project',
      vi: 'Giao tiếp rõ ràng trong suốt quá trình thực hiện',
      zh: '项目全过程清晰沟通',
    },
  },
  {
    id: 'reliable',
    text: {
      en: 'Reliable service you can count on',
      vi: 'Dịch vụ đáng tin cậy mà bạn có thể yên tâm',
      zh: '值得信赖的服务',
    },
  },
]