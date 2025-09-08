import styles from './Hero.module.css'
import { Chip } from '@/common/components/Chip'
import { MaskedIcon } from '@/common/components/Icon'
import { NewsletterForm } from '@/common/components/Newsletter/Form'

export const Hero = () => {
  return (
    <div id='hero-cta' className={`${styles.hero_container}`}>
      <img
        src='https://img.devcorner.top/landing/hero.webp'
        alt='hero background'
        className={`${styles.hero_bg_image}`}
        loading='eager'
        fetchPriority='high'
      />
      <div className={`${styles.hero_content}`}>
        <div className={`${styles.hero_top}`}>
          <div className={`${styles.hero_left}`}>
            <div className={`${styles.hero_text}`}>
              <Chip proportion='md' variant='secondary-dark' bold>
                WELCOME
              </Chip>
              <h1 className={`${styles.hero_text__title}`}>
                Explore the dynamics of software development
              </h1>
              <p className={`${styles.hero_text__subtitle}`}>
                Subscribe now to explore, learn and grow with each post
              </p>
            </div>
            <NewsletterForm />
          </div>

          <div className={`${styles.hero_right}`}>
            <div className={`${styles.images_container}`}>
              <img
                src='https://img.devcorner.top/landing/hero.webp'
                alt='hero right image'
                className={`${styles.left_image}`}
              />
              <img
                src='https://img.devcorner.top/landing/hero.webp'
                alt='hero right image'
                className={`${styles.middle_image}`}
              />
              <img
                src='https://img.devcorner.top/landing/hero.webp'
                alt='hero right image'
                className={`${styles.right_image}`}
              />
            </div>
          </div>

          <div className={`${styles.hero_bottom}`}>
            <MaskedIcon
              customSrc='https://img.devcorner.top/icons/arrow.svg'
              color='#8971fe'
              size={35}
              customClass={styles.arrow}
            />

            <h2 className={`${styles.hero_footer}`}>Explore Categories</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
