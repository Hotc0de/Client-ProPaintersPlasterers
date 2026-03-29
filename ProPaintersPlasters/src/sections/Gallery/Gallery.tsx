import type { Locale } from '../../content/types'
import { galleryItems, galleryContent } from '../../content/home'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import './Gallery.css'

type GalleryProps = {
  locale: Locale
}

export function Gallery({ locale }: GalleryProps) {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery__inner">
        
        <div className="gallery__header">
          <p className="gallery__eyebrow">
            {getLocalizedValue(galleryContent.eyebrow, locale)}
          </p>

          <h2 className="gallery__title">
            {getLocalizedValue(galleryContent.title, locale)}
          </h2>

          <p className="gallery__description">
            {getLocalizedValue(galleryContent.description, locale)}
          </p>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery__card">
              
              <div className="gallery__image-wrapper">
                <img
                  src={item.image}
                  alt={getLocalizedValue(item.alt, locale)}
                  className="gallery__image"
                />

                <div className="gallery__overlay">
                  <h3 className="gallery__card-title">
                    {getLocalizedValue(item.title, locale)}
                  </h3>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}