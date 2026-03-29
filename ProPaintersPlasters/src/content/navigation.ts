import type { NavigationItem } from './types'

export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: {
      en: 'Home',
      vi: 'Trang Chủ',
      zh: '首页',
    },
    href: '#top',
  },
  {
    id: 'services',
    label: {
      en: 'Services',
      vi: 'Dịch Vụ',
      zh: '服务',
    },
    href: '#services',
  },
  {
    id: 'gallery',
    label: {
      en: 'Gallery',
      vi: 'Thư Viện',
      zh: '作品集',
    },
    href: '#gallery',
  },
  {
  id: 'why-choose-us',
  label: {
    en: 'Why Choose Us',
    vi: 'Tại Sao Chọn Chúng Tôi',
    zh: '为什么选择我们',
},
  href: '#why-choose-us',
  },
  {
    id: 'contact',
    label: {
      en: 'Contact',
      vi: 'Liên Hệ',
      zh: '联系',
    },
    href: '#contact',
  },
]