import React from 'react'
import p1 from '../components/pics/p1.svg'
import p2 from '../components/pics/p2.svg'
import p3 from '../components/pics/p3.svg'
import p4 from '../components/pics/p4.svg'
const Services = () => {
  return (
    <div>
         <div className="services w-full text-white  bg-black 	">
       <h1 className='text-center'>services and what i provide</h1>
       <div className="service flex align-center justify-around">
         <div className="intro w-1/2">
            <h1>hard worker</h1>
            <p className='capitalize text-xl p-2'>
              i addicted to working and improving myself everyday that's who am i since i've been a kid,
              i addicted to working and improving myself everyday that's who am i since i've been a kid
            </p>
         </div>
         <div className="img">
             <img src={p1} alt="" className='w-80 m-5' />
         </div>
       </div>
       <div className="service flex align-center justify-around flex-row-reverse	">
         <div className="intro w-1/2">
            <h1>planning is priority</h1>
            <p className='capitalize text-xl p-2'>
              i'm planing every little detail about building a website,
              i'm planing every little detail about building a website.
            </p>
         </div>
         <div className="img">
             <img src={p2} alt="" className='w-80 m-5' />
         </div>
         
       </div>
       <div className="service flex align-center justify-around">
         <div className="intro w-1/2">
            <h1>descipline</h1>
            <p className='capitalize text-xl p-2'>
            i'm a descipline coder drop all my thoughts about my goals and nothing else,
            drop all my thoughts about my goals and nothing else.
            </p>
         </div>
         <div className="img">
             <img src={p3} alt="" className='w-80 m-5' />
         </div>
       </div>
       <div className="service flex align-center justify-around flex-row-reverse	">
         <div className="intro w-1/2">
            <h1>quick learner</h1>
            <p className='capitalize text-xl p-2'>
             always open for learning the new things in coding,
             the good coder is always aware and learning the new frameworks,
             or libraries.
            </p>
         </div>
         <div className="img">
             <img src={p4} alt="" className='w-80 m-5' />
         </div>
         
       </div>
     </div>
    </div>
  )
}

export default Services