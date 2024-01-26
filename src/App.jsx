import React from 'react';

import Footer from './components/footer/Footer';
import NavBar from './components/navbar/Navbar';
import Header from './components/header/Header';
import AllComponent from './components/AllComponent';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Project from './components/projects/Projects';
import Contact from './components/contact/Contact';

//import Topbar from './components/topbar/Topbar';


const App = () => {
  return (
    <>
      <NavBar/>
      <Header/>
      
      {/* <Intro />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact /> */}
      
      {/* <Home/> */}
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer />
      {/* <NavBar/> */}
      {/* <AllComponent/> */}
    </>
  )
}

export default App
