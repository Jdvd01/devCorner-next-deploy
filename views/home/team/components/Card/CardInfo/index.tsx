import { MaskedIcon } from '@/common/components/Icon'
import styles from './CardInfo.module.css'

interface CardInfoProps {
  name: string
  position: string
  description?: string
  github?: string
  linkedin?: string
  portfolio?: string
}

export const CardInfo: React.FC<CardInfoProps> = ({
  name,
  position,
  description,
  github,
  linkedin,
  portfolio,
}) => {
  return (
    <div className={`${styles.card_info}`}>
      <h1 className={`${styles.card_name}`}>{name}</h1>
      <span className={`${styles.card_position}`}>{position}</span>
      <p className={`${styles.card_description}`}>{description}</p>

      <div className={`${styles.card_social}`}>
        {github ?
          <a
            href={github}
            rel='noopener noreferrer'
            target='_blank'
            aria-label={`Github of ${name}`}
          >
            <MaskedIcon
              size={40}
              color='#FFFFFF'
              customSrc='https://img.devcorner.top/icons/github.svg'
            />
          </a>
        : null}
        {linkedin ?
          <a
            href={linkedin}
            rel='noopener noreferrer'
            target='_blank'
            aria-label={`Linkedin of ${name}`}
          >
            <MaskedIcon
              size={40}
              color='#FFFFFF'
              customSrc='https://img.devcorner.top/icons/linkedin.svg'
            />
          </a>
        : null}

        {portfolio ?
          <a
            href={portfolio}
            rel='noopener noreferrer'
            target='_blank'
            aria-label={`Portfolio of ${name}`}
          >
            <MaskedIcon
              size={40}
              color='#FFFFFF'
              customSrc='https://img.devcorner.top/icons/browser.svg'
            />
          </a>
        : null}
      </div>
    </div>
  )
}
