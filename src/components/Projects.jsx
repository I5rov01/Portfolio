import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Graduation internship (DAF)",
    shortDesc: "User Interface for Autonomous Trucks",
    fullDesc: "For my graduation project, I collaborated with DAF to design a new user interface for autonomous trucks. Due to the confidential nature of the assignment, I cannot share specific visuals or details. My work included research on autonomous driving, interviews with professional drivers, and user testing to validate the design. The final concept will serve as inspiration for future development and design directions at DAF.",
    mainImage: "https://lh3.googleusercontent.com/d/12GdBk8jUMQMMWzqwzxgaGwBURMUncMkj", 
    extraImages: [],
    technologies: ["Figma", "Canva", "Moodboards", "User Testing", "Prototyping"],
    year: "2025",
  },

  
  {
    id: 2,
    title: "Bierens Incasso Advocaten",
    shortDesc: "Referral System",
    fullDesc: "A gamified tier-based referral system. The referral system consists of 2 sides – User side and Admin side. The User side is intended for the clients of Bierens. The user firstly has to log in with their credentials (provided by Bierens). Then, they can see what rewards they can get in their tier within the current season*. The more the user referrs, the better the rewards will be. Current season – Within a period of 1 year (12 months), there are 4 seasons in the referral program – Autumn, Winter, Spring and Summer. Every season the rewards change. The Admin side is for the people from Bierens who are maintaining the referral program. From there they can change the rewards for the different seasons, see how many users are currently part of the referral system, see important metrics which are indicators for the performance of the referral program etc.",
    mainImage: "https://lh3.googleusercontent.com/d/1Xoa1qG0qx5C17fRoX64CCdOqeO4kkKTU",
    extraImages: ["https://lh3.googleusercontent.com/d/1LO4xc3G-1t5BpGrkdLburVrOKMVt77qS","https://lh3.googleusercontent.com/d/1bqDCrgGYbCAC0KsjqQ16vx_tc4l0CkGS","https://lh3.googleusercontent.com/d/1Kj0cjZQc-DX71zPnzExaofI3t01tRQ3q","https://lh3.googleusercontent.com/d/1NGa5k3rj-p7xeWnFymb69rtf3ebSfVcu","https://lh3.googleusercontent.com/d/1Cb4UxBAOfnJh47a4TInz5wGbpwGlE9NI","https://lh3.googleusercontent.com/d/1IouBl2s5yM7w0d0lyh_k9YdT-RusDcep","https://lh3.googleusercontent.com/d/1Pukxt6t2O_tHXbNvvFCMZGxulGgFMTbZ","https://lh3.googleusercontent.com/d/1ALZZyMZP_mlZw86ZDbxtmQHPTdldL3lk","https://lh3.googleusercontent.com/d/1wGfNbUJyKCFcRFqeaKZyq3T56wMAFi-Y","https://lh3.googleusercontent.com/d/16SK3kI5L-nI9Args8QwxmPWZsM4rT9DI","https://lh3.googleusercontent.com/d/1-4sWRQ9DxAg5s96WZwdAekYWrgHIuC0D",],
    technologies: ["HTML", "CSS", "React", "Figma", "Usability Testing"],
    year: "2024",
  },

  
  {
    id: 3,
    title: "Research internship (Simptel)",
    shortDesc: "Omnichannel Platform",
    fullDesc: "During my internship at Simptel, I worked on developing an omnichannel platform. Due to confidentiality, I cannot share detailed visuals or specifics. My role involved conducting thorough research, including user interviews and usability testing, to inform and validate the design. This work contributed to shaping an effective and seamless user experience across multiple channels.",
    mainImage: "https://lh3.googleusercontent.com/d/1In_oFF-MN_Hllqpcj1HRWE9tWJzM62s-",
    extraImages: [],
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "Figma", "Usability Testing"],
    year: "2025",
  },
  {
    id: 4,
    title: "Live Wall",
    shortDesc: "Pet Suggestor",
    fullDesc: "A website that engages users with a series of targeted questions. Based on their responses, the site will recommend the most suitable pet for each individual. These questions will focus on understanding the user’s daily routine and habits, as different animals have varying care requirements. Additionally, the website will provide a map of nearby pet shops, enabling users to visit and adopt the recommended pet once they’ve made their choice.",
    mainImage: "https://lh3.googleusercontent.com/d/1ZCRJFFulvUHpUMcYIWbYKKVxmILBNbV5",
    extraImages: ["https://lh3.googleusercontent.com/d/1Yh6q-o23BX0g2Sfwpo8PQln4cTtFPeZi", "https://lh3.googleusercontent.com/d/1DTOEar8LP0Z12QzLBlEeWteyQHcG1v2-", "https://lh3.googleusercontent.com/d/1MRfhYd7qlzD7_ILV64jJiKCeb_O0CJ4w", "https://lh3.googleusercontent.com/d/1gzEYayqqrWULqNcgCFeyqI8HgP9sZp_H", "https://lh3.googleusercontent.com/d/1zlMo40WmfbaZ6O3xuNkr41XHCHo7r32Z", ],
    technologies: ["HTML", "CSS", "JavaScript", "DOT Framework", "Double Diamond"],
    year: "2023",
  },
  {
    id: 5,
    title: "Maaike Girardin",
    shortDesc: "Singer portfolio website",
    fullDesc: "A one-pager website that briefly explains who Maaike Girardin is.",
    mainImage: "https://lh3.googleusercontent.com/d/1U9bw4Oble29-mevJkJC_0nRW4sEVsIiA",
    extraImages: ["https://lh3.googleusercontent.com/d/1Hn30ofCz5p0TRCGy3Dj-sd04WqywC1zF",],
    technologies: ["HTML", "CSS", "JavaScript", "Waterfall"],
    year: "2022",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 text-gray-900">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group cursor-pointer bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/1200x800?text=Image+Not+Found";
                    e.target.alt = "Image failed to load";
                  }}
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                  {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-auto flex justify-end">
                  <span className="text-indigo-600 font-semibold group-hover:underline transition">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal – same as before */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold z-10"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                {selectedProject.title}
              </h2>

              <img
                src={selectedProject.mainImage}
                alt={selectedProject.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8 shadow-md"
                onError={(e) => e.target.src = "https://via.placeholder.com/1200x800?text=Image+Not+Found"}
              />

              {selectedProject.extraImages?.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                  {selectedProject.extraImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${selectedProject.title} screenshot ${index + 1}`}
                      className="w-full h-40 object-cover rounded-xl shadow-sm hover:scale-105 transition"
                      onError={(e) => e.target.src = "https://via.placeholder.com/400x300?text=Image+" + (index + 1)}
                    />
                  ))}
                </div>
              )}

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>{selectedProject.fullDesc}</p>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-500 text-sm">
                  Year: {selectedProject.year}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;