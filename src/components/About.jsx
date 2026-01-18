import React from 'react';

function About() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 text-gray-900">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-shrink-0">
            <img
              src="https://lh3.googleusercontent.com/d/1jvLtOk2q4PzDjJYDMLF7c30PiPdWc-bQ"
              alt="Ivan Petrov"
              className="w-80 h-80 rounded-3xl object-cover shadow-2xl ring-8 ring-indigo-50"
            />
          </div>

          <div className="text-lg text-gray-700 leading-relaxed space-y-6 max-w-2xl">
            <p>
              Hi! I’m Ivan, a UX/UI designer and frontend developer. I specialize in crafting intuitive, visually engaging, and user-centered digital experiences. From wireframes to pixel - perfect interfaces, I love turning complex ideas into simple, elegant solutions.
             </p>
            <p>
              With a strong background in frontend development, I bring designs to life using modern tools and frameworks, ensuring every interaction feels smooth and purposeful. I’m passionate about usability, accessibility, and creating products people genuinely enjoy using.</p>
            <p>
              Beyond the screen, I love working with my hands - building, crafting, and experimenting with physical projects just as much as digital ones. Whether it’s designing interfaces, prototyping ideas, or creating something tangible, I thrive on creativity in all its forms.</p>
              <p>
             Always open to exciting collaborations - let’s create something meaningful together!</p>
             
          </div>
          
        </div>
        
      </div>
    </section>
  );
}

export default About;