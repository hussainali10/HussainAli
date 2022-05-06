import React from 'react'

const Form = () => {
  return (
    <div>
        <form action="https://getform.io/f/f6985466-5f2e-4bd7-ab1e-adbe021739d8" method='POST' className=' flex flex-col bg-emerald-900		 '>
       <div>
         <h1>for contact me dierctly send message if you want</h1>
       </div>
    
       <input type="text" placeholder='write your full name here' className='w-1/2 h-10 m-3 rounded-lg'  />
        <input type="email" name="" id="" placeholder='write your email here' className='w-1/2 h-10 m-3 rounded-lg' />
        <input type="text" placeholder='write a message' className='w-1/2 h-24 m-3 rounded-lg' />
         <button className=''>send</button>
   
     </form>
    </div>
  )
}

export default Form