import React from 'react';

const skills = [
  {
    category: "Industry Knowledge",
    items: ["User Experience (UX)", "User Interface Design (UI)", "Media Design", "Information & Communications Technology (ICT)", "Progressive Web Applications (PWAs)", "Front-End Development"],
  },
  {
    category: "Tools & Technologies",
    items: ["Figma", "Adobe Illustrator", "HTML", "CSS", "Java Script", "React", "Tailwind CSS"],
  },
  {
    category: "Research Skills",
    items: ["User Research", "Usability Testing", "Wireframing", "User Interface Prototyping", "A/B Testing"],
  },
  {
    category: "Interpersonal Skills",
    items: ["Problem Solving", "Collaboration", "Communication", "Adaptability", "Time Management"],
  },
];

function Skills() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 text-gray-900">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-8 text-indigo-600">
                {group.category}
              </h3>
              <ul className="space-y-4 text-gray-700">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-center text-lg">
                    <span className="text-indigo-500 mr-3 text-xl">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;