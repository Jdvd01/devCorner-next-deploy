'use client'

import styles from './Form.module.css'
import { Button } from '@/common/components/Button'
// import { useNewsletter } from '../../Footer.hooks'

export function NewsletterForm() {
  // const { handleChange, handleSubmit, data } = useNewsletter()

  return (
    <form
      // onSubmit={handleSubmit}
      className={`${styles.form_container}`}
    >
      <input
        type='text'
        name='email'
        placeholder='Email'
        className={`${styles.form_input}`}
        aria-labelledby='Email'
        // value={data.email}
        // onChange={handleChange}
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
  )
}
