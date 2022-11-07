import React from 'react'
import { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'


const Header = () => {

   const [state,setstate]= useState(false)

   const links=[{
      id:1,
      link:'home'
   },{
      id:2,
      link:'About'
   },{
      id:3,
      link:'Skills'
   },{
      id:4,
      link:'Projects'
   }]
  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-gradient-to-b from-black to-gray-900  fixed  px-4 '>
      <div>
         <h1 className='text-3xl font-signature ml-2 navbartext'>priyank.</h1>
      </div>
      <ul className='hidden md:flex '>
         {links.map(({id,link}) => (
                  <li 
                   key={id} 
                   className="px-4 cursor-pointer capitalize font-medium text-gray-100 hover:scale-105 duration-200"
                   >
                     <Link to={link} smooth duration={500}>{link}</Link>
                     
               </li>        
            ))}
      </ul>

      <div onClick={()=>setstate(!state)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
         {
            state ? <FaTimes size={30}/> :<FaBars size={30} />
         }
         
      </div>
      {state && 
      <ul className='flex flex-col justify-center items-center absolute top-0 right-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
      {links.map(({id,link}) => (
                  <li 
                   key={id} 
                   className="px-4 cursor-pointer capitalize  py-5 text-gray-100 hover:scale-105 text-2xl duration-200"
                   >
                 <Link to={link} smooth duration={500} onClick={()=>setstate(!state)}>{link}</Link>

               </li>        
            ))}
      </ul>
}
    </div>
  )
}

export default Header