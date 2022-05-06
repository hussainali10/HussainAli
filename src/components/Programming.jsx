import React from 'react'
import query from '../components/pics/query.png'
import tail from '../components/pics/tail.png'
import html from '../components/pics/html.png'
import js from '../components/pics/js.png'
import rec from '../components/pics/rec.png'
import sass from '../components/pics/sass.png'
import git from '../components/pics/git.png'
import boot from '../components/pics/boot.png'
import css from '../components/pics/css.png'
const Programming = () => {
  return (
    <div className='Pro'>
        <div className="programming  text-white w-full bg-emerald-900	">
       <h1 className='text-center text-3xl capitalize py-10 '>all i know about coding</h1>
       <div className="langs">
       <div>
       <img src={html} alt="" className='w-24' />
       </div>
       <div>
       <img src={css} alt="" className='w-24' />
       </div>
       <div>
       <img src={js} alt="" className='w-24' />       </div>
       <div>
       <img src={rec} alt="" className='w-24' />
       </div>
       <div>
       <img src={tail} alt="" className='w-24' />
       </div>
       <div>
       <img src={boot} alt="" className='w-24' />
       </div>
       <div>
       <img src={git} alt="" className='w-24' />
       </div>
       <div>
         <img src={sass} alt="" className='w-24' />
       </div>
       <div className=''>
       <img src={query} alt="" className='w-20' />

       </div>
       </div>
     </div>
    </div>
  )
}

export default Programming