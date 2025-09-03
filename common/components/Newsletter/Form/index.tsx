'use client'

import styles from './Form.module.css'
import { Button } from '@/common/components/Button'
import { useNewsletter } from '@/api/hooks/newsletter'
import { CircleCheck } from '@/common/icons/CircleCheck'
import { CircleErrorDisclaimer } from '@/common/icons/CircleErrorDisclaimer'
import { Modal } from '@/common/components/Modal'
import { redirect, RedirectType } from 'next/navigation'

export function NewsletterForm() {
  const {
    handleChange,
    handleSubmit,
    setDefaultModal,
    data,
    modalContent,
    modalInfo,
  } = useNewsletter()

  const icon =
    modalContent.icon === 'CircleCheck' ?
      <CircleCheck width={60} height={60} />
    : <CircleErrorDisclaimer width={60} height={60} color='#df2b28' />

  return (
    <>
      <Modal
        open={modalInfo.open}
        icon={icon}
        primaryFn={() => setDefaultModal()}
        secondaryFn={() => {
          setDefaultModal()
          redirect('/blog', RedirectType.push)
        }}
        cancelFn={() => setDefaultModal()}
        content={modalContent.content}
      />

      <form onSubmit={handleSubmit} className={`${styles.form_container}`}>
        <input
          type='text'
          name='email'
          placeholder='Email'
          className={`${styles.form_input}`}
          aria-labelledby='Email'
          value={data.email}
          onChange={handleChange}
        />
        <Button
          type='submit'
          variant='secondary-dark'
          proportion='sm'
          children='Subscribe'
          customClasses={`${styles.form_button}`}
          rounded={false}
        />
      </form>
    </>
  )
}
