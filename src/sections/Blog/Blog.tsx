import { H1, H4, P } from 'ui'

import './Blog.scss'
import { textAnimation } from 'config/animation'
import { motion } from 'framer-motion'
import { BlogItem } from './BlogItem'

export const Blog = () => {
  return (
    <section className="blog">
        <div className="blog__container container">
            <H1 sub='News'>Useful information from Ellipse Crypto.</H1>
            <ul className="blog__list">
            
            <BlogItem title='What is USDT?' text='Tether (USDT) is the largest stablecoin by market capitalization. Crypto traders use stablecoins like Tether to make transfers between different cryptocurrencies or to move their investments into or out of fiat currencies.' bgColor='1'/>
            <BlogItem title='Why crypto?' text='Cryptocurrency allows you to very quickly, easily and with minimal commissions transfer money to any corner of the world, bypassing bank accounts and financial monitoring.' bgColor='2'/>
            <BlogItem title='What is BTC?' text='Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act as money and a form of payment outside the control of any one person, group, or entity, thus removing the need for third-party involvement in financial transactions. It is rewarded to blockchain miners for verifying transactions and can be purchased on several exchanges.' bgColor='3'/>


            </ul>
        </div>
    </section>
  )
}
