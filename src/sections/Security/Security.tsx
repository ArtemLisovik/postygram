import { Section1Layout } from 'sections/Section1Layout/Section1Layout'
import { useTranslation } from 'react-i18next'

import security from 'assets/img/security.webp'

import './Security.scss'



export const Security = () => {
    const { t } = useTranslation()

  return (
    <Section1Layout
    title={t('main.pages.home.security.title')}
    sub={t('main.pages.home.security.sub') as string}
    text={t('main.pages.home.security.text') as string}
    img={security}>

    </Section1Layout>
  )
}
