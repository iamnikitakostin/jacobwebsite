import React from 'react';

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Services</h2>
        <p className="text-lg mb-12">We offer a wide range of services to meet every type of need.</p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Custom Home Building</h3>
              <p className="text-gray-600">We specialize in creating beautiful, custom homes from the ground up.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Renovations</h3>
              <p className="text-gray-600">Our renovation services will help you transform your existing space.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
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
