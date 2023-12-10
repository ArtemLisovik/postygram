import { textAnimation } from 'config/animation'
import { motion } from 'framer-motion'
import React from 'react'

export const TeamItem = ({ avatar, position, name, photo }: { avatar: string, position: string, name: string, photo: string }) => {
  return (
    <motion.li
      className="team__list-item"
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.1, once: true }}
      custom={0.3}
      variants={textAnimation}>
      <img src={photo} alt="teammate" />
      <p className="team__list-item-name">{name}</p>
      <p className="team__list-item-profession">{position}</p>
    </motion.li>
  )
}
