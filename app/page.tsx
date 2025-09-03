import { AppContainer } from '@/common/layout/AppContainer'
import { BG_STYLES_CLASSES } from '@/common/utils/enums'
import Hero from '@/sections/home/hero'

export default function Home() {
  return (
    <>
      <AppContainer elementType='section' bgColor={BG_STYLES_CLASSES.DARK}>
        <Hero />
      </AppContainer>
    </>
  )
}
