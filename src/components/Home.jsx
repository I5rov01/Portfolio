import React from 'react';

function Home() {
  return (
    <section
      className="h-screen w-full relative flex items-end justify-center bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url('https://lh3.googleusercontent.com/d/1ejUVz0OXcJwDOTp-HZI9KCKWjvNvDzA-')`,
        backgroundPosition: 'center 45%', 
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content – balanced bottom padding */}
      <div className="relative z-10 text-center text-white px-6 pb-16 sm:pb-20 md:pb-24 lg:pb-32 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Hi, I'm Ivan
        </h1>
        <p className="text-xl md:text-3xl mb-10 opacity-90 font-light">
          UX/UI Designer & Front-end Developer<br className="hidden sm:block" />
          Crafting clean, performant web experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <a
            href="/projects"
            className="bg-white text-indigo-600 px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-2xl"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="border-2 border-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-600 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;