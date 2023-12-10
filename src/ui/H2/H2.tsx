import { motion } from 'framer-motion'

import { textAnimation } from 'config/animation'

import './H2.scss'

type H2Props = {
    children: React.ReactNode,
    color?: React.CSSProperties,
    sub?: string
}

export const H2 = ({ children, color, sub }: H2Props) => {
    return (
        <>
            {sub && <motion.p
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: true }}
                variants={textAnimation}
                className="title-sub">{sub}</motion.p>}
            <motion.h2
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: true }}
                variants={textAnimation}
                // style={color}
                className="title-animated">{children}
            </motion.h2>
        </>

    )
}

