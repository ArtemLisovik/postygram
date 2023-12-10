import { Link } from "react-router-dom"

import './ServicesItem.scss'
import { H4, Img, P } from "ui"
import { CustomLink } from "ui/CustomLink/CustomLink"

type ServicesItemProps = {
    image: string,
    title: string,
    descr: any[],
    extraClass?: null | 'reversed'
}

export const ServicesItem = ({image, title, descr, extraClass}: ServicesItemProps) => {
  const view = descr.map(item => {
    return <P className="services-item__text">{item}</P>
  })


  return (
    <li className={`services-item ${extraClass}`}>
        <Img className='services-item__img' src={image} alt="poster img" />
        <div className="services-item__descr">
            <H4>{title}</H4>
            {view}
            <CustomLink to='/contacts'>Contact Us</CustomLink>
        </div>
    </li>
  )
}
