import React from 'react';

const Reviews = () => {
  const reviewsRef = React.useRef(null);

  React.useEffect(() => {
    const reviewsElement = reviewsRef.current;

    if (!reviewsElement) return;

    const scrollAnimation = () => {
      reviewsElement.scrollTo({
        left: reviewsElement.clientWidth / 2,
        behavior: 'smooth',
      });

      setTimeout(() => {
        reviewsElement.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      }, 500);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          scrollAnimation();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(reviewsElement);

    return () => {
      observer.unobserve(reviewsElement);
    };
  }, []);
  return (
    <section id="reviews" className="py-16 bg-gray-100 min-h-[100vh]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#14233C] mb-6">What Our Clients Say</h2>
        <p className="text-lg text-gray-600 mb-12">We value our clients' feedback and strive to provide the best service possible. Here are some of the reviews from our satisfied customers.</p>
        <div ref={reviewsRef} className="flex w-[100%] overflow-x-scroll relative gap-4 snap-x snap-mandatory scroll-p-0">
          <span className="flex-shrink-0 w-full lg:w-[50%] px-4 mb-8 snap-start">
            <div className="bg-white p-6 rounded-lg shadow-lg min-h-[500px]">
              <h3 className="text-2xl font-semibold text-[#14233C] mb-4">Scott Mahn</h3>
              <p className="text-lg text-right text-gray-400 mb-4">- 2024</p>
              <p className="text-gray-600 text-left">"We hired the team at Alderbridge Contracting to renovate our very dated laundry room and they transformed it into a beautiful new space. Jacob and Steve are friendly, professional, punctual, knowledgeable and a pleasure to work with. They brought great ideas to the table and completed their work on time and on budget. They respected our house and always made sure to clean up at the end of each day. Communication was great throughout the process and the results surpassed our expectations! We would not hesitate to use their services again."</p>
            </div>
          </span>  
          <span className="flex-shrink-0 w-full sm:w-1/2 lg:w-[50%] px-4 mb-8 snap-start">
            <div className="bg-white p-6 rounded-lg shadow-lg min-h-[500px]">
              <h3 className="text-2xl font-semibold text-[#14233C] mb-4">Tony Flasher</h3>
              <p className="text-lg text-right text-gray-400 mb-4">- 2023</p>
              <p className="text-gray-600 text-left">"I met Jacob and Steve thru friends Lee and Tom. They are the up and coming Brian Baeumler of home renovations. What sets them apart is there vision, the ability to create something out of nothing. There attention to detail, they leave no stone  unturned. They take there time to ensure everything is done right. Jacob and Steve turned my 1950 bathroom upside down, through there creative vision and knowledge, the same for my kitchen. There tiling work left me in awe. To Jacob and Steve this wasn't a job to be done but a job done through a labor of love. I would highly recommend them to anyone looking to get a renovation done and done on time and budget."</p>
            </div>
          </span>
          <span className="flex-shrink-0 w-full sm:w-1/2 lg:w-[50%] px-4 mb-8 snap-start">
            <div className="bg-white p-6 rounded-lg shadow-lg min-h-[500px]">
              <h3 className="text-2xl font-semibold text-[#14233C] mb-4">Lisa Suriani</h3>
              <p className="text-lg text-right text-gray-400 mb-4">- 2023</p>
              <p className="text-gray-600 text-left">"Amazing work done by these fine young men, so clean and efficient would recommend highly. tgey lay down flooring in our 4 bedrooms closets and hallway as well as new baseboards so happy with the finished product."</p>
            </div>
          </span>
          <span className="flex-shrink-0 w-full sm:w-1/2 lg:w-[50%] px-4 mb-8 snap-start">
            <div className="bg-white p-6 rounded-lg shadow-lg min-h-[500px]">
              <h3 className="text-2xl font-semibold text-[#14233C] mb-4">Alex Bonnick</h3>
              <p className="text-lg text-right text-gray-400 mb-4">- 2023</p>
              <p className="text-gray-600 text-left">"Jacob and his team did an amazing job renovating my basement family room. Total transformation. Everything was executed in a timely fashion from start to finish. Steve is incredibly talented and knowledgeable. I would highly recommend Jacob and his team."</p>
            </div>
          </span>
          <span className="flex-shrink-0 w-full sm:w-1/2 lg:w-[50%] px-4 mb-8 snap-start">
            <div className="bg-white p-6 rounded-lg shadow-lg min-h-[500px]">
              <h3 className="text-2xl font-semibold text-[#14233C] mb-4">Hubert Muciek</h3>
              <p className="text-lg text-right text-gray-400 mb-4">- 2022</p>
              <p className="text-gray-600 text-left">"Alderbridge Contracting has done a multitude of different jobs from complete kitchen renovations to backyard demolition. Each time the team brings consistency, affordability, timeliness, and safety. The work ethic, skill, and integrity is unmatched. Highly recommend."</p>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
