import React from 'react';

const Reviews = () => {
  return (
    <section id="reviews" className="py-16 bg-gray-100 h-[100vh]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#14233C] mb-6">What Our Clients Say</h2>
        <p className="text-lg text-gray-600 mb-12">We value our clients' feedback and strive to provide the best service possible. Here are some of the reviews from our satisfied customers.</p>
        <div className="flex w-[100%] overflow-x-scroll relative">
          <span className="flex-shrink-0 w-full sm:w-1/2 lg:w-[50%] px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg h-[300px]">
              <h3 className="text-2xl font-semibold text-[#14233C] mb-4">Client 1 Name</h3>
              <p className="text-lg text-right text-gray-400 mb-4">- Company Rococo</p>
              <p className="text-gray-600">"Amazing service and high-quality work! Highly recommend."</p>
            </div>
          </span>  
          <span className="flex-shrink-0 w-full sm:w-1/2 lg:w-[50%] px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg h-[300px]">
              <h3 className="text-2xl font-semibold text-[#14233C] mb-4">Client 2</h3>
              <p className="text-lg text-right text-gray-400 mb-4">- Company Rococo</p>
              <p className="text-gray-600">"Amazing service and high-quality work! Highly recommend."</p>
            </div>
          </span>
          <span className="flex-shrink-0 w-full sm:w-1/2 lg:w-[50%] px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg h-[300px]">
              <h3 className="text-2xl font-semibold text-[#14233C] mb-4">Client 3</h3>
              <p className="text-lg text-right text-gray-400 mb-4">- Company Rococo</p>
              <p className="text-gray-600">"Amazing service and high-quality work! Highly recommend."</p>
            </div>
          </span>
          <span className="flex-shrink-0 w-full sm:w-1/2 lg:w-[50%] px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg h-[300px]">
              <h3 className="text-2xl font-semibold text-[#14233C] mb-4">Client 4</h3>
              <p className="text-lg text-right text-gray-400 mb-4">- Company Rococo</p>
              <p className="text-gray-600">"Amazing service and high-quality work! Highly recommend."</p>
            </div>
          </span>
          <span className="flex-shrink-0 w-full sm:w-1/2 lg:w-[50%] px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg h-[300px]">
              <h3 className="text-2xl font-semibold text-[#14233C] mb-4">Client 5</h3>
              <p className="text-lg text-right text-gray-400 mb-4">- Company Rococo</p>
              <p className="text-gray-600">"Amazing service and high-quality work! Highly recommend."</p>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
