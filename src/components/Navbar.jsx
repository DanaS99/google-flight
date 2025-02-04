import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import google_logo from '../assets/google.png';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInitial] = useState('U');
  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className='bg-white border-b
     border-white fixed top-0 w-full z-10'>
      {/* Horizontal Navbar */}
      <nav className='flex items-center justify-between p-4'>
        <div className='flex items-center space-x-4'>
          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            
            className='text-gray-600 text-2xl dark:text-white transition-transform duration-500 ease-in-out'
          >
            <i className={`fas fa-bars `}></i>
          </button>
          {/* Logo */}
          <img
            alt='Google logo'
            className='h-8'
            height='40'
            src={google_logo}
            width='80'
          />
          {/* Horizontal Menu (Always Visible) */}
          <div className='hidden lg:flex space-x-2'>
            {['Travel', 'Explore', 'Flights', 'Hotels', 'Vacation rentals'].map(
              (item, index) => (
                <a
                  key={index}
                  href='#'
                  className='flex items-center space-x-1 px-4 py-2 border border-gray-400 rounded-full hover:bg-blue-50'
                  onClick={() => {
                    if (item === 'Flights') {
                      navigate('/travel/flights'); // Navigate to Flights page
                    }
                    setSelectedItem(item);
                  }}
                >
                  <i
                    className={`fas ${
                      index === 0
                        ? 'fa-suitcase'
                        : index === 1
                        ? 'fa-search'
                        : index === 2
                        ? 'fa-plane'
                        : index === 3
                        ? 'fa-bed'
                        : 'fa-home'
                    } text-blue-600 dark:text-blue-200`}
                  ></i>
                  <span className='text-black dark:text-white'>{item}</span>
                </a>
              )
            )}
          </div>
        </div>
        {/* Right Side Buttons */}
        <div className='flex items-center space-x-4'>
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className='text-gray-600 dark:text-white text-2xl'
          >
            {darkMode ? (
              <i className='fas fa-sun text-white'></i>
            ) : (
              <i className='fas fa-moon'></i>
            )}
          </button>
          {/* Login/Signup */}
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className={`text-gray-600 transition-all duration-200 ${
              isLoggedIn ? 'text-xl' : 'text-2xl'
            }`}
          >
            <div
              className={`rounded-full flex items-center justify-center text-white ${
                isLoggedIn
                  ? 'w-11 h-11 bg-gray-600' // Logged-in state
                  : 'w-24 h-11 bg-gray-600 text-sm' // Default state
              } transition-all duration-200`}
            >
              {isLoggedIn ? (
                <span className='text-sm font-medium'>{userInitial}</span>
              ) : (
                'Signup/Login'
              )}
            </div>
          </button>
        </div>
      </nav>

      {/* Vertical Navbar (Visible When Hamburger is Clicked) */}
      <div
        className={`fixed top-16 left-0 w-72 bg-white dark:bg-gray-900 h-screen z-20 shadow-lg p-4 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full' 
        }` } onClick={() => setSelectedItem(item.label)}
      >
        <div className='flex flex-col space-y-4'>
          {/* Existing Menu Items */}
          {['Travel', 'Explore', 'Flights', 'Hotels', 'Vacation rentals'].map(
            (item, index) => (
              <a
                key={index}
                href='#'
                className='flex items-center space-x-1 px-4 py-1 hover:bg-gray-200 hover:rounded-full dark:hover:bg-gray-700 '
                onClick={() => {
                  if (item === 'Flights') {
                    navigate('/travel/flights'); // Navigate to Flights page
                  }
                  setSelectedItem(item);
                }}
              >
                <i
                  className={`fas ${
                    index === 0
                      ? 'fa-suitcase'
                      : index === 1
                      ? 'fa-search'
                      : index === 2
                      ? 'fa-plane'
                      : index === 3
                      ? 'fa-bed'
                      : 'fa-home'
                  } text-gray-600 dark:text-blue-200`}
                ></i>
                <span className='text-black dark:text-white '>{item}</span>
              </a>
            )
          )}

          {/* Divider Line */}
          <hr className='border-gray-300 dark:border-gray-700 my-1' />

          {/* New Items */}
          {[
            { label: 'Tracked flight prices', icon: 'fa-chart-line' },
            { label: 'Change language', icon: 'fa-globe' },
            { label: 'Change currency', icon: 'fa-dollar-sign' },
            { label: 'Change location', icon: 'fa-map-marker-alt' },
          ].map((item, index) => (
            <a
              key={index}
              href='#'
              className='flex items-center space-x-1 px-4 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700'
            >
              <i
                className={`fas ${item.icon} text-gray-600 dark:text-blue-200`}
              ></i>
              <span className='text-black dark:text-white'>{item.label}</span>
            </a>
          ))}

          {/* Bottom Divider */}
          <hr className='border-gray-300 dark:border-gray-700 my-6' />

          {/* Bottom Section */}
          {[
            { label: 'Flights settings', icon: 'fa-cog' },
            { label: 'Feedback', icon: 'fa-comment-dots' },
            { label: 'Help', icon: 'fa-question-circle' },
          ].map((item, index) => (
            <a
              key={index}
              href='#'
              className='flex items-center space-x-1 px-4  rounded-full hover:bg-blue-50 dark:hover:bg-gray-700'
            >
              <i
                className={`fas ${item.icon} text-gray-600 dark:text-blue-200`}
              ></i>
              <span className='text-black dark:text-white'>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
