import { textAnimation } from 'config/animation'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { H4 } from 'ui'

type BlogItemProps = {
    bgColor: '1' | '2' | '3',
    text: string,
    title: string
}

export const BlogItem = ({ bgColor, text, title }: BlogItemProps) => {

    const [bgColorActive, setBgColorActive] = useState<string>()

    useEffect(() => {
        if (bgColor === '1') {
            setBgColorActive('var(--color-background3')
        }
        else if (bgColor === '2') {
            setBgColorActive('linear-gradient(to right top, #604C7C 0%, #257983 50%, #20825A 100%)')
        }
        else if (bgColor === '3') {
            setBgColorActive('linear-gradient(201deg, #EF278E 0%, #81347F 47%, #43407A 100%)')
        }

    }, [])

    return (
        <motion.li
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.1, once: true }}
            variants={textAnimation}
            custom={0.3}
            style={{ background: bgColorActive }}
            className="blog__list-item">
            <motion.span
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: true }}
                variants={textAnimation}
                custom={0.3}>Cryptocurrancy | Library</motion.span>
            <H4>{title}</H4>
            <motion.p
                className='blog-item__text'
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: true }}
                variants={textAnimation}
                custom={0.3}>{text}</motion.p>

            <div className='blog-item__sub'>
                <motion.p

                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.1, once: true }}
                    variants={textAnimation}
                    custom={0.4}>
                    More useful information you can find in our telegram channel: <a className='blog-item__sub-link' target='_blank' href="https://t.me/ellipse_crypto_news">Ellipse Crypto News</a>
                </motion.p>
            </div>

        </motion.li>
    )
}
