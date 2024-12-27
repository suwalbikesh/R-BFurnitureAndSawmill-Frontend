import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'
import { Swiper as SwiperType } from "swiper/types";

const portfolios = [
  {
    index: 0,
    image: '/product/product1.png',
    title: 'Pine Timber',
    description: `is an Enterprise resource planning system which includes online learning platform, school/college management system as
                well as Finance Management System. Schoolworkspro.com provide an outstanding academic experience for students, teachers and
                administrators through flexible learning and expert teaching.`,
    link: 'https://schoolworkspro.com',
  },
  {
    index: 1,
    image: '/product/product2.png',
    title: 'Oak Timber',
    description: `is Nepal's online healthcare service providing platform aimed to bring change in healthcare services and
    make it easy to access for both healthcare service provider and patients.`,
    link: 'https://app.digimedicalsewa.com',
  },
  {
    index: 2,
    image: '/product/product3.png',
    title: 'Maple Timber',
    description: `is an IT Company that provides a variety of e-learning solutions, including web portal construction, learning apps, 
    virtual classrooms, School management software, technology equipment for learning aid and many more.`,
    link: 'https://digitechnologynepal.com',
  },
]


const HeroSection = () =>{
    const [activePortfolio, setActivePortfolio] = useState<number>(0)
    const swiperRef = useRef<SwiperType>()
  
    useEffect(() => {
      setActivePortfolio(swiperRef.current?.realIndex ?? 0)
    }, [swiperRef])
  
    return (
      <div className='relative py-10'>
            <Swiper
              onBeforeInit={swiper => {
                swiperRef.current = swiper
              }}
              effect={'coverflow'}
              speed={2000}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              onSlideChange={data => setActivePortfolio(data.realIndex)}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
              }}
              pagination={true}
              modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
              className='mySwiper'
            >
              {portfolios.length &&
                portfolios.map((data: any, index: number) => (
                  <SwiperSlide
                    key={index}
                    className={`relative`}
                  >
                    <div className='flex flex-row items-center justify-end'>
                    <div className='basis-[25%] h-[500px]'></div>
                    <div className='basis-[75%]'>
                    <div className='relative h-[500px]'>
                      <Image src={data.image} layout='fill' objectFit="contain" alt=''/>
                    </div>
                    </div>
                    <div className='absolute inset-0 left-16 my-auto flex item-center text-[#f4e6d5] h-[300px] bg-[#f4e6d5]/10 backdrop-blur-md w-[40%] rounded-xl'>
                    <div className="absolute inset-0 bg-black opacity-20 transition-opacity rounded-xl duration-300"></div>
                    <div className='relative my-auto mx-8 flex flex-col items-start gap-6 text-start'>
                    <h1 className='text-2xl'>{data.title}</h1>
                    <p className=''>{data.description}</p>
                    <button className='group hover:scale-105 duration-300 relative bg-[url(/buttonbg.jpg)] text-sm font-bold leading-none uppercase rounded-xl px-4 py-3'>
                      <div className="absolute inset-0 bg-black opacity-0 opacity-50 group-hover:opacity-40 transition-opacity  rounded-xl duration-300"></div>
                      <div className='relative text-[#f4e6d5]'>Buy</div>
                    </button>
                    </div>
                    </div>
                    </div>
                    
                  </SwiperSlide>
                ))}
            </Swiper>
             <button
              className='absolute inset-y-0 my-auto left-5 bg-[#f4e6d5] rounded-full shadow-lg h-12 w-12 text-2xl text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none focus:shadow-outline z-10 opacity-75'
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <svg
                className='w-5 h-5 sm:w-6 sm:h-6 mx-auto'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7'></path>
              </svg>
            </button>
            <button
              className='absolute inset-y-0 my-auto right-5 bg-[#f4e6d5] rounded-full shadow-lg h-12 w-12 text-2xl text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none focus:shadow-outline z-10 opacity-75'
              onClick={() => swiperRef.current?.slideNext()}
            >
              <svg
                className='w-5 h-5 mx-auto sm:w-6 sm:h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
              </svg>
            </button> 
 
  
          <div className='flex items-center pt-5 justify-center'>
            {portfolios.length &&
              portfolios?.map((data: any, index: number) => (
                <button
                  key={index}
                  className={`${
                    activePortfolio !== index && 'opacity-50'
                  } hover:opacity-100 focus:opacity-80 w-3 h-3 rounded-full bg-[#f4e6d5] mx-2 z-10`}
                  onClick={() => {
                    setActivePortfolio(index)
                    swiperRef.current?.slideTo(index)
                  }}
                ></button>
              ))}
          </div>
      </div>
    )
}

export default HeroSection