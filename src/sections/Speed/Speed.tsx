import { AnimatedCounter, H2, H4, Img, P } from 'ui'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { textAnimation } from 'config/animation'

import poster from 'assets/img/poster.png'


import './Speed.scss'

export const Speed = () => {
    const { t } = useTranslation()

    return (


        <section className="advantages">
            <div className="advantages__container container">
                <H2 sub={t("main.pages.home.speed.sub") as string}>
                    {t("main.pages.home.speed.title")}
                </H2>
                <P className="aboutCompany__text">
                    {t("main.pages.home.speed.text")}
                </P>

                {/* <div className="advantages__poster">
                    <img src={poster} alt="" />
                </div> */}
                <div className="advantages__wrapper">
                    <Img alt='poster' className='posters' src={poster}/>
                </div>
                

                <div className="advantages__list">
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.1, once: true }}
                        variants={textAnimation}
                        className="advantages__list-item">
                        <div className='advantages__list-item-combined'>
                            {/* <AnimatedCounter n={99} /> */}
                            <AnimatedCounter n={99} />
                            <span className='plus'>%</span>
                        </div>
                        <p className="advantages__list-descr">Triumph Rate</p>
                    </motion.div>

                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.1, once: true }}
                        variants={textAnimation}
                        className="advantages__list-item">
                        <div className='advantages__list-item-combined'>
                            <AnimatedCounter n={3000} />
                            <span className='plus'>+</span>
                        </div>
                        <p className="advantages__list-descr">Satisfied Clients
                        </p>
                    </motion.div>

                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.1, once: true }}
                        variants={textAnimation}
                        className="advantages__list-item">
                        <div className='advantages__list-item-combined'>
                            <AnimatedCounter n={5} />
                            <span className='plus'>min</span>
                        </div>
                        <p className="advantages__list-descr">Average Exchange Time</p>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}
