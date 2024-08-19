import React from 'react';

const Reviews = () => {
  return (
    <section id="reviews" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#14233C] mb-6">What Our Clients Say</h2>
        <p className="text-lg text-gray-600 mb-12">We value our clients' feedback and strive to provide the best service possible. Here are some of the reviews from our satisfied customers.</p>
        <div className="flex flex-wrap justify-center">
          {/* Add review cards here */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#14233C] mb-4">Client Name</h3>
              <p className="text-gray-600">"Amazing service and high-quality work! Highly recommend."</p>
            </div>
          </div>
          {/* Repeat for more reviews */}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
