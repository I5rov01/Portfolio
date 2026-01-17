import React from 'react';

function Contact() {
  // Replace this with your real LinkedIn profile URL
  const linkedinUrl = 'https://www.linkedin.com/in/ivan-petrov-8b0831256/';

  // Your email address – replace with your real one
  const emailAddress = '5rov.work@gmail.com';

  // mailto link that opens the user's email app with pre-filled subject & body
  const mailtoLink = `mailto:${emailAddress}?subject=Let's%20Work%20Together&body=Hi%20Ivan,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss...`;

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
          Let's Work Together
        </h2>

        <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Have a project in mind? I'm currently open to new opportunities. Reach out!
        </p>

        {/* Big Email Button */}
        <a
          href={mailtoLink}
          className="inline-block bg-indigo-600 text-white px-12 py-6 rounded-2xl text-2xl md:text-3xl font-semibold hover:bg-indigo-700 transition shadow-2xl mb-12"
        >
          Email Me →
        </a>

        {/* LinkedIn & other socials */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-lg">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-indigo-600 hover:text-indigo-800 transition font-medium"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            Connect on LinkedIn
          </a>

          {/* Optional: add GitHub or other links */}
          {/* <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition font-medium">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;