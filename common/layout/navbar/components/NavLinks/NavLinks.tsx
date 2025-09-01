import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLinks = () => {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href
        return (
          <li key={link.href}>
            <Link
              key={link.href}
              href={link.href}
              className={`${isActive ? 'active' : ''}`}
              aria-current={`${isActive ? 'page' : false}`}
            >
              {link.label}
            </Link>
          </li>
        )
      })}
    </>
  )
}

export default NavLinks
