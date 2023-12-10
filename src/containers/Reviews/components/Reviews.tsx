// import Swiper core and required modules
import { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import ivan from 'assets/img/ivan.jpg'

import { Review } from './Review';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Reviews.scss'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/store';
import { getReviews } from '../store/reviewsThunk';
import { H2, Loader } from 'ui';
import { motion } from 'framer-motion';
import { textAnimation } from 'config/animation';

import one from 'assets/img/reviews/1.webp'
import two from 'assets/img/reviews/2.webp'
import three from 'assets/img/reviews/3.webp'
import four from 'assets/img/reviews/4.webp'


export const Reviews = () => {
  const [slidersPerView, setSlidersPerView] = useState<number>(3)

  const dispatch = useDispatch<AppDispatch>()

  // const { loading, reviews } = useSelector((state: RootState) => state.reviews)

  const reviews = [
    {
      name: 'Igor',
      message: "Cryptocurrencies have always been something incomprehensible for me. But thanks to these guys the exchange process is not so scary for me) They explained every step and made the exchange without fuss",
      profession: 'Freelancer',
      photo: one

    },
    {
      name: 'Mister T',
      message: 'At first I was afraid to send my funds for exchange. I decided to try with a small amount of money, everything went well, after I exchanged the whole amount I needed the exchange process was quick. Thank you for your professionalism and friendly service',
      profession: 'Investor',
      photo: two

    },
    {
      name: 'Anton Kupanov',
      message: "Awesome specialist Ivan, helped me to make the cancellation without any fuss and nerves. Quickly and reliably!",
      profession: 'SMM specialist',
      photo: three

    },
    {
      name: 'David Froyd',
      message: 'I do business transfers through ellipse on a regular basis. Guys are great!',
      profession: 'Front end developer',
      photo: four
    }
  ]


  const getWindowSize = () => {
    if (window.innerWidth < 760) {
      setSlidersPerView(1)
      return
    }
    if (window.innerWidth < 870) {
      setSlidersPerView(2)
    }
    else {
      setSlidersPerView(3)
    }
  }

  useEffect(() => {
    dispatch(getReviews())
  }, [])

  useEffect(() => {
    window.addEventListener('resize', getWindowSize);

    return () => {
      window.removeEventListener('resize', getWindowSize);
    };
  }, [slidersPerView]);


  const view = reviews?.map((item, index) => {
    return <SwiperSlide
      key={index}
    >
      <Review
        name={item.name}
        message={item.message}
        profession={item.profession}
        avatar={item.photo} />
    </SwiperSlide>
  })


  return (
    <section className="reviews">
      <motion.div className="reviews__container container"
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.1, once: true }}
        variants={textAnimation}>

        <H2>Reliable service.</H2>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={slidersPerView}
          navigation={false}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        >
          {view}
          {/* {loading ? <Loader /> : view} */}


        </Swiper>
      </motion.div>
    </section>

  );
};