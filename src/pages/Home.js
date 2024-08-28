import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Services from './Services';
import About from './About';
import Projects from './Projects';
import Reviews from './Reviews';
import ContactUs from './ContactUs';
import Landing from './Landing';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Nav />
      <Landing />
      <Services />
      <About />
      <Projects />
      <Reviews />
      <ContactUs />
    </div>
  );
};

export default Home;
