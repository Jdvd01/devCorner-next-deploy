import styles from './Form.module.css'
import { Button } from '@/common/components/Button'
// import { useNewsletter } from '../../Footer.hooks'

const FooterForm = () => {
  // const { handleChange, handleSubmit, data } = useNewsletter()

  return (
    <form
      // onSubmit={handleSubmit}
      className={`${styles.top_section_right}`}
    >
      <input
        type='text'
        name='email'
        placeholder='Email'
        className={`${styles.input}`}
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

export default FooterForm
