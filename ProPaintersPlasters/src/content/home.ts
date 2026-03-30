import serviceImage1 from '../assets/images/services/service-1.jpg'
import serviceImage2 from '../assets/images/services/service-2.jpg'
import serviceImage3 from '../assets/images/services/service-3.jpg'
import serviceImage4 from '../assets/images/services/service-4.jpg'

import galleryImage1 from '../assets/images/gallery/gallery-1.jpg'
import galleryImage2 from '../assets/images/gallery/gallery-2.jpg'
import galleryImage3 from '../assets/images/gallery/gallery-3.jpg'
import aboutImage from '../assets/images/about/about-main.jpeg'

import type {
  ContactSectionContent,
  FeatureItem,
  GalleryItem,
  HeroContent,
  SectionIntroContent,
  ServiceItem,
  StatItem,
  WhyChooseUsContent,
} from './types'


// ================= HERO =================
export const heroContent: HeroContent = {
  eyebrow: {
    en: 'Trusted local team',
    vi: 'Đội ngũ địa phương đáng tin cậy',
    zh: '值得信赖的本地团队',
  },
  title: {
    en: 'Professional Painting and Plastering Services',
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

// ================= STATS =================
export const heroStats: StatItem[] = [
  {
    id: 'projects',
    value: '1000+',
    label: {
      en: 'Completed projects',
      vi: 'Dự án đã hoàn thành',
      zh: '已完成项目',
    },
  },
  {
    id: 'experience',
    value: '10+',
    label: {
      en: 'Years of experience',
      vi: 'Năm kinh nghiệm',
      zh: '年经验',
    },
  },
  {
    id: 'clients',
    value: '100%',
    label: {
      en: 'Client satisfaction',
      vi: 'Sự hài lòng khách hàng',
      zh: '客户满意度',
    },
  },
]

// ================= SERVICES INTRO =================
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

// ================= SERVICES =================
export const serviceItems: ServiceItem[] = [
  {
    id: 'interior-painting',
    image: serviceImage1,
    title: {
      en: 'Interior Painting',
      vi: 'Sơn Nội Thất',
      zh: '室内油漆',
    },
    description: {
      en: 'Clean, careful painting for walls, ceilings, trims, and living spaces.',
      vi: 'Sơn cẩn thận, sạch sẽ cho tường, trần và không gian sống.',
      zh: '为墙面、天花板和生活空间提供细致专业的室内油漆服务。',
    },
  },
  {
    id: 'exterior-painting',
    image: serviceImage2,
    title: {
      en: 'Exterior Painting',
      vi: 'Sơn Ngoại Thất',
      zh: '室外油漆',
    },
    description: {
      en: 'Durable exterior finishes designed to protect and improve your property.',
      vi: 'Sơn ngoại thất bền đẹp giúp bảo vệ và nâng cấp công trình.',
      zh: '耐用的外墙涂装可保护并提升您的房产外观。',
    },
  },
  {
    id: 'private-services',
    image: serviceImage3,
    title: {
      en: 'Private Services',
      vi: 'Dịch Vụ Nhà Ở',
      zh: '住宅服务',
    },
    description: {
      en: 'Professional painting and plastering services tailored for residential homes.',
      vi: 'Dịch vụ sơn và bả chuyên nghiệp dành riêng cho nhà ở.',
      zh: '为住宅提供专业的油漆和抹灰服务。',
    },
  },
  {
    id: 'commercial',
    image: serviceImage4,
    title: {
      en: 'Commercial Services',
      vi: 'Dịch Vụ Thương Mại',
      zh: '商业服务',
    },
    description: {
      en: 'Reliable services for offices, retail, and commercial properties.',
      vi: 'Dịch vụ đáng tin cậy cho văn phòng và công trình thương mại.',
      zh: '为办公室、零售空间和商业物业提供可靠服务。',
    },
  },
]

// ================= GALLERY =================
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
    vi: 'Xem qua một số công trình gần đây của chúng tôi.',
    zh: '查看我们最近完成的一些项目。',
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
      en: 'Exterior painting project',
      vi: 'Công trình sơn ngoại thất',
      zh: '外墙油漆项目',
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
      en: 'Plastering project',
      vi: 'Công trình bả tường',
      zh: '抹灰项目',
    },
    title: {
      en: 'Smooth Finish',
      vi: 'Bề Mặt Mịn',
      zh: '平整效果',
    },
  },
]

// ================= ABOUT =================
export const whyChooseUsContent: WhyChooseUsContent = {
  eyebrow: {
    en: 'Why Choose Us',
    vi: 'Tại Sao Chọn Chúng Tôi',
    zh: '为什么选择我们',
  },
  title: {
    en: 'Delivering quality finishes with service you can trust',
    vi: 'Mang đến chất lượng hoàn thiện cao cùng dịch vụ mà bạn có thể tin tưởng',
    zh: '提供值得信赖的服务与高质量完工效果',
  },
  description: {
    en: 'We take pride in delivering high-quality painting and plastering with clear communication, reliable service, and no surprises along the way.',
    vi: 'Chúng tôi tự hào mang đến dịch vụ sơn và bả chất lượng cao với giao tiếp rõ ràng, dịch vụ đáng tin cậy và không phát sinh bất ngờ trong suốt quá trình.',
    zh: '我们以高质量的油漆和抹灰施工为荣，并提供清晰沟通、可靠服务以及无意外收费的体验。',
  },
  image: aboutImage,
  imageAlt: {
    en: 'Team at work',
    vi: 'Đội ngũ đang làm việc',
    zh: '施工团队',
  },
}

