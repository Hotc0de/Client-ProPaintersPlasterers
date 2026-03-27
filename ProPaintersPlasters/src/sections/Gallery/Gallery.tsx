import { SectionHeading } from '../../components/common/SectionHeading'
import { galleryContent, galleryItems } from '../../content/home'
import type { Locale } from '../../content/types'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import './Gallery.css'

type GalleryProps = {
  locale: Locale
}

export function Gallery({ locale }: GalleryProps) {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery__inner">
        <SectionHeading
          locale={locale}
          eyebrow={galleryContent.eyebrow}
          title={galleryContent.title}
          description={galleryContent.description}
          align="center"
        />

        <div className="gallery__grid">
          {galleryItems.map((item) => (
            <article key={item.id} className="gallery-card card-hover">
              <div className="gallery-card__image-wrapper">
                <img
                  src={item.image}
                  alt={getLocalizedValue(item.alt, locale)}
                  className="gallery-card__image"
                />

                <div className="gallery-card__overlay">
                  <h3 className="gallery-card__title">
                    {getLocalizedValue(item.title, locale)}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}