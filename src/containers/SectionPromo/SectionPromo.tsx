import { H2, Img } from "ui"

import './SectionPromo.scss'

export const SectionPromo = ({title, img}:{title: string, img:string}) => {
  return (
    <div className="section-promo">
        <img className='section-promo__img' src={img} alt="promo" />
        <div className="section-promo__title">
            <H2>{title}</H2>
        </div>
    </div>
  )
}
