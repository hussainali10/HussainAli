import React,{useState} from 'react'
import { Link } from 'react-scroll/modules';
const Header = () => {
const [menu, setmenu] = useState(false);
const handleclick= ()=> setmenu(!menu)
  return (
    <div className='header w-full bg-slate-100 	  '>
      <div className="header1 flex align-center justify-around bg-emerald-500	 text-white">
        <div className="header1-div1">
          <h1 className='text-3xl tracking-wider cursor-pointer'><Link  to='header'  spy={true} smooth={true} offset={50} duration={500}><span>H</span>u<span>s</span><span>s</span>ain</Link></h1>
        </div>
        <div className="header1-div2 ">
          <ul className='hidden md:flex text-xl '>
            <li className='m-2 cursor-pointer'>
            <Link to='header'  spy={true} smooth={true} offset={50} duration={500} >
              home
           </Link>
            </li>
            <li className='m-2 cursor-pointer'>
            <Link to='projects'  spy={true} smooth={true} offset={50} duration={500} >
              projects
           </Link>
            </li>
            <li className='m-2 cursor-pointer'>
            <Link to='services'  spy={true} smooth={true} offset={50} duration={500} >
              services
           </Link>
            </li>
            <li className='m-2 cursor-pointer'>
            <Link to='Pro'  spy={true} smooth={true} offset={50} duration={500} >
              programming languages
           </Link>
            </li>
            <li className='m-2 cursor-pointer'>
            <Link to='about'  spy={true} smooth={true} offset={50} duration={500} >
              about
           </Link>
            </li>
          </ul>
        </div>
        <div className="header1-div3 md:hidden  ">
        <i className="fa-solid fa-bars cursor-pointer text-xl m-2" onClick={handleclick}></i>
        </div> 
        <ul className={!menu ? 'hidden'  :' absolute  bg-emerald-500 w-full h-screen text-2xl m-12 rounded-xl flex flex-col justify-center align-center'}>
            <li className='cursor-pointer m-10  text-center'>
            <Link to='header'  spy={true} smooth={true} offset={50} duration={500} >
              home
           </Link>
            </li>
            <li className='cursor-pointer m-10  text-center'>
            <Link to='projects'  spy={true} smooth={true} offset={50} duration={500} >
              projects
           </Link>
            </li>
            <li className='cursor-pointer m-10  text-center'>
            <Link to='services'  spy={true} smooth={true} offset={50} duration={500} >
              services
           </Link>
            </li>
            <li className='cursor-pointer m-10  text-center'>
            <Link to='programming'  spy={true} smooth={true} offset={50} duration={500} >
              programming languages
           </Link>
            </li>
            <li className='cursor-pointer m-10  text-center'>
            <Link to='about'  spy={true} smooth={true} offset={50} duration={500} >
              about
           </Link>
            </li>
          </ul>
       
      </div>
    
    </div>
  )
}

export default Header
