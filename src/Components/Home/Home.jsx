import React, { useEffect ,useRef} from "react";
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../Image/moon.jpg";
import venusImage from "../../Image/venus.jpg";
import spaceImage from "../../Image/space.jpg";

// import siteicon from '../../Image/siteicon.jpg'

import Typed from 'typed.js';



const Home = () => {
  const e1 = useRef(null);
  const typed = React.useRef(null);

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

  },[]);

  useEffect(()=>{
    const options = {
    strings: ['Full Stack developer.','Software Developer.','Frontend Developer.','Backend developer.','Mobile App developer.','Python Developer.'],
    typeSpeed: 80,
    backspeed:80,
    loop:true
  
  }

  typed.current = new Typed(e1.current,options)

  return ()=>{
    typed.current.destroy();
  }
  },[])

 


  return (
    <div name="home" className=' h-full w-full bg-gradient-to-b from-black via-black to-gray-800 rounded-br-[180px]  md:rounded-b-[200px] border-0 border-blue-500 md:border-blue-600 overflow-hidden border-l-[10px] border-l-orange-600 border-r-[10px] border-r-blue-600 shadow-lg shadow-orange-500 md:shadow-blue-500 md:border-l-orange-600 border-t-0  '>
      
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row rounded-b-lg'>
      <canvas className="homeCanvas h-250 md:h-full rounded-b-lg"> </canvas>
         <div className='flex flex-col  h-full z-10 mx-auto absolute top-32 left-5 md:top-20 md:left-28 p-4'>
          
            <h2 className='text-6xl sm:text-6xl font-black text-white point '>I'm Priyank.</h2>
            <div className="container text-3xl">
                 <span>
                  I am a <span className=" text-indigo-500 md:text-orange-500" style={{ whiteSpace: 'pre' }} ref={e1}><span  className="auto-type py-4 text-red-300"></span></span>
                  </span> 
            </div>
            {/* <p className='text-gray-200 py-4 max-w-md pop'>Full Stack developer || Software Developer || Backend || Frontend || Mobile App || websites</p> */}
         </div>

     
       


         {/* <div>
            <img src={siteicon} alt="profile" className="rounded-2xl mx-auto w-2/3 md:w-full " />
         </div> */}
      </div>
    </div>
  )
}

export default Home