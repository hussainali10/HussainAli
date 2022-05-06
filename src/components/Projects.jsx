import React from 'react'
import pic1 from '../components/pics/pic1.jpg'
import pic2 from '../components/pics/pic2.jpg'
import pic3 from '../components/pics/pic3.jpg'
import pic4 from '../components/pics/pic4.png'
import pic5 from '../components/pics/pic5.png'
import pic6 from '../components/pics/pic6.png'
import pic7 from '../components/pics/pic7.png'
import pic8 from '../components/pics/pic8.png'
const Projects = () => {
  return (
    <div>
        <div className="projects bg-emerald-700	 w-full ">
    
       <h1 className=''>bellow some of my simple designs</h1>
 
        <div className="cards"> 
      
         <div className="card card1">
           <img src={pic1} alt="" />
         </div>
         <div className="card">
           <img src={pic2} alt="" />
         </div>
         <div className="card">
           <img src={pic3} alt="" />
         </div>
         <div className="card">
           <img src={pic4} alt="" />
         </div>
         <div className="card">
           <img src={pic5} alt="" />
         </div>
         <div className="card">
           <img src={pic6} alt="" />
         </div>
         <div className="card">
           <img src={pic7} alt="" />
         </div>
         <div className="card">
           <img src={pic8} alt="" />
         </div>
        
 
        </div>
      </div>
    </div>
  )
}

export default Projects