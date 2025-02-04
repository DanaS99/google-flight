import React from 'react'
import Flight from '../assets/flights.svg';

const Banner = () => {
  return (
    <div>
      <img src={Flight} alt="Flight" />
      <h1 className='flex items-center justify-center font-sans text-5xl font-normal tracking-normal leading-[64px]'>Flights</h1>
    </div>
  )
}

export default Banner