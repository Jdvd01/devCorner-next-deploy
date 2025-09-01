import { redirect, RedirectType } from 'next/navigation'
import React from 'react'

export const useButtonHandler = (): ((
  event: React.MouseEvent<HTMLButtonElement>
) => void) => {
  return (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const heroElement = document.querySelector('#hero-cta')
    if (heroElement === null) {
      redirect('/#hero-cta', RedirectType.push)
    } else {
      heroElement.scrollIntoView({ behavior: 'smooth' })
    }
    const inputElement: HTMLInputElement | null =
      document.querySelector('#email')
    if (inputElement !== null) {
      inputElement.focus({ preventScroll: true })
    }
  }
}
