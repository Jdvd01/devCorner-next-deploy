'use client'

import { useEffect } from 'react'
import styles from './Modal.module.css'
import { Button } from '../Button'

interface Props {
  open: boolean
  cancelFn?: () => void
  primaryFn?: () => void
  secondaryFn?: () => void
  content?: string
  icon?: React.ReactNode
  className?: string
}

export function Modal(props: Props) {
  const { open, cancelFn, primaryFn, secondaryFn, icon, content } = props

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        if (cancelFn) {
          cancelFn()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, cancelFn])

  if (!open) {
    return null
  }

  return (
    <div className={`${styles['modal_background']}`}>
      <div className={`${styles['modal_container']}`}>
        {icon && <div>{icon}</div>}

        <div className={`${styles['modal__body']}`}>
          {content?.split('\n').map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>

        <div className={`${styles['modal__footer']}`}>
          {primaryFn && (
            <Button
              type='button'
              onClick={primaryFn}
              proportion='md'
              variant='transparent'
            >
              Cancel
            </Button>
          )}
          {secondaryFn && (
            <Button
              onClick={secondaryFn}
              type='button'
              proportion='md'
              variant='primary'
            >
              Go to blogs
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
