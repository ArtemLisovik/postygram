import { Section1Layout } from 'sections/Section1Layout/Section1Layout'

import poster from 'assets/img/price.webp'

import './LowPrice.scss'
import { useTranslation } from 'react-i18next'

export const LowPrice = () => {

    const {t} = useTranslation()
    
  return (
    <Section1Layout
    title={t('main.pages.home.lowPrice.title')}
    sub={t('main.pages.home.lowPrice.sub') as string}
    text={t('main.pages.home.lowPrice.text') as string}
    img={poster}>

    </Section1Layout>
  )
}
