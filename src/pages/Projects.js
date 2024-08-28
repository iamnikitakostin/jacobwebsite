import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white min-h-[100vh]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#14233C] mb-6">Our Projects</h2>
        <p className="text-lg text-gray-600 mb-12">Here are some of the projects we have successfully completed. We pride ourselves on delivering high-quality results that exceed our clients' expectations.</p>
        <div className="flex w-full overflow-x-auto relative space-x-4">
          <div className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4 mb-8 min-h-[50vh]">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-semibold text-[#14233C] mb-4">Project Title</h3>
              <p className="text-gray-600">Brief description of the project.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4 mb-8 min-h-[50vh]">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-semibold text-[#14233C] mb-4">Project Title</h3>
              <p className="text-gray-600">Brief description of the project.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4 mb-8 min-h-[50vh]">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-semibold text-[#14233C] mb-4">Project Title</h3>
              <p className="text-gray-600">Brief description of the project.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4 mb-8 min-h-[50vh]">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-semibold text-[#14233C] mb-4">Project Title</h3>
              <p className="text-gray-600">Brief description of the project.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4 mb-8 min-h-[50vh]">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-semibold text-[#14233C] mb-4">Project Title</h3>
              <p className="text-gray-600">Brief description of the project.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
