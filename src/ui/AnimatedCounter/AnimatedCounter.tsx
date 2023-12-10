import CountUp from 'react-countup';

import './AnimatedCounter.scss'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

export const AnimatedCounter = ({ n }: { n: any }) => {

    // const [counterOn, setCounterOn] = useState<boolean>(false)
    const [scroll, setScroll] = useState(0);
    const [objectPosition, setObjectPosition] = useState<number>(0)



    const handleScroll = () => {
        setScroll(window.pageYOffset + window.innerHeight);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        const position = document.querySelector('.counter__wrapper')?.getBoundingClientRect().top
        if (position) {
            setObjectPosition(+position)
        }
    }, [])



    return (
        <div className='counter__wrapper'>
            {objectPosition < scroll && <CountUp className='counter' start={0} end={n} duration={4} delay={0}/>}
        </div>
    )
}