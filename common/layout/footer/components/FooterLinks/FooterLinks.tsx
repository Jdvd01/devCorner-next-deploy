import Link from 'next/link'
import styles from './FooterLinks.module.css'

type FooterLinkProps = {
  arrayOfLinks: {
    id: string
    route: string
    text: string
  }[]
  showSitemap?: boolean
}

const FooterLinks = ({
  arrayOfLinks,
  showSitemap = false,
}: FooterLinkProps) => {
  return (
    <ul className={`${styles.list_container}`}>
      {arrayOfLinks.map((link) => (
        <li key={link.id}>
          <Link href={link.route} className={`${styles.link}`}>
            {link.text}
          </Link>
        </li>
      ))}

      {showSitemap && (
        <li>
          <a
            href='https://api.devcorner.top/api/sitemap/index.xml'
            rel='noopener noreferrer'
            target='_blank'
            className={`${styles.link}`}
          >
            Sitemap
          </a>
        </li>
      )}
    </ul>
  )
}

export default FooterLinks
