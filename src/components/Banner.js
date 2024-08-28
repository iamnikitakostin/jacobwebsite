import React from 'react';
import bannerPic from "../assets/pics/banner.jpg"

const Banner = () => {
  return (
    <div className="relative bg-cover bg-center flex-1 flex justify-center lg:justify-start" style={{ backgroundImage: `url(${bannerPic})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center lg:items-start justify-center h-full text-white text-center ml-4 mr-4 lg:ml-24 xl:ml-72 lg:mr-0">
        <h1 className="text-5xl font-bold mb-4">Making Your Visions Come To Reality</h1>
        <p className="text-lg mb-6">Custom home building and renovations with support from the beginning to the end of the project</p>
        <div className="space-x-4">
          <button className="bg-white text-blue-700 font-semibold py-2 px-4 rounded">Our Portfolio</button>
          <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
