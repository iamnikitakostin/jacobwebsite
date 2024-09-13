import React from 'react';
import { FaHouse } from "react-icons/fa6";
import { MdConstruction } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";

const Services = () => {
  return (
    <section className="py-16 bg-gray-100 min-h-[100vh]" id="services">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Services</h2>
        <p className="text-lg mb-12">We offer a wide range of services to meet every type of need.</p>
        <div className="flex flex-wrap justify-center relative">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
              <div className="m-8">
                <FaHouse size="125px"/>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Custom Home Building</h3>
              <p className="text-gray-600">We specialize in creating beautiful, custom homes from the ground up.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
              <div className="m-8">
                  <MdConstruction size="125px"/>
                </div>
              <h3 className="text-2xl font-semibold mb-4">Renovations</h3>
              <p className="text-gray-600">Our renovation services will help you transform your existing space.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
              <div className="m-8">
                  <MdManageAccounts size="125px"/>
               </div>
              <h3 className="text-2xl font-semibold mb-4">Project Management</h3>
              <p className="text-gray-600">We manage your project from start to finish, ensuring quality and satisfaction.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
