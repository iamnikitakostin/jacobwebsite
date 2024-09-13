import React from 'react';
import pic1 from "../assets/projects/1.JPG";
import pic2 from "../assets/projects/2.JPG";
import pic3 from "../assets/projects/3.JPG";
import pic4 from "../assets/projects/4.JPG";
import pic5 from "../assets/projects/5.JPG";
import pic6 from "../assets/projects/6.JPG";
import pic7 from "../assets/projects/7.JPG";
import pic8 from "../assets/projects/8.JPG";
import pic9 from "../assets/projects/9.JPG";

const Projects = () => {
  const projectsRef = React.useRef(null);

  React.useEffect(() => {
    const projectsElement = projectsRef.current;

    if (!projectsElement) return;

    const scrollAnimation = () => {
      projectsElement.scrollTo({
        left: projectsElement.clientWidth / 2,
        behavior: 'smooth',
      });

      setTimeout(() => {
        projectsElement.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      }, 1500);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          scrollAnimation();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50% 0px' }
    );

    observer.observe(projectsElement);

    return () => {
      observer.unobserve(projectsElement);
    };
  }, []);
  return (
    <section id="projects" className="py-16 bg-white min-h-[100vh]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#14233C] mb-6">Our Projects</h2>
        <p className="text-lg text-gray-600 mb-12">Here are some of the projects we have successfully completed. We pride ourselves on delivering high-quality results that exceed our clients' expectations.</p>
        <div ref={projectsRef} className="flex w-full overflow-x-auto relative space-x-0 gap-1 snap-x snap-mandatory scroll-p-0">
          <div className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4 mb-8 min-h-[50vh] snap-start">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full">
              <div className="w-full h-full">
                <img src={pic1} alt="project" loading='lazy'/>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4 mb-8 min-h-[50vh] snap-start">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full">
              <div className="w-full h-full">
                <img src={pic2} alt="project" loading='lazy'/>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4 mb-8 min-h-[50vh] snap-start">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full">
              <div className="w-full h-full">
                <img src={pic3} alt="project" loading='lazy'/>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4 mb-8 min-h-[50vh] snap-start">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full">
              <div className="w-full h-full">
                <img src={pic4} alt="project" loading='lazy'/>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4 mb-8 min-h-[50vh] snap-start">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full">
              <div className="w-full h-full">
                <img src={pic5} alt="project" loading='lazy'/>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4 mb-8 min-h-[50vh] snap-start">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full">
              <div className="w-full h-full">
                <img src={pic6} alt="project" loading='lazy'/>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4 mb-8 min-h-[50vh] snap-start">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full">
              <div className="w-full h-full">
                <img src={pic7} alt="project" loading='lazy'/>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4 mb-8 min-h-[50vh] snap-start">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full">
              <div className="w-full h-full">
                <img src={pic8} alt="project" loading='lazy'/>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4 mb-8 min-h-[50vh] snap-start">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full">
              <div className="w-full h-full">
                <img src={pic9} alt="project" loading='lazy'/>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Projects;
