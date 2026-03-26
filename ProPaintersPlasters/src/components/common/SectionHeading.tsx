import type { Locale, LocalizedText } from '../../content/types'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import './SectionHeading.css'

type SectionHeadingProps = {
  locale: Locale
  eyebrow?: LocalizedText
  title: LocalizedText
  description?: LocalizedText
  align?: 'left' | 'center'
}

export function SectionHeading({
  locale,
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && (
        <p className="section-heading__eyebrow">
          {getLocalizedValue(eyebrow, locale)}
        </p>
      )}

      <h2 className="section-heading__title">
        {getLocalizedValue(title, locale)}
      </h2>

      {description && (
        <p className="section-heading__description">
          {getLocalizedValue(description, locale)}
        </p>
      )}
    </div>
  )
}