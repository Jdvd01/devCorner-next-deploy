import styles from './Icon.module.css'

interface IconProps {
  customSrc: string
  customClass?: string
  size?: number
  color?: `#${string}`
}

const defaultIconSize = 24

export function MaskedIcon({
  customSrc,
  color = '#000',
  size = defaultIconSize,
  customClass = '',
}: IconProps) {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    maskImage: `url(${customSrc})`,
    WebkitMaskImage: `url(${customSrc})`,
  }

  return <div className={`${customClass} ${styles.icon}`} style={style} />
}
