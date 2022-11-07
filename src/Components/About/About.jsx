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
    <div className='w-full h-full bg-gradient-to-b from-black to-gray-800 text-white  py-20 -z-10  shadow-sky-700 shadow-inner'>
      <div className=' mb-32 text-center'>
          <div className=' text-5xl text-white  font-bold  mx-auto w-2/6  md:px-10 text-center items-center justify-center overflow-hidden point'><p className='border-b-4 border-gray inline mx-auto text-center items-center justify-center pb-2'>About</p></div>
      </div>
    
      <div className='max-w-screen-lg md:p-4 mx-auto justify-between w-full h-full mt-30   gap-5 mt-5  md:flex'>
         
         {/* <div className='w-full h-full border'></div>
         <div className='w-full h-[120px] border'></div>
         <div className='w-full h-[120px] border'></div> */}

        <div className='  md:w-1/3 h-full mx-auto'>
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
              {/* <div className="cubeShadow mt-20 hidden md:visible"></div> */}


         </div>

        

         <div className='  h-full justify-center items-center font-thin mx-auto px-20 text-lg'>
            <p className='font-thin font-extralight'>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam ipsam, reprehenderit quod illo eaque a at ut laborum! Optio saepe accusamus similique sequi quam asperiores vero dolore nihil nam.
               Natus non earum, nam facere beatae cupiditate eaque est consequatur eius nemo, in, possimus ducimus? Porro, !
            </p>
            </div>
         </div>
      </div>
    
      
  
  )
}

export default About