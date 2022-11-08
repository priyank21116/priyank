import React from 'react'
import './About.css'

import one from  '../../Image/one/one.jpg'
import two from  '../../Image/one/two.jpeg'
import three from  '../../Image/one/three.jpg'
import four from  '../../Image/one/four.jpg'
import five from  '../../Image/one/five.jpg'
import six from  '../../Image/one/six.jpg'




const About = () => {

  return (
    <div className='w-full h-full bg-gradient-to-b from-black to-gray-800 text-white  py-20  -z-50  shadow-sky- shadow-inner text-center'>
      <div className=' mb-40 text-center'>
          <div className=' text-5xl text-white  font-bold  mx-auto w-2/6  md:px-10 text-center items-center justify-center overflow-hidden point inline border-b-4 border-gray-400 p-2'><p className='border-b-0 border-gray inline mx-auto text-center items-center justify-center pb-2'>About</p></div>
      </div>
    
      <div className='max-w-screen-lg md:p-4 mx-auto justify-between w-full h-full  gap-5 mt-5  md:flex md:border-[20px]  md:border-gray-900 rounded-xl '>
         
         {/* <div className='w-full h-full border'></div>
         <div className='w-full h-[120px] border'></div>
         <div className='w-full h-[120px] border'></div> */}

        <div className='  md:w-1/3 h-full mx-auto mt-20  md:ml-20 md:pt-12'>
         <div className="homeCubeSkills mb-40 mx-auto">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={one} alt="Face1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={two} alt="Face2" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={three} alt="Face3" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={four} alt="Face4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={five} alt="Face5" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={six} alt="Face6" />
          </div>
        

           


              </div>
              <div className="cubeShadow mt-20 hidden md:visible"></div>


         </div>

        

         <div className=' w-4/6 md:-mt-28 md:-mr-28 md:w-4/6 h-full justify-center items-center mx-auto px-16 text-lg  font-thin bg-gray-900  border-0 rounded-2xl md:ml-20 '>
            <p className='font-thin text-center pop py-20 '>
            An innovator, creator, developer and a Startup Enthusiast.
            <div className='py-4'></div>
            I am experienced in building highly functional websites, applications and software using modern web frameworks.
<div className='py-2'></div>

A passionate professional who loves to work on real-world problems and craft class solutions. I consider myself good at understanding the needs 
of Businesses and Product. And hence driven to build products which impact masses and get served as value.  
<div className='py-2'></div>

I'm Inn for new opportunities and associations,anytime.
            </p>
            </div>
         </div>
      </div>
    
      
  
  )
}

export default About