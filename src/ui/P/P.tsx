import { textAnimation } from "config/animation"
import { motion } from "framer-motion"

import './P.scss'

type PProps = {
    children: React.ReactNode,
    className?: string
}

export const P = ({ children, className }: PProps) => {
    return (
        <motion.p
            className='paragraph'
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.1, once: true }}
            variants={textAnimation}
        >
            {children}
        </motion.p>
    )
}
