import React from 'react'
import video from '../components/bg.mp4'
import Pic from '../components/pics/pic1.svg'

const Nav = () => {
  return (
    <div>
         <div className="header2 flex  align-center bg-slate-400 h-screen justify-around text-white  ">
      <video src={video} autoPlay muted loop />
         <div className="header2-div1 h-screen   flex flex-col align-center justify-center w-1/2">
           <h1 className='capitalize text-4xl tracking-wider m-5'>hi i'm <span className='text-emerald-500'>hussain ali</span>,</h1>
           <h2 className='capitalize text-2xl tracking-wider m-5'>and i'm a web developer <span className='text-emerald-500'>'frontend developer'</span></h2>
           <h1 className='capitalize text-4xl tracking-wider m-5'>tha's my <span className='text-emerald-500'>portfolio</span></h1>
           <p className='text-lg leading-10 m-10 capitalize tracking-wide 		 	'>
             a developer from iraq al diwaniyah,undergraduate student at university of al-qadisiyah.
             i admire coding and my dream is to be one of the best developers around the wrold,
             i'm working on it.

           </p>
           <button className='btn bg-emerald-400 self-center	 w-32 h-10 text-black text-xl rounded-xl m-4 hover:bg-emerald-900	hover:text-white  '>hire me</button>
           
           <ul className='flex translate-x-28 ul2  '>
            <li className='p-4 m-4'><a href="https://www.facebook.com/profile.php?id=100058449670793" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook text-4xl text-emerald-500 cursor-pointer hover:translate-y-1 "></i></a></li>
            <li className='p-4 m-4'><a href="https://www.instagram.com/hussainfrontendali/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram text-4xl text-emerald-500 cursor-pointer hover:translate-y-1 "></i></a></li>
            <li className='p-4 m-4'><a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp text-4xl text-emerald-500 cursor-pointer hover:translate-y-1 "></i></a></li>
            <li className='p-4 m-4'><a href="https://www.linkedin.com/in/hussain-ali-02b33a224/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin text-4xl text-emerald-500 cursor-pointer hover:translate-y-1 "></i></a></li>
            </ul>
           
         </div>
         <div className="header2-div2 flex align-center justify-center">
           <img src={Pic} alt="" className='w-full self-center '/>
         </div>
      </div>
     

    </div>
  )
}

export default Nav