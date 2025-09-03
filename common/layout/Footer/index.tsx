import { BG_STYLES_CLASSES } from '@/common/utils/enums'
import { AppContainer } from '@/common/layout/AppContainer'
import styles from './footer.module.css'
import FooterLinks from './components/FooterLinks'
import FooterForm from './components/FooterForm'
import { footerBottomLinks, footerTopLinks } from './data'

export default function Footer() {
  return (
    <AppContainer padding elementType='footer' bgColor={BG_STYLES_CLASSES.DARK}>
      <div className={`${styles['footer']}`}>
        <div className={`${styles['footer__top']}`}>
          <div className={`${styles['footer__top-left']}`}>
            <span className={`${styles['footer__logo']}`}>DevCorner</span>
            <FooterLinks arrayOfLinks={footerTopLinks} />
          </div>
          <FooterForm />
        </div>

        <hr className={`${styles['footer__line']}`} />

        <div className={`${styles['footer__bottom']}`}>
          <p>2024 All rights reserved.</p>
          <FooterLinks arrayOfLinks={footerBottomLinks} showSitemap={true} />
        </div>
      </div>
    </AppContainer>
  )
}
