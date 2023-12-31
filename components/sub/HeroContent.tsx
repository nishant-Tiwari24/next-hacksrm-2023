'use client';

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { AiOutlineCoffee } from "react-icons/ai";
import { useState, useEffect, useRef } from 'react';

const HeroContent = () => {

  // const [timerDays, setTimerDays] = React.useState(0);
  // const [timerHours, setTimerHours] = React.useState(0);
  // const [timerMinutes, setTimerMinutes] = React.useState(0);
  
  // let interval = useRef();
  
  // const startTimer = () => {
  //   const countdownDate = new Date('Jan 12, 2024 00:00:00').getTime();
  
  //   interval.current = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = countdownDate - now;
  
  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  
  //     if (distance <= 0) {
  //       clearInterval(interval.current);
  //     } else {
  //       setTimerDays(days);
  //       setTimerHours(hours);
  //       setTimerMinutes(minutes);
  //     }
  //   }, 1000);
  // };
  
  // useEffect(() => {
  //   startTimer();
  //   return () => {
  //     clearInterval(interval.current);
  //   };
  // }, []);
  


  
  return (
    <motion.div initial='hidden' animate='visible' className='grid  mt-[150px] grid-cols-1 ml-20 mr-20 md:grid-cols-1 lg:grid-cols-2'>
      <div className='h-full w-full flex flex-col gap-5 m-auto text-start'>
        <motion.div 
        variants={slideInFromTop}
        className='Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]'>
        <AiOutlineCoffee className='text-[#b49bff] mr-[10px] h-5 w-10'/>
        <h1 className='Welcome-text text-[14px] mr-[10px] sourcecode'>IDEATE. IMPLEMENT. INNOVATE</h1>
        </motion.div>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex flex-col gap-3 mt-6 text-6xl text-bold-900 text-green-200 max-w-[600px] w-auto h-auto sourcecodebold'
        >Why you need to
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500'>participate in</span>
        in HackSRM?
        </motion.div>

        <motion.p
        variants={slideInFromLeft(0.8)}
        className='text-2.5lg text-gray-400 my-5 max-w-[600px] sourcecode'>
            Hack SRM is a 24-hour hackathon where you can build your dream project with your friends and win exciting prizes. It is a great opportunity to learn new skills, meet new people, and have fun.
        </motion.p>
        <br />
        {/* <motion.div className='flex items-center justify-between left-[200px]'> */}
        <motion.a
        variants={slideInFromLeft(1)}
        className='text-lg text-gray-400 my-5-w-[500px] sourcecode'>

        </motion.a>
        {/* <motion.div className="mt-[-50px] Welcome-text border border-[#7042f861] mr-[15px] px-[20px] py-[10px] rounded-5 w-[23rem]" variants={slideInFromLeft(0.8)} >
        <h1 className="text-[1.7rem] text-gray-400 ml-3  uppercase">
          Hackathon Starts In
        </h1>
        <div className="flex flex-row justify-around w-80 left-80 mt-[-20px]">
          <section className="text-[2rem] text-gray-400 my-5 max-w-[600px] ">
            <p className="text-[3.5rem]">{timerDays}</p>
            <p className="text-[1rem] mt-[-5px]">days</p>
          </section>
          <span className="text-[2rem] text-gray-400 my-5 max-w-[600px] ">:</span>
          <section className="text-[2rem] text-gray-400 my-5 max-w-[600px] ">
            <p className="text-[3.5rem]">{timerHours}</p>
            <p className="text-[1rem] mt-[-5px]">hours</p>
          </section>
          <span className="text-[2rem] text-gray-400 my-5 max-w-[600px] ">:</span>
          <section className="text-[2rem] text-gray-400 my-5 max-w-[600px] ">
           <p className="text-[3.5rem]">{timerMinutes}</p>
            <p className="text-[1rem] mt-[-5px]">minutes</p>
          </section>
        </div>
        </motion.div> */}

          <motion.button 
          variants={slideInFromTop}
          className='button-primary py-[8px] px-[4px] border border-[#002df58b] w-60 flex flex-row items-center justify-evenly ml-[62px]'>
            <img src="discord.svg" alt="" className='h-15 w-8   '/>
            <a href='https://discord.com/widget?id=1101575465384300737&theme=dark' className='Welcome-text text-[15px] sourcecode '>Join Discord</a>
          </motion.button>

      </div>
      <div className='flex flex-col gap-5'>
        <motion.div 
        variants={slideInFromRight(1.2)}
        className='max-w-screen h-full object-conatain'>
            <img src="10001 (2).png" alt="" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HeroContent
