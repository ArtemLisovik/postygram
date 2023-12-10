import { motion } from 'framer-motion'

import { buttonsReveal, imageReveal, textAnimation } from 'config/animation'
import { Link } from 'react-scroll'

type ButtonProps = {
  children: React.ReactNode,
  type?: string,
  to: string;
}
export const Button = ({ children, type = '', to }: ButtonProps) => {
  return (
    <motion.div
      className="button__wrapper"
      initial='hidden'
      whileInView='visible'
      transition={{ ease: "easeOut" }}
      viewport={{ amount: 0.1, once: true }}
      custom={0.2}
      variants={textAnimation}>
      {/* <div
        className={`button ${type}`}
      > */}
        <Link 
         to={to}
         spy={true}
         smooth={true}
         offset={0}
         duration={1000}
        className='button'>{children}</Link>
      {/* </div> */}
    </motion.div>
  )
}
