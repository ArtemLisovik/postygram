import { AnimatedCounter, H1, H2, H3, Img, P } from 'ui'

import promo from 'assets/img/trade.png'

import './About.scss'
import { textAnimation } from 'config/animation'
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <section className="about">
        <div className="about__container container">
            <H1 sub='Who we are'>
                Modern crypto exchange.
            </H1>
            <P>
            We are a modern cryptocurrency exchanger that is easy to use. The interface is as local as possible, does not confuse the user, no hidden fees, fast transactions and maximum security. We have been engaged in cryptocurrency exchange for more than 2 years and are constantly working with feedback to improve our service!
            </P>
            <div className="about__coloredBlock">
              <div className="about__coloredBlock-text">
                <H2 sub='Fast transfer'>Transfer fiat into crypto.</H2>
                <P>Transfer your money to crypto just in 3 steps.</P>
              </div>
              <div className="about__coloredBlock-image">
              <Img src={promo} alt="about" />
              </div>
        
            </div>
            {/* <div className="about__poster">
           
            </div> */}

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
