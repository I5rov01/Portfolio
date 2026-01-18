import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function ScrollLock() {
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/') {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [location.pathname]);

  return null;
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  // Replace with your real CV link (PDF or Google Drive direct link)
  const cvUrl = 'https://lh3.googleusercontent.com/d/18nyR_SsqqFUoArkKndIkO2P9N_UJAJU3'; 

  return (
    <>
      {/* Main navbar bar */}
      <nav className="bg-white/95 backdrop-blur-lg shadow-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl md:text-3xl font-extrabold text-gray-900 hover:text-indigo-600 transition-colors duration-300"
              onClick={closeMenu}
            >
              Ivan Petrov
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-lg font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-indigo-600 font-semibold'
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 bottom-[-6px] h-0.5 bg-indigo-600 transition-all duration-300 ${
                      location.pathname === item.path ? 'w-full' : 'w-0 hover:w-full'
                    }`}
                  />
                </Link>
              ))}

              {/* CV Button – styled like your other buttons */}
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition shadow-md"
              >
                My CV
              </a>
            </div>

            {/* Hamburger Button */}
            <button
              className="md:hidden text-gray-900 focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="w-9 h-9 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 8h16M4 16h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-4/5 max-w-sm bg-white shadow-2xl transform transition-all duration-400 ease-in-out md:hidden border-l border-gray-200 ${
          isMenuOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
        }`}
      >
        <div className="flex flex-col h-full p-8 bg-white">
          {/* Close button */}
          <button
            className="self-end text-gray-900 hover:text-indigo-600 mb-12 transition-colors duration-200"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Links */}
          <div className="flex flex-col space-y-10 text-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-indigo-600 scale-105'
                    : 'text-gray-900 hover:text-indigo-600 hover:scale-105'
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}

            {/* CV in mobile menu */}
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl md:text-3xl font-bold text-indigo-600 hover:text-indigo-800 transition-all duration-300"
              onClick={closeMenu}
            >
              My CV
            </a>
          </div>

          {/* Footer */}
          <div className="mt-auto text-center text-gray-600 text-sm pt-12">
            © {new Date().getFullYear()} Ivan Petrov
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden transition-opacity duration-400"
          onClick={closeMenu}
        />
      )}

      <ScrollLock />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans antialiased">
        <Navbar />

        <main className="pt-20 md:pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;