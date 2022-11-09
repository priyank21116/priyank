import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiCsswizardry,SiJavascript,SiExpress,SiMongodb,SiTailwindcss,SiRedux,SiPython } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { TiHtml5 } from "react-icons/ti";
import { TbBrandReactNative } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";



const Skillbox = () => {


//   const skills=[
//     {id:1 ,imgg: SiPython, name: "Python", style: 'shadow-blue-500'},
//     {id: 2,imgg: SiJavascript, name:"JavaScript", style: 'shadow-orange-500'},
//     {id: 3,imgg: FaReact, name:"React" , style: 'shadow-sky-400'},
//     {id: 4,imgg: DiNodejs , name: "Nodejs", style: 'shadow-yellow-500'},
//     {id: 5,imgg:TiHtml5 , name: "Html", style: 'shadow-blue-700'},
//     {id: 6,imgg: SiCsswizardry, name:"CSS" , style: 'shadow-white'},
//     {id: 7,imgg: SiExpress, name: "Express", style: 'shadow-pink-500'},
//     {id: 8,imgg: SiMongodb, name: "Mongodb", style: 'shadow-blue-500'},
//     {id: 9,imgg: TbBrandReactNative, name: "ReactNative", style: 'shadow-red-400'},
//     {id: 10,imgg: AiOutlineConsoleSql, name: "SQL", style: 'shadow-gray-300'},
//     {id: 11,imgg: SiRedux, name: "Redux", style: 'shadow-gray-300'},
//     {id: 12,imgg: SiTailwindcss, name: "Tailwindcss", style: 'shadow-gray-300'}
  
// ]
  return (
    <div name="experience" className='bg-gradient-to-b from-black to-gray-800 pt-32  border-4 border-blue-500 rounded-t-[200px] rounded-b-[100px] w-full h-full border-b-0 pb-20 px-4'>


<div className='w-4/12 border-2 border-gray-500 bg-gradient-to-b from-gray-800 to-black rounded-xl justify-center  h-full py-10 mx-auto pl-32 mb-20 hover:scale-105 duration-300 '>

<div className=' w-full mx-auto my-4 pb-4 border-b-42  inline border-gray-400 relative -top-4 -left-16 nd:top-1 md:left-1 text-center '>
 <p className=' text-4xl md:text-5xl font-bold text-white inline mx-auto -ml-8 md:ml-16'>Skills</p>

<p className=' dance w-full text-4xl text-blue-500 -ml-16 md:-ml-16 pt-8'> ....learner</p>
  </div>


</div>

<div className='max-w-screen-lg  p-8 flex flex-col justify-center w-full h-full text-white mx-auto  bg-gray-900 border-4 border-blue-500 border-l-orange-500 rounded-3xl   md:scale-x-110 duration-300 border-t-0 border-b-0'>
  <div className='mx-auto my-4 pb-4'>
    <p className='text-4xl font-bold inline border-b-4 mx-auto border-gray-400 p-4'>Worked On</p>
   
  </div>
  <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16 text-center py-10 px-8 sm:px-0 '>



  <div className={`shadow-lg hover:scale-105 duration-300 py-4 rounded-lg shadow-blue-500`}>
    <SiPython size={70} className=' w-12 md:w-20 mx-auto my-4'/>
    <p className='mt-4'>Python</p>
  </div>
  <div className={`shadow-lg hover:scale-105 duration-300 py-4 rounded-lg shadow-orange-500`}>
    <SiJavascript size={70} className=' w-12 md:w-20 mx-auto   my-4'/>
    <p className='mt-4'>JavaScript</p>
  </div>
  <div className={`shadow-lg hover:scale-105 duration-300 py-4 rounded-lg shadow-sky-400`}>
    <FaReact size={70} className=' w-12 md:w-20 mx-auto   my-4'/>
    <p className='mt-4'>Reactjs</p>
  </div>
  <div className={`shadow-lg hover:scale-105 duration-300 py-2 rounded-lg shadow-yellow-500`}>
    <DiNodejs size={70} className=' w-12 md:w-20 mx-auto   my-4'/>
    <p className='mt-4'>Nodejs</p>
  </div>


  <div className={`shadow-lg hover:scale-105 duration-300 py-2 rounded-lg shadow-pink-500`}>
    <TiHtml5 size={70} className=' w-12 md:w-20 mx-auto   my-4'/>
    <p className='mt-4'>Html</p>
  </div>
  <div className={`shadow-lg hover:scale-105 duration-300 py-2 rounded-lg shadow-blue-700`}>
    <SiCsswizardry size={70} className=' w-12 md:w-20 mx-auto   my-4'/>
    <p className='mt-4'>CSS</p>
  </div>
  <div className={`shadow-lg hover:scale-105 duration-300 py-2 rounded-lg shadow-white`}>
    <SiExpress size={70} className=' w-12 md:w-20 mx-auto   my-4'/>
    <p className='mt-4'>Express</p>
  </div>
  <div className={`shadow-lg hover:scale-105 duration-300 py-2 rounded-lg shadow-blue-500`}>
    <SiMongodb size={70} className=' w-12 md:w-20 mx-auto   my-4'/>
    <p className='mt-4'>Mongo DB</p>
  </div>


  <div className={`shadow-lg hover:scale-105 duration-300 py-2 rounded-lg shadow-red-600`}>
    <TbBrandReactNative size={70} className=' w-12 md:w-20 mx-auto   my-4'/>
    <p className='mt-4'>React Native</p>
  </div>
  <div className={`shadow-lg hover:scale-105 duration-300 py-2 rounded-lg shadow-red-200`}>
    <AiOutlineConsoleSql size={70} className=' w-12 md:w-20 mx-auto   my-4'/>
    <p className='mt-4'>SQL</p>
  </div>
  <div className={`shadow-lg hover:scale-105 duration-300 py-2 rounded-lg shadow-red-400`}>
    <SiRedux size={70} className=' w-12 md:w-20 mx-auto   my-4'/>
    <p className='mt-4'>Redux</p>
  </div>
  <div className={`shadow-lg hover:scale-105 duration-300 py-2 rounded-lg shadow-gray-300`}>
    <SiTailwindcss size={70} className=' w-12 md:w-20 mx-auto   my-4'/>
    <p className='mt-4'>TailwindCSS</p>
  </div>




     {/* {skills.map(({id,imgg,name,style})=>(
       <div key={id} className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}>
        <SiCsswizardry size={50} className='w-20 mx-auto'/>
      {/* <img src={SiCsswizardry} alt="python" className='w-20 mx-auto' /> */}
      {/* <p className='mt-4'>{name}</p>
    </div>*/}
   
  </div>
</div>




    </div>
  )
}

export default Skillbox