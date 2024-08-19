import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#14233C] mb-6">Our Projects</h2>
        <p className="text-lg text-gray-600 mb-12">Here are some of the projects we have successfully completed. We pride ourselves on delivering high-quality results that exceed our clients' expectations.</p>
        <div className="flex flex-wrap justify-center">
          {/* Add project cards here */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#14233C] mb-4">Project Title</h3>
              <p className="text-gray-600">Brief description of the project.</p>
            </div>
          </div>
          {/* Repeat for more projects */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