// ================= FEATURES =================
export const whyChooseUsFeatures: FeatureItem[] = [
  {
    id: 'quality',
    text: {
      en: 'High-quality finishes',
      vi: 'Hoàn thiện chất lượng cao',
      zh: '高质量施工',
    },
  },
  {
    id: 'reliable',
    text: {
      en: 'Reliable service',
      vi: 'Dịch vụ đáng tin cậy',
      zh: '可靠服务',
    },
  },
  {
  id: 'pricing',
  text: {
    en: 'Transparent pricing with no surprises',
    vi: 'Giá cả minh bạch, không phát sinh chi phí',
    zh: '价格透明，无额外费用',
  },
  },
  {
  id: 'residential-commercial',
  text: {
    en: 'Trusted for both residential and commercial projects',
    vi: 'Được tin tưởng cho cả dự án nhà ở và thương mại',
    zh: '值得信赖的住宅和商业项目服务',
  },
},
]

// ================= CONTACT =================
export const contactSectionContent: ContactSectionContent = {
  eyebrow: {
    en: 'Get In Touch',
    vi: 'Liên Hệ',
    zh: '联系我们',
  },
  title: {
    en: 'Let’s talk about your project',
    vi: 'Hãy trao đổi về dự án của bạn',
    zh: '让我们聊聊您的项目',
  },
  description: {
    en: 'Tell us what you need and we will get back with clear advice and a tailored quote.',
    vi: 'Hãy cho chúng tôi biết nhu cầu của bạn, chúng tôi sẽ phản hồi với tư vấn rõ ràng và báo giá phù hợp.',
    zh: '告诉我们您的需求，我们将以清晰建议和定制报价尽快回复您。',
  },
  callLabel: {
    en: 'Phone',
    vi: 'Điện Thoại',
    zh: '电话',
  },
  emailLabel: {
    en: 'Email',
    vi: 'Email',
    zh: '邮箱',
  },
  addressLabel: {
    en: 'Address',
    vi: 'Địa chỉ',
    zh: '地址',
  },
  hoursLabel: {
    en: 'Business Hours',
    vi: 'Giờ Làm Việc',
    zh: '营业时间',
  },
  hoursValue: {
    en: 'Mon - Sat, 8:00 AM - 6:00 PM',
    vi: 'Thứ 2 - Thứ 7, 8:00 - 18:00',
    zh: '周一至周六，8:00 - 18:00',
  },
  formTitle: {
    en: 'Send Us a Message',
    vi: 'Gửi Tin Nhắn Cho Chúng Tôi',
    zh: '给我们留言',
  },
  fullNameLabel: {
    en: 'Full Name',
    vi: 'Họ và Tên',
    zh: '姓名',
  },
  fullNamePlaceholder: {
    en: 'Enter your full name',
    vi: 'Nhập họ và tên của bạn',
    zh: '请输入您的姓名',
  },
  emailInputLabel: {
    en: 'Email Address',
    vi: 'Địa Chỉ Email',
    zh: '邮箱地址',
  },
  emailPlaceholder: {
    en: 'Enter your email address',
    vi: 'Nhập địa chỉ email của bạn',
    zh: '请输入您的邮箱地址',
  },
  phoneInputLabel: {
    en: 'Phone Number',
    vi: 'Số Điện Thoại',
    zh: '电话号码',
  },
  phonePlaceholder: {
    en: 'Enter your phone number',
    vi: 'Nhập số điện thoại của bạn',
    zh: '请输入您的电话号码',
  },
  serviceLabel: {
    en: 'Service Interested In',
    vi: 'Dịch Vụ Quan Tâm',
    zh: '感兴趣的服务',
  },
  servicePlaceholder: {
    en: 'Select a service',
    vi: 'Chọn một dịch vụ',
    zh: '请选择服务',
  },
  messageLabel: {
    en: 'Your Message',
    vi: 'Nội Dung Tin Nhắn',
    zh: '留言内容',
  },
  messagePlaceholder: {
    en: 'Tell us about your project requirements',
    vi: 'Hãy chia sẻ yêu cầu dự án của bạn',
    zh: '请告诉我们您的项目需求',
  },
  submitButtonText: {
    en: 'Send Message',
    vi: 'Gửi Tin Nhắn',
    zh: '发送留言',
  },
  validationNameRequired: {
    en: 'Please enter your full name.',
    vi: 'Vui lòng nhập họ và tên.',
    zh: '请输入您的姓名。',
  },
  validationEmailRequired: {
    en: 'Please enter your email address.',
    vi: 'Vui lòng nhập địa chỉ email.',
    zh: '请输入您的邮箱地址。',
  },
  validationEmailInvalid: {
    en: 'Please enter a valid email address.',
    vi: 'Vui lòng nhập email hợp lệ.',
    zh: '请输入有效的邮箱地址。',
  },
  validationMessageRequired: {
    en: 'Please enter your message.',
    vi: 'Vui lòng nhập nội dung tin nhắn.',
    zh: '请输入留言内容。',
  },
  successMessage: {
    en: 'Thanks for reaching out. We will contact you soon.',
    vi: 'Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm.',
    zh: '感谢您的联系，我们会尽快回复您。',
  },
  serviceOptions: [
    {
      value: 'interior-painting',
      label: {
        en: 'Interior Painting',
        vi: 'Sơn Nội Thất',
        zh: '室内油漆',
      },
    },
    {
      value: 'exterior-painting',
      label: {
        en: 'Exterior Painting',
        vi: 'Sơn Ngoại Thất',
        zh: '室外油漆',
      },
    },
    {
      value: 'private-services',
      label: {
        en: 'Private Services',
        vi: 'Dịch Vụ Nhà Ở',
        zh: '住宅服务',
      },
    },
    {
      value: 'commercial',
      label: {
        en: 'Commercial Services',
        vi: 'Dịch Vụ Thương Mại',
        zh: '商业服务',
      },
    },
  ],
}