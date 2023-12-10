import { LinkButton, H2, Button } from 'ui'

import './Simplicity.scss'
import { Li } from 'ui/Li/Li'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'

import image1 from 'assets/img/12.png'
import money from 'assets/img/money2.png'
import deposit from 'assets/img/deposit.png'

export const Simplicity = () => {

    const {t} = useTranslation()

  return (
    <section className="services">
        <div className="services__container container">
            <H2 sub={t('main.pages.home.simplicity.sub') as string}>
                {t("main.pages.home.simplicity.title")}
            </H2>
            <ul className="services__list">
                <Li className="services__item">
                    <img src={image1} alt="" className='services__icon' />
                    <h3 className="services__title">{t("main.pages.home.simplicity.first.subtitle")}</h3>
                    <p className="services__text">{t("main.pages.home.simplicity.first.text")}</p>
                </Li>
                <Li className="services__item">
                    <img src={deposit} alt="" className='services__icon' />
                    <h3 className="services__title">{t("main.pages.home.simplicity.second.subtitle")}</h3>
                    <p className="services__text">{t("main.pages.home.simplicity.second.text")}</p>
                </Li>
                <Li className="services__item">
                    <img src={money} alt="" className='services__icon' />
                    <h3 className="services__title">{t("main.pages.home.simplicity.third.subtitle")}</h3>
                    <p className="services__text">{t("main.pages.home.simplicity.third.text")}</p>
                </Li>
            </ul>
            <Button
                     to="calculator"
                    >{t("main.pages.home.simplicity.button")}</Button>
        </div>
    </section>
  )
}
