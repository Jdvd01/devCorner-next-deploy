import styles from './Author.module.css'
import { MaskedIcon } from '@/common/components/Icon'

interface AuthorProps {
  name: string
  role: string
  avatar: string
  github: string
  linkedIn: string
  webAddress: string
}
export const Author: React.FC<AuthorProps> = ({
  name,
  role = 'Fullstack developer',
  avatar,
  github,
  linkedIn,
  webAddress,
}) => {
  return (
    <figure className={styles['author-box']}>
      <img
        className={styles['author__avatar']}
        alt={'Blog post author ' + name}
        src={avatar}
        width={90}
        height={90}
        loading='lazy'
      />
      <figcaption className={styles['author__desc']}>
        <h2 className={styles['author__desc--title']}>{name}</h2>
        <p className={styles['author__desc--role']}>{role}</p>
        <div className={styles['author__desc--icons']}>
          {github && (
            <a
              href={github}
              aria-label={'Github of ' + name}
              rel='noopener noreferrer'
              target='_blank'
            >
              <MaskedIcon
                size={30}
                color='#2a3342'
                customSrc='https://img.devcorner.top/icons/github.svg'
              />
            </a>
          )}

          {webAddress && (
            <a
              href={webAddress}
              aria-label={'Portfolio of ' + name}
              rel='noopener noreferrer'
              target='_blank'
            >
              <MaskedIcon
                size={30}
                color='#2a3342'
                customSrc='https://img.devcorner.top/icons/browser.svg'
              />
            </a>
          )}

          {linkedIn && (
            <a
              href={linkedIn}
              aria-label={'Linkedin of ' + name}
              rel='noopener noreferrer'
              target='_blank'
            >
              <MaskedIcon
                size={30}
                color='#2a3342'
                customSrc='https://img.devcorner.top/icons/linkedin.svg'
              />
            </a>
          )}
        </div>
      </figcaption>
    </figure>
  )
}
