import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import Services from './Services';
import About from './About';
import Projects from './Projects';
import Reviews from './Reviews';
import ContactUs from './ContactUs';
import Landing from './Landing';
import Nav from '../components/Nav';
import './Home.css'; // Import the CSS file for the spinner

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  return (
    <div className="flex flex-col">
      {loading && 
        (<div className={`fixed w-full min-h-[100vh] z-50 flex justify-center items-center bg-orange-500 spinner-container ${fadeOut ? 'fade-out' : ''}`} >
          <ClipLoader color="#ffffff" loading={loading} size={50} />
        </div>)}
          <Nav/>
          <Landing />
          <Services />
          <About setLoading={setLoading} setFadeOut={setFadeOut}/>
          <Projects />
          <Reviews />
          <ContactUs />
    </div>
  );
};

export default Home;
