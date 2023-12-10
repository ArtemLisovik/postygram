import { useEffect, useState } from 'react'
import { notificationsReveal } from 'config/animation'
import { AnimatePresence, motion } from 'framer-motion'

import './Notifications.scss'


const currencies = ['USDT', 'USD', 'UAH', 'ETH', 'BTC']

export const Notifications = () => {

  const [trigger, setTrigger] = useState<any>([])
  const [inter, setInter] = useState<number>(Math.floor(Math.random() * (360000 - 180000) + 180000))

  useEffect(() => {
    console.log(trigger)
  }, [trigger])

  useEffect(() => {
    const test = setInterval(() => {
      setTrigger((state:any) => [...state, ...Array(Math.floor(Math.random() * (2 - 1) + 1)).fill(1)])

      const newInterval = getRandomInterval();
      setInter(newInterval);
    }, inter)

    return () => {
      clearInterval(test);
    };
  }, [inter])


  function getRandomInterval() {
    return Math.floor(Math.random() * (10000 - 1000) + 1000); // Генерация случайного интервала от 1 секунды до 5 секунд
  }

  return (
    <div className="notifications">

        {trigger.map((item:any, index:number) => {
          return <Notification key={index} status={true}/>
        })}

    </div>
  )
}


const Notification = ({ status }: { status?: boolean }) => {

  const [isActive, setIsActive] = useState<boolean>(false)
  const [currenciesPairs, setCurrenciesParis] = useState([''])

  useEffect(() => {
    
    const pairs = generatePairs()

    setCurrenciesParis([pairs[0], pairs[1]])
  }, [])

  useEffect(() => {
    if (status) {
      setIsActive(status)
      setTimeout(() => {
        setIsActive(false)
      }, 3000)
    }
  }, [status])


  const generatePairs = () => {
    let pair1, pair2;
    
    do {
      pair1 = currencies[Math.floor(Math.random() * (5 - 0) + 0)];
      pair2 = currencies[Math.floor(Math.random() * (5 - 0) + 0)];
    } while (pair1 === pair2 || pair1 === 'BTC');
    
    return [pair1, pair2];
  }

  return (
    <AnimatePresence mode='wait'>
      {isActive && <motion.div
        initial='hidden'
        exit='hidden'
        animate='visible'
        variants={notificationsReveal}
        className="notifications__item">
        <p className="notifications__item-message">Exchange completed: {Math.floor(Math.random() * (15000 - 1000) + 1000)} {currenciesPairs[0]} to {currenciesPairs[1]}</p>
      </motion.div>}
    </AnimatePresence>

  )
}