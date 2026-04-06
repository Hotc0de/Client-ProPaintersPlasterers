import { motion } from 'framer-motion'

type GalleryViewMode = 'featured' | 'list'

type GalleryViewSwitcherProps = {
  activeView: GalleryViewMode
  onViewChange: (view: GalleryViewMode) => void
}

export function GalleryViewSwitcher({ activeView, onViewChange }: GalleryViewSwitcherProps) {
  return (
    <div className="gallery-switcher">
      <button
        className={`gallery-switcher__btn ${activeView === 'featured' ? 'gallery-switcher__btn--active' : ''}`}
        onClick={() => onViewChange('featured')}
        type="button"
      >
        Featured View
      </button>
      <button
        className={`gallery-switcher__btn ${activeView === 'list' ? 'gallery-switcher__btn--active' : ''}`}
        onClick={() => onViewChange('list')}
        type="button"
      >
        List View
      </button>
      <motion.div
        className="gallery-switcher__indicator"
        layoutId="gallery-switcher-indicator"
        style={{ left: activeView === 'featured' ? '0%' : '50%' }}
        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
      />
    </div>
  )
}
