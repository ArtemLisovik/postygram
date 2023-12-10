import { H2, P, Img, AnimatedCounter } from 'ui'
import './Section1Layout.scss'

type Section1 = {
    title: string,
    sub?: string,
    text?: string,
    img?: string,
    children?: React.ReactNode
}
export const Section1Layout = ({ title, sub, text, img, children }: Section1) => {

    return (
        <section className="advantages">
            <div className="advantages__container container">
                <H2 sub={sub}>
                    {title}
                </H2>

                {img && <div className="poster__wrapper">
                    <Img alt='poster' className='posters' src={img} />
                </div>
                }

                <P className="aboutCompany__text">
                    {text}
                </P>

            </div>
        </section>
    )
}
