import { H3 } from 'ui'

import avatar from 'assets/img/teammer.jpg'

import './TeamSection.scss'
import { TeamItem } from './TeamItem'
import { motion } from 'framer-motion'
import { textAnimation } from 'config/animation'

import ceo from 'assets/img/ceo.webp'
import financial from 'assets/img/financial.webp'
import support from 'assets/img/support.webp'
import analytic from 'assets/img/analyst.webp'
import content from 'assets/img/content.webp'
import marketing from 'assets/img/marketing.webp'
import product from 'assets/img/product.webp'

export const TeamSection = () => {
  return (
    <section className="team">
      <div className="section__container container">
        <motion.h1 
         initial='hidden'
         whileInView='visible'
         viewport={{ amount: 0.1, once: true }}
         variants={textAnimation}
        className="team__title">Ellipse Crypto Leadership.</motion.h1>
        <H3>Executive Profiles.</H3>
        <ul className="team__list">

         <TeamItem avatar={avatar} position='CEO' name='Dmitriy Lakostyn' photo={ceo}/>

         <TeamItem avatar={avatar} position='Chief Financial Officer' name='Ivan Gudzovyn' photo={financial}/>

         <TeamItem avatar={avatar} position='Customer Support Lead' name='Nataly Parfenova' photo={support}/>

         <TeamItem avatar={avatar} position='Analytics Director' name='Kateryna Pavlova' photo={analytic}/>

         <TeamItem avatar={avatar} position='Chief Content Officer' name='Anton Varfolomeev' photo={content}/>

         <TeamItem avatar={avatar} position='Chief Marketing Officer' name='Artem Zalyvaiko' photo={marketing}/>

         <TeamItem avatar={avatar} position='Product Manager' name='Victor Rybanov' photo={product}/>

        </ul>
      </div>
    </section>
  )
}
