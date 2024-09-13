import React, { useState } from 'react';
import logo from "../assets/logo.png";
import './Nav.css'; // Ensure this file includes your transitions

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md h-[15vh] flex">
      <div className="flex justify-between items-center py-4 px-8 w-full">
        <img src={logo} alt="Logo" className="w-48" />

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)} className="text-gray-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex flex-row space-x-8">
          <li><a href="#home" className="font-semibold text-gray-500 hover:text-gray-900">HOME</a></li>
          <li><a href="#services" className="font-semibold text-gray-500 hover:text-gray-900">SERVICES</a></li>
          <li><a href="#about" className="font-semibold text-gray-500 hover:text-gray-900">ABOUT</a></li>
          <li><a href="#projects" className="font-semibold text-gray-500 hover:text-gray-900">PROJECTS</a></li>
          <li><a href="#reviews" className="font-semibold text-gray-500 hover:text-gray-900">REVIEWS</a></li>
          <li><a href="#contact" className="font-semibold text-gray-500 hover:text-gray-900">CONTACT US</a></li>
        </ul>

        <div className="hidden xl:block text-sm text-center py-4 lg:ml-40">
          <p>+1 (416) 570-7214</p>
          <a href="https://www.instagram.com/alderbridgecontracting/" rel="noreferrer" className="text-orange-500 font-medium">@alderbridgecontracting</a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-90 flex lg:hidden items-center justify-center z-20 transform transition-transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="absolute top-4 right-4">
          <button onClick={() => setIsOpen(false)} className="text-white text-2xl focus:outline-none">
            &times;
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6">
          <li><a href="#home" className="text-white text-2xl font-semibold hover:text-gray-400" onClick={handleLinkClick}>HOME</a></li>
          <li><a href="#services" className="text-white text-2xl font-semibold hover:text-gray-400" onClick={handleLinkClick}>SERVICES</a></li>
          <li><a href="#about" className="text-white text-2xl font-semibold hover:text-gray-400" onClick={handleLinkClick}>ABOUT</a></li>
          <li><a href="#projects" className="text-white text-2xl font-semibold hover:text-gray-400" onClick={handleLinkClick}>PROJECTS</a></li>
          <li><a href="#reviews" className="text-white text-2xl font-semibold hover:text-gray-400" onClick={handleLinkClick}>REVIEWS</a></li>
          <li><a href="#contact" className="text-white text-2xl font-semibold hover:text-gray-400" onClick={handleLinkClick}>CONTACT US</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
