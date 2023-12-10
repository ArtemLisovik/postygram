import { ServicesItem } from '../ServicesItem/ServicesItem'
import './ServicesList.scss'

import strategy from 'assets/img/strategy.webp'
import trainig from 'assets/img/training.webp'
import development from 'assets/img/development.webp'
import { useTranslation } from 'react-i18next'


export const ServicesList = () => {
    const { t } = useTranslation()


    return (
        <ul className="services-list">

            <ServicesItem
                extraClass='reversed'
                image={development}
                title={t('main.pages.services.first.subtitle')}
                descr={
                    [
                        t('main.pages.services.first.text1'),
                        t('main.pages.services.first.text2'),
                        t('main.pages.services.first.text3'),
                        t('main.pages.services.first.text4'),
                        t('main.pages.services.first.text5'),
                        t('main.pages.services.first.text6'),
                        t('main.pages.services.first.text7'),
                        t('main.pages.services.first.text8'),
                        t('main.pages.services.first.text9'),
                        t('main.pages.services.first.text10')
                    ]
                }

            />
            <ServicesItem
                image={trainig}
                title={t('main.pages.services.second.subtitle')}
                descr={
                    [
                        t('main.pages.services.second.text1'),
                        t('main.pages.services.second.text2'),
                        t('main.pages.services.second.text3'),
                        t('main.pages.services.second.text4'),
                        t('main.pages.services.second.text5'),
                        t('main.pages.services.second.text6'),
                        t('main.pages.services.second.text7'),
                    ]
                } />
        </ul>
    )
}
