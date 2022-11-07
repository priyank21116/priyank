import React from 'react'
import workfigg from '../../Image/projects/workfigg.gif'
import glodeview from '../../Image/projects/glodeview.gif'
import interview from '../../Image/projects/interview.png'
import pickflipp from '../../Image/projects/pickflipp.png'
import trackcovid from '../../Image/projects/trackcovid.png'
import tradeinss from '../../Image/projects/tradeinss.gif'
import uberr from '../../Image/projects/uberr.png'
import getVaccine from '../../Image/projects/getVaccine.png'


const Projects = () => {

  const projectlist=[{
    id: 1,
    src: workfigg,
    title: 'Workfig',
    description:"Solves the problem of daily wage utility workers not getting work and of common people who could not find accurate servicemen for daily household jobs.",
    buttons:{
       demo:'https://www.youtube.com/watch?v=aN1QZVn3QZw&ab_channel=PriyankGupta' ,
       Fcode:'https://github.com/priyank21116/WorkigFE' ,
      Bcode: 'https://github.com/priyank21116/WorkfigBS',
    }
   
  },
  {
    id: 2,
    src: interview,
    title: 'Interview Scheduling Portal',
    description:"an application that helps admins to schedule,update and delete meetings and interview, enabling various checks and verification.",
    buttons:{
       Website:'https://interviewportalprk.netlify.app/' ,
       Fcode: 'https://github.com/priyank21116/Interview-Creation-Portal',
      Bcode: 'https://github.com/priyank21116/Interview-CreationPortal-Backend',
    }
   
  }]
  
  const projecttwo=[{
    id: 3,
    src: pickflipp,
    title: 'Go-cart',
    description:"A web app that replace most tedious part of shopping in stores i.e. billing counter. It helps to generate invoice on go.",
    buttons:{
      code: 'https://github.com/priyank21116/Pickflip',
    }
   
  },{
    id: 6,
    src: uberr,
    title: 'UberClone',
    description:"An React Native app replicating Uber cab booking application with google map & distance api.",
    buttons:{
      code: 'https://github.com/priyank21116/UberClone',
    }
   
  },{
    id: 7,
    src: glodeview,
    title: 'Globview',
    description:"A Travel advisor web app.Provide information of near by restaurant,hotels and display them using google map api.",
    buttons:{
      code: 'https://github.com/priyank21116/globeview',
    }
   
  },{
    id: 4,
    src: getVaccine,
    title: 'InfoVaccine',
    description:"In the time when nobody was able to find time slot for vaccination.I created an app to conveniently find one vaccination appointment for me & users",
    buttons:{
      code: 'https://github.com/priyank21116/infoVaccine',
    }
   
  },{
    id: 5,
    src:tradeinss ,
    title: 'Tradeins',
    description:'Meant for real e-commerce trading. Users can add items on wishlist, cart, place an order, and checkout. Shopkeeper can add new item on his store site anytime',
    buttons:{
      code: 'https://github.com/priyank21116/Tradeins',
    }
   
  },{
    id: 8,
    src: trackcovid,
    title: 'Track-covid',
    description:"It is a dashboard showing covide numbers for your state .A simple react web app uses cowin covid api.",
    buttons:{
      code: 'https://github.com/priyank21116/track-covid',
    }
   
  }
]
  return (
    <div name="projects" className='bg-gradient-to-b from-gray-900 to-black  w-full text-white h-full py-16 border-t-2 border-orange-400 shadow-inner  rounded-t-[100px]'>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 mx-auto -mt-2">
          <p className='text-5xl font-bold inline border-b-4  mx-auto border-gray-500 mb-12'>Projects</p>
        </div>

         <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-8 sm:px-2 mt-16 '>



        {projectlist.map((item)=>(
<div key={item.id} className='shadow-lg shadow-gray-600  bg-balck border-0 border-gray-500 rounded-2xl overflow-hidden'>

      <div className='mx-auto '>
        <div className='w-5/6 h-full border-[4px] border-blue-500 rounded-2xl mx-auto mb-4 border-t-0 border-b-0'>

           <div className='w-[250px] h-[400px] mx-auto overflow-hidden pt-2'>
                 <img className='w-5/6 h-5/6 mx-auto' src={item.src} alt="workfig"></img>
           </div>
           </div>
        <div className='-mt-4 mx-12'>
            <h1 className='text-orange-500 text-3xl text-center '>{item.title}</h1>
            <h5 className='text-gray-300 text-xl text-center '>{item.description}</h5>
        </div>
      </div>

          <div className='flex flex-center justify-center  w-full  '>
                {item.buttons.demo && <a target="_blank"  href={item.buttons.demo} > <button  className=' bg-gray-800 border rounded border-gray-600 px-8 py-3 my-4 duration-200 hover:scale-105'>Demo</button> </a>}
                {item.buttons.Website && <a target="_blank"  href={item.buttons.Website}> <button  className=' bg-gray-800 border rounded border-gray-600 px-6  p-3 py-3 my-4 duration-200 hover:scale-105'>Website</button> </a>}
                {item.buttons.Fcode && <a target="_blank"  href={item.buttons.Fcode}><button className=' bg-gray-800 border rounded border-gray-600 p-3 py-3 my-4 duration-200 hover:scale-105'>FrontendCode</button> </a>}
                 {item.buttons.Bcode && <a target="_blank"  href={item.buttons.Bcode}> <button className=' bg-gray-800 border rounded border-gray-600 p-3 py-3 my-4 duration-200 hover:scale-105'>BackendCode</button> </a>}
                 {item.buttons.code && <a target="_blank"  href={item.buttons.code}><button className=' bg-gray-800 border rounded border-gray-600 p-3 py-3 my-4 duration-200 hover:scale-105'>Project Source</button> </a>}
                 

          </div>

          </div>
        ))}
        
    

        </div>


        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 sm:px-2 mt-16 md:scale-x-125 '>



{projecttwo.map((item)=>(
<div key={item.id} className='py-6 shadow-lg shadow-gray-600  bg-balck border-0 border-gray-500 rounded-2xl overflow-hidden'>

<div className='mx-auto '>
<div className='w-5/6 h-full border-[4px] border-blue-500 rounded-2xl mx-auto mb-4 border-t-0 border-b-0'>

   <div className='w-[250px] h-[350px] mx-auto overflow-hidden pt-2'>
         <img className='w-5/6 h-5/6 mx-auto' src={item.src} alt="workfig"></img>
   </div>
   </div>
<div className='-mt-4 mx-12'>
    <h1 className='text-orange-500 text-3xl text-center '>{item.title}</h1>
    <h5 className='text-gray-300 text-xl text-center '>{item.description}</h5>
</div>
</div>

  <div className='flex flex-center justify-center  w-full align-bottom  '>
        {item.buttons.demo && <a target="_blank"  href={item.buttons.demo} > <button  className=' bg-gray-800 border rounded border-gray-600 px-8 py-3 my-4 duration-200 hover:scale-105'>Demo</button> </a>}
        {item.buttons.Website && <a target="_blank"  href={item.buttons.Website}> <button  className=' bg-gray-800 border rounded border-gray-600 px-6  p-3 py-3 my-4 duration-200 hover:scale-105'>Website</button> </a>}
        {item.buttons.Fcode && <a target="_blank"  href={item.buttons.Fcode}><button className=' bg-gray-800 border rounded border-gray-600 p-3 py-3 my-4 duration-200 hover:scale-105'>FrontendCode</button> </a>}
         {item.buttons.Bcode && <a target="_blank"  href={item.buttons.Bcode}> <button className=' bg-gray-800 border rounded border-gray-600 p-3 py-3 my-4 duration-200 hover:scale-105'>BackendCode</button> </a>}
         {item.buttons.code && <a target="_blank"  href={item.buttons.code}><button className=' bg-gray-800 border rounded border-gray-600 p-3 py-3 my-4 duration-200 hover:scale-105'>Project Source</button> </a>}
         

  </div>

  </div>
))}



</div>


        
      </div>
      
    </div>
  )
}

export default Projects