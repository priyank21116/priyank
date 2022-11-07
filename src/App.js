import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Sociallinks from './Components/Sociallinks';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skillbox from './Components/Skillbox/Skillbox';
import Footer from './Components/Footer/Footer';

import siteicon from './Image/siteicon.jpg'

function App() {
  return (
    <div>
    {/* <Header />   */}
    <div className='bg-black'>
      <Home />
      {/* <img className='absolute right-8 bottom-11 w-12 h-12' src={siteicon} alt=" " ></img> */}
    </div>
  
  <About />

  <div className='bg-gray-800 px-4'>
  <Skillbox />
  </div>
  <div className='bg-gray-800 px-4'>
  <Projects />
  </div>
  <Footer />
  

  <Sociallinks />
    </div>
    
   
  );
}

export default App;
