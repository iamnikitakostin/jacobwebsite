import React from 'react';
import image from "../assets/pics/aboutUs.jpg";

const About = ({setLoading, setFadeOut}) => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#14233C] mb-6 text-center">About Us</h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 h-auto p-4">
            <img className="h-auto w-full object-cover rounded-lg" src={image} alt="About Us" onLoad={() => {
          setFadeOut(true);
          setTimeout(() => setLoading(false), 1500);
        }}/>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <p className="text-2xl text-gray-600">
              We are an elite team of project managers, coordinators, designers, and skilled sub-trades specializing in custom home building and renovations.<br/><br/>
              In the ever-evolving construction industry, our top priority is client satisfaction from start to finish. We are committed to exceeding expectations with our passion for quality craftsmanship.<br/><br/>
              Effective communication is key, and our experienced team is here to guide you through every step of the planning and design process.<br/><br/>
              Whether you're interested in custom builds, renovations, additions, or remodeling, we'd love to bring your vision to life.<br/><br/>
              Contact us today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
