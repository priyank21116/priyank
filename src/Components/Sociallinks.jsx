import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from "react-icons/bs"





const Sociallinks = () => {

   const logolink=[{
      id:1,
      child:(
         <>
            LinkedIn <FaLinkedin size={30} />
         </>
      ),
      href: 'https://www.linkedin.com/in/priyank21116/',
      style:'rounded-tr-md'
   },{
      id:2,
      child:(
         <>
            Github <FaGithub size={30} />
         </>
      ),
      href: 'https://github.com/priyank21116',
     
   },{
      id:3,
      child:(
         <>
            Mail to:  <HiOutlineMail size={30} />
         </>
      ),
      href: "mailto:priyankgupta2120@gmail.com",
     
   },{
      id:4,
      child:(
         <>
            Resume <BsFillPersonLinesFill size={30} />
         </>
      ),
      href: '/PRIYANK_GUPTA.pdf',
      style:'rounded-br-md',
      download:true,
   },
]
  return (
    <div className=' absolute -bottom-[380px] lg:flex flex-row md:flex-col md:top-[35%] md:left-0 md:fixed'>
      <ul>

         {logolink.map(({id,child,href,style,download})=>(
         <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px] ${style}`}>
            <a 
            href={href} 
            className='flex justify-between items-center w-full text-white'
            download={download}
            target="_blank"
             rel="noreferrer"
            >
            {child}
            </a>
         </li>
         ))}
         
      </ul>
    </div>
  )
}

export default Sociallinks