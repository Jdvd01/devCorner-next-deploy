import { MaskedIcon } from '@/common/components/Icon'
import styles from './Category.module.css'

interface CategoryProps {
  icon: string
  title: string
  description: string
}
export const Category: React.FC<CategoryProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className={styles.category}>
      <div className={styles['category__icon']}>
        <MaskedIcon customSrc={icon} color={'#FFFFFF'} />
      </div>
      <div className={styles['category__desc']}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
