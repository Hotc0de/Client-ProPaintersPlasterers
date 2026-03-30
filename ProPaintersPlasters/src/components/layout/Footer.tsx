import { navigationItems } from '../../content/navigation'
import { companyName, contactInfo, footerContent } from '../../content/site'
import type { Locale } from '../../content/types'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, getRevealProps, staggerContainer } from '../../utils/motion'
import './Footer.css'

type FooterProps = {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.footer className="site-footer" variants={fadeUp()} {...getRevealProps(reduceMotion)}>
      <motion.div className="site-footer__inner" variants={staggerContainer(0.1)}>

        {/* LEFT - BRAND */}
        <motion.div className="site-footer__brand" variants={fadeUp()}>
          <h2 className="site-footer__company">
            {companyName}
          </h2>

          <p className="site-footer__text">
            {getLocalizedValue(contactInfo.address, locale)}
          </p>

          <p className="site-footer__text">
            {contactInfo.phone}
          </p>

          <a
            href={`mailto:${contactInfo.email}`}
            className="site-footer__link"
          >
            {contactInfo.email}
          </a>
        </motion.div>

        {/* RIGHT - NAV */}
        <motion.div className="site-footer__nav-block" variants={fadeUp(0.04)}>
          <h3 className="site-footer__heading">
            {getLocalizedValue(footerContent.navigationLabel, locale)}
          </h3>

          <nav className="site-footer__nav">
            {navigationItems.map((item) => (
              <motion.a key={item.id} href={item.href} whileHover={reduceMotion ? undefined : { x: 2 }}>
                {getLocalizedValue(item.label, locale)}
              </motion.a>
            ))}
          </nav>
        </motion.div>

      </motion.div>

      {/* BOTTOM */}
      <motion.div className="site-footer__bottom" variants={fadeUp(0.08)}>
        © {new Date().getFullYear()} {companyName}. {getLocalizedValue(footerContent.copyright, locale)}
      </motion.div>
    </motion.footer>
  )
}