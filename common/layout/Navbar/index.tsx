'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/common/components/Button'
import styles from './Navbar.module.css'
import { NavbarHamburguer, NavbarLinks } from './components'
import { useButtonHandler } from './Navbar.hooks'
import { AppContainer } from '@/common/layout/AppContainer'
import { BG_STYLES_CLASSES } from '@/common/utils/enums'
import Link from 'next/link'

export default function Navbar() {
  const [hamburguerIsOpen, setHamburguerIsOpen] = useState(false)

  useEffect(() => {
    return setHamburguerIsOpen(false)
  }, [])

  return (
    <AppContainer
      padding={false}
      elementType='header'
      bgColor={BG_STYLES_CLASSES.DARK}
    >
      <nav
        className={`${styles.navbar_box} ${
          hamburguerIsOpen ? styles.active : ''
        }
        `}
      >
        <div className={`${styles.navbar_main}`}>
          <div className={styles.navbar_logo}>
            <h2>
              <Link href='/'>DevCorner</Link>
            </h2>
          </div>
          <NavbarHamburguer
            isOpen={hamburguerIsOpen}
            handleOpen={setHamburguerIsOpen}
          />
        </div>

        <div className={styles.navbar_content}>
          <ul className={`${styles.navbar_content__items}`}>
            {/* <NavbarLink /> */}
            <NavbarLinks />
          </ul>
          <div className={``}>
            <Button
              type='button'
              variant='secondary-dark'
              proportion={'md'}
              onClick={useButtonHandler()}
              rounded={true}
            >
              Newsletter
            </Button>
          </div>
        </div>
      </nav>
    </AppContainer>
  )
}
