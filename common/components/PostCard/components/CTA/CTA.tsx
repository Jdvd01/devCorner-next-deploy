import styles from './CTA.module.css'
import { usePostcard } from '../../PostCard.hooks'
import Link from 'next/link'
export interface CTAProps {
  to: string
  children: React.ReactNode
}
export const CTA: React.FC<CTAProps> = ({ to, children }) => {
  usePostcard('CTA')
  return (
    <Link className={styles.postcard_cta} href={to}>
      {children}
    </Link>
  )
}
