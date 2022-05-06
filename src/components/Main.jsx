import React from 'react'
import Projects  from './Projects'
import Services from './Services'
import Programming from './Programming'
import About from './About'
import Form from './Form'
const Main = () => {
 
  return (
    <div className='main	w-full 		  '>
     <Projects />
     <Services />
     <Programming />
     <About />
     <Form />
    
    </div>
  )
}

export default Main