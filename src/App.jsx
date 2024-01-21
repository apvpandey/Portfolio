import React from 'react';

import Footer from './components/footer/Footer';
import NavBar from './components/navbar/Navbar';
import Header from './components/header/Header';

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
      <Footer />
    </>
  )
}

export default App
