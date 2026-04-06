import type { LocalizedText } from './types'

import gallery10 from '../assets/images/gallery/gallery-10.jpeg'
import gallery11 from '../assets/images/gallery/gallery-11.jpeg'
import gallery12 from '../assets/images/gallery/gallery-12.jpeg'
import gallery13 from '../assets/images/gallery/gallery-13.jpeg'
import gallery14 from '../assets/images/gallery/gallery-14.jpeg'
import gallery15 from '../assets/images/gallery/gallery-15.jpg'
import gallery16 from '../assets/images/gallery/gallery-16.jpg'
import gallery17 from '../assets/images/gallery/gallery-17.jpg'
import gallery18 from '../assets/images/gallery/gallery-18.jpg'
import gallery19 from '../assets/images/gallery/gallery-19.jpg'
import gallery20 from '../assets/images/gallery/gallery-20.jpg'
import gallery21 from '../assets/images/gallery/gallery-21.jpg'
import gallery22 from '../assets/images/gallery/gallery-22.jpg'

export type ProjectCategory = 'Interior' | 'Exterior' | 'Residential' | 'Commercial'

export type GalleryProject = {
  id: string
  image: string
  title: LocalizedText
  description: LocalizedText
  category: ProjectCategory
}

export const galleryProjects: GalleryProject[] = [
  {
    id: 'project-01',
    image: gallery10,
    title: {
      en: 'Modern Living Room Refresh',
      vi: 'Làm mới phòng khách hiện đại',
      zh: '现代客厅翻新',
    },
    description: {
      en: 'A full interior repaint with smooth plastering and premium matte finish throughout the open-plan living area.',
      vi: 'Sơn lại toàn bộ nội thất với bả trát mịn và lớp sơn mờ cao cấp cho khu vực phòng khách mở.',
      zh: '全面内墙重涂，光滑抹灰和优质哑光饰面覆盖开放式客厅区域。',
    },
    category: 'Interior',
  },
  {
    id: 'project-02',
    image: gallery11,
    title: {
      en: 'Heritage Home Exterior',
      vi: 'Mặt ngoài nhà di sản',
      zh: '传统住宅外墙',
    },
    description: {
      en: 'Careful exterior restoration of a weatherboard heritage home, including prep work, sealing, and two-coat acrylic finish.',
      vi: 'Phục chế cẩn thận mặt ngoài nhà di sản ván gỗ, bao gồm chuẩn bị bề mặt, bịt kín và lớp sơn acrylic hai lớp.',
      zh: '精心修复木板条传统住宅外墙，包括表面准备、密封和双层亚克力涂装。',
    },
    category: 'Exterior',
  },
  {
    id: 'project-03',
    image: gallery12,
    title: {
      en: 'Boutique Cafe Fitout',
      vi: 'Trang trí quán cà phê boutique',
      zh: '精品咖啡馆装修',
    },
    description: {
      en: 'Commercial painting and feature wall plastering for a new boutique cafe in the CBD. Clean lines and warm tones.',
      vi: 'Sơn thương mại và bả trát tường đặc trưng cho quán cà phê boutique mới tại CBD.',
      zh: '为市中心新精品咖啡馆进行商业涂装和特色墙面抹灰。',
    },
    category: 'Commercial',
  },
  {
    id: 'project-04',
    image: gallery13,
    title: {
      en: 'Suburban Family Home',
      vi: 'Nhà gia đình ngoại ô',
      zh: '郊区家庭住宅',
    },
    description: {
      en: 'Full interior and exterior painting for a newly built family home. Neutral palette with accent feature walls.',
      vi: 'Sơn toàn bộ nội thất và ngoại thất cho ngôi nhà gia đình mới xây.',
      zh: '为新建家庭住宅进行全面内外墙涂装。中性色调搭配特色墙面。',
    },
    category: 'Residential',
  },
  {
    id: 'project-05',
    image: gallery14,
    title: {
      en: 'Office Lobby Renovation',
      vi: 'Cải tạo sảnh văn phòng',
      zh: '办公大厅翻新',
    },
    description: {
      en: 'Professional repaint and plaster repair for a corporate office lobby. Modern grey tones with gold trim accents.',
      vi: 'Sơn lại chuyên nghiệp và sửa chữa bả trát cho sảnh văn phòng công ty.',
      zh: '为企业办公大厅进行专业重涂和石膏修复。',
    },
    category: 'Commercial',
  },
  {
    id: 'project-06',
    image: gallery15,
    title: {
      en: 'Master Bedroom Suite',
      vi: 'Phòng ngủ chính',
      zh: '主卧套房',
    },
    description: {
      en: 'Elegant bedroom makeover with skim-coat plastering and soft satin-finish paint in a calming palette.',
      vi: 'Trang trí phòng ngủ sang trọng với lớp bả trát mịn và sơn bóng mờ.',
      zh: '优雅卧室改造，薄层抹灰和柔和缎面漆。',
    },
    category: 'Interior',
  },
  {
    id: 'project-07',
    image: gallery16,
    title: {
      en: 'Deck and Fence Repaint',
      vi: 'Sơn lại sàn gỗ và hàng rào',
      zh: '甲板和围栏重涂',
    },
    description: {
      en: 'Exterior timber deck and fence restoration with weather-resistant stain and protective sealant.',
      vi: 'Phục chế sàn gỗ và hàng rào bên ngoài với lớp sơn chống thời tiết.',
      zh: '室外木甲板和围栏修复，使用耐候染色剂和保护密封剂。',
    },
    category: 'Exterior',
  },
  {
    id: 'project-08',
    image: gallery17,
    title: {
      en: 'Retail Shopfront Makeover',
      vi: 'Trang trí mặt tiền cửa hàng',
      zh: '零售店面改造',
    },
    description: {
      en: 'Eye-catching commercial shopfront repaint with brand-colour matching and clean signage preparation.',
      vi: 'Sơn lại mặt tiền cửa hàng bắt mắt với màu sắc thương hiệu.',
      zh: '引人注目的商业店面重涂，品牌色彩匹配。',
    },
    category: 'Commercial',
  },
  {
    id: 'project-09',
    image: gallery18,
    title: {
      en: 'Kitchen and Dining Refresh',
      vi: 'Làm mới nhà bếp và phòng ăn',
      zh: '厨房和餐厅翻新',
    },
    description: {
      en: 'Interior painting for an open kitchen and dining area with moisture-resistant ceiling finish.',
      vi: 'Sơn nội thất cho khu vực bếp và phòng ăn mở với lớp sơn trần chống ẩm.',
      zh: '开放式厨房和餐厅区域内墙涂装，防潮天花板饰面。',
    },
    category: 'Interior',
  },
  {
    id: 'project-10',
    image: gallery19,
    title: {
      en: 'Two-Storey Exterior Coat',
      vi: 'Sơn ngoại thất hai tầng',
      zh: '两层外墙涂装',
    },
    description: {
      en: 'Complete exterior painting of a two-storey brick home including scaffolding, prep, and premium finish.',
      vi: 'Sơn toàn bộ mặt ngoài nhà gạch hai tầng bao gồm giàn giáo và lớp sơn cao cấp.',
      zh: '两层砖房完整外墙涂装，包括脚手架、准备工作和优质涂层。',
    },
    category: 'Residential',
  },
  {
    id: 'project-11',
    image: gallery20,
    title: {
      en: 'Luxury Bathroom Finish',
      vi: 'Hoàn thiện phòng tắm cao cấp',
      zh: '豪华浴室装修',
    },
    description: {
      en: 'High-end bathroom with waterproof plastering and semi-gloss finish for a sleek, easy-clean result.',
      vi: 'Phòng tắm cao cấp với lớp bả trát chống nước và sơn bóng bán phần.',
      zh: '高端浴室，防水抹灰和半光泽饰面。',
    },
    category: 'Interior',
  },
  {
    id: 'project-12',
    image: gallery21,
    title: {
      en: 'Warehouse Conversion',
      vi: 'Chuyển đổi nhà kho',
      zh: '仓库改造',
    },
    description: {
      en: 'Large-scale commercial painting for a warehouse-to-studio conversion, including exposed brick sealing.',
      vi: 'Sơn thương mại quy mô lớn cho dự án chuyển đổi nhà kho thành studio.',
      zh: '大规模商业涂装，仓库改造为工作室，包括裸砖密封。',
    },
    category: 'Commercial',
  },
  {
    id: 'project-13',
    image: gallery22,
    title: {
      en: 'Front Garden Wall Render',
      vi: 'Tô tường vườn trước',
      zh: '前花园墙面粉刷',
    },
    description: {
      en: 'Fresh exterior render and paint on a front garden boundary wall, delivering a clean modern street appeal.',
      vi: 'Tô lại và sơn mới tường ranh vườn trước, tạo vẻ ngoài hiện đại sạch sẽ.',
      zh: '前花园围墙全新粉刷和涂装，打造干净现代的街景。',
    },
    category: 'Exterior',
  },
]
