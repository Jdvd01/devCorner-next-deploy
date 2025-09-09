import { AppContainer } from '@/common/layout/AppContainer'
import { BG_STYLES_CLASSES } from '@/common/utils/enums'
import { Categories, Hero, Team } from '@/views/home'

export default function Home() {
  return (
    <>
      <AppContainer elementType='section' bgColor={BG_STYLES_CLASSES.DARK}>
        <Hero />
      </AppContainer>
      <AppContainer
        padding
        elementType='section'
        bgColor={BG_STYLES_CLASSES.LIGHT}
      >
        <Categories />
      </AppContainer>
      <AppContainer
        padding
        elementType='section'
        bgColor={BG_STYLES_CLASSES.DARK}
      >
        <Team />
      </AppContainer>
    </>
  )
}
