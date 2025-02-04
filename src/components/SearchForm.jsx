import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchForm = () => {
  const [dropdown, setDropdown] = useState(null);
  const [fromLocation, setFromLocation] = useState('Beirut');
  const [toLocation, setToLocation] = useState('');
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [showDepartureCalendar, setShowDepartureCalendar] = useState(false);
  const [showReturnCalendar, setShowReturnCalendar] = useState(false);
  const toggleDropdown = (type) => {
    setDropdown(dropdown === type ? null : type);
  };

  return (
    <div className='relative dark:bg-gray-700  bg-white shadow-lg px-7 lg:px-52 rounded-lg  space-y-4'>
      <div className='flex flex-wrap items-center space-x-4'>
        <div className='relative'>
          <div
            className='flex items-center space-x-2 cursor-pointer'
            onClick={() => toggleDropdown('trip')}
          >
            <i className='fas fa-exchange-alt text-gray-500'></i>
            <span>Round trip</span>
            <i className='fas fa-chevron-down text-gray-500'></i>
          </div>
          {dropdown === 'trip' && (
            <div className='absolute top-full left-0 dark:bg-gray-700 bg-white shadow-md rounded-lg p-4 mt-2 z-10 w-48 transition-transform duration-300 ease-in-out transform'>
              <ul className='space-y-2'>
                <li className='cursor-pointer hover:bg-gray-100 p-2 rounded'>
                  Round trip
                </li>
                <li className='cursor-pointer hover:bg-gray-100 p-2 rounded'>
                  One way
                </li>
                <li className='cursor-pointer hover:bg-gray-100 p-2 rounded'>
                  Multi-city
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className='relative '>
          <div
            className='flex items-center space-x-2 cursor-pointer'
            onClick={() => toggleDropdown('passengers')}
          >
            <i className='fas fa-user text-gray-500'></i>
            <span>1</span>
            <i className='fas fa-chevron-down text-gray-500'></i>
          </div>
          {dropdown === 'passengers' && (
            <div className='absolute top-full left-0 dark:bg-gray-700 bg-white shadow-md rounded-lg p-4 mt-2 z-10 w-64 transition-transform duration-300 ease-in-out transform'>
              <div className='flex justify-between items-center py-2'>
                <span>Adults</span>
                <div className='flex items-center space-x-2'>
                  <button className='bg-gray-200 text-gray-600 px-2 rounded'>
                    -
                  </button>
                  <span>1</span>
                  <button className='bg-gray-200 text-gray-600 px-2 rounded'>
                    +
                  </button>
                </div>
              </div>
              <div className='flex justify-between items-center py-2'>
                <span>
                  Children{' '}
                  <span className='text-gray-400 text-sm'>(Aged 2-11)</span>
                </span>
                <div className='flex items-center space-x-2'>
                  <button className='bg-gray-200 text-gray-600 px-2 rounded'>
                    -
                  </button>
                  <span>0</span>
                  <button className='bg-gray-200 text-gray-600 px-2 rounded'>
                    +
                  </button>
                </div>
              </div>
              <div className='flex justify-between items-center py-2'>
                <span>
                  Infants{' '}
                  <span className='text-gray-400 text-sm'>(In seat)</span>
                </span>
                <div className='flex items-center space-x-2'>
                  <button className='bg-gray-200 text-gray-600 px-2 rounded'>
                    -
                  </button>
                  <span>0</span>
                  <button className='bg-gray-200 text-gray-600 px-2 rounded'>
                    +
                  </button>
                </div>
              </div>
              <div className='flex justify-between items-center py-2'>
                <span>
                  Infants{' '}
                  <span className='text-gray-400 text-sm'>(On lap)</span>
                </span>
                <div className='flex items-center space-x-2'>
                  <button className='bg-gray-200 text-gray-600 px-2 rounded'>
                    -
                  </button>
                  <span>0</span>
                  <button className='bg-gray-200 text-gray-600 px-2 rounded'>
                    +
                  </button>
                </div>
              </div>
              <div className='flex justify-between items-center mt-4'>
                <button className='text-blue-600'>Cancel</button>
                <button className='text-blue-600 font-bold'>Done</button>
              </div>
            </div>
          )}
        </div>
        <div className='relative'>
          <div
            className='flex items-center space-x-2 cursor-pointer '
            onClick={() => toggleDropdown('class')}
          >
            <span>Economy</span>
            <i className='fas fa-chevron-down text-gray-500'></i>
          </div>
          {dropdown === 'class' && (
            <div className='absolute top-full dark:bg-gray-700 left-0 bg-white shadow-md rounded-lg p-4 mt-2 z-10 w-48 transition-transform duration-300 ease-in-out transform'>
              <ul className='space-y-2'>
                <li className='cursor-pointer hover:bg-gray-100 p-2 rounded'>
                  Economy
                </li>
                <li className='cursor-pointer hover:bg-gray-100 p-2 rounded'>
                  Business
                </li>
                <li className='cursor-pointer hover:bg-gray-100 p-2 rounded'>
                  First Class
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='relative'>
          <div className='flex items-center border rounded-l-lg p-2 space-x-2 flex-grow'>
            <i className='fas fa-location-dot text-gray-500'></i>
            <input
              type='text'
              placeholder='Beirut'
              className='bg-transparent focus:outline-none w-full cursor-pointer'
              value={fromLocation}
              onClick={() => toggleDropdown('from')}
              onChange={(e) => setFromLocation(e.target.value)}
            />
          </div>
          {dropdown === 'from' && (
            <div className='absolute top-full left-0 dark:bg-gray-700 bg-white shadow-md rounded-lg p-4 mt-2 z-10 w-72 transition-transform duration-300 ease-in-out transform'>
              <div className='font-bold mb-2'>Beirut</div>
              <div className='text-gray-500 mb-2'>Capital of Lebanon</div>
              <div className='flex items-center space-x-2'>
                <i className='fas fa-plane text-gray-500'></i>
                <span>Beirut-Rafic Hariri International Airport (BEY)</span>
              </div>
              <div className='text-sm text-gray-400'>8 km to destination</div>
            </div>
          )}
        </div>
        <div className='relative'>
          <div className='flex items-center border p-2 space-x-2 flex-grow'>
            <i className='fas fa-location-dot text-gray-500'></i>
            <input
              type='text'
              placeholder='Where to?'
              className='bg-transparent focus:outline-none cursor-pointer'
              value={toLocation}
              onClick={() => toggleDropdown('to')}
              onChange={(e) => setToLocation(e.target.value)}
            />
          </div>
          {dropdown === 'to' && (
            <div className='absolute top-full dark:bg-gray-700 left-0 bg-white shadow-md rounded-lg p-4 mt-2 z-10 w-72 transition-transform duration-300 ease-in-out transform'>
              <ul className='space-y-2'>
                <li className='flex items-center space-x-2'>
                  <i className='fas fa-search text-gray-500'></i>
                  <div>
                    <div className='font-bold'>Anywhere</div>
                    <div className='text-sm text-gray-400'>
                      Search for trips to anywhere in the world
                    </div>
                  </div>
                </li>
                <li className='flex items-center space-x-2'>
                  <i className='fas fa-clock text-gray-500'></i>
                  <div>
                    <div className='font-bold'>Ankara</div>
                    <div className='text-sm text-gray-400'>Recent search</div>
                  </div>
                </li>
                <li className='flex items-center space-x-2'>
                  <i className='fas fa-globe text-gray-500'></i>
                  <div>
                    <div className='font-bold'>Europe</div>
                    <div className='text-sm text-gray-400'>Continent</div>
                  </div>
                </li>
                <li className='flex items-center space-x-2'>
                  <i className='fas fa-location-dot text-gray-500'></i>
                  <div>
                    <div className='font-bold'>Paris, France</div>
                    <div className='text-sm text-gray-400'>
                      Capital of France
                    </div>
                  </div>
                </li>
                <li className='flex items-center space-x-2'>
                  <i className='fas fa-location-dot text-gray-500'></i>
                  <div>
                    <div className='font-bold'>London, United Kingdom</div>
                    <div className='text-sm text-gray-400'>
                      Capital of England
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className='flex items-center border rounded-r-lg p-2 space-x-2 flex-grow'>
          <i className='fas fa-calendar-alt text-gray-500'></i>
          <input
            type='text'
            placeholder='Departure'
            className='bg-transparent focus:outline-none w-full'
            
          />
          
          <span className='text-gray-500'>|</span>
          <input
            type='text'
            placeholder='Return'
            className='bg-transparent focus:outline-none w-full'
           
          />
        </div>
      </div>
      <div class='flex justify-center mt-4'>
         <button class='bg-blue-600 text-white rounded-full px-6 py-2 flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2 -bottom-8'>
           <i class='fas fa-search'></i>
           <span>Explore</span>
         </button>
       </div>
    </div>
  );
};

export default SearchForm;
