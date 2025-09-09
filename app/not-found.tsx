import { AppContainer } from '@/common/layout/AppContainer'
import { BG_STYLES_CLASSES } from '@/common/utils/enums'
import { ErrorPage } from '@/views/ErrorPage'

export default function NotFound() {
  return (
    <AppContainer bgColor={BG_STYLES_CLASSES.DARK}>
      <ErrorPage />
    </AppContainer>
  )
}
