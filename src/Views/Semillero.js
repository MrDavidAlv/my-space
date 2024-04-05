import React from 'react'
import semillero from './../Assets/img/background/semillero.jpg'

const Semillero = () => {
  return (
    <div className='bg-hero-semillero hero bg-center bg-cover m-0 justify-center items-center w-full h-screen bg-gray-800 p-2'>
      <div className="md:flex w-full justify-center items-center">
        <div className="flex flex-col justify-center items-center w-12/12 md:w-4/12 lg:w-3/12 border rounded-lg p-4">
          
          <div className='mt-2'>
            <p className='text-center font-bold text-white text-2xl md:text-3xl lg:text-5xl'>
              SEMILLERO ROBÓTICA
            </p>
          </div>
          <div className='bg-white w-10/12 h-[2.3px] my-1'></div>
          <div className='font-bold text-white'>
            <p className='text-center font-bold text-white text-2xl md:text-3xl lg:text-5xl'>
              UTADEO
            </p>

          </div>
        </div>

        <div className="w-12/12 md:w-7/12 lg:w-8/12 border rounded-lg p-4 md:ml-8 mt-6 md:mt-0">
          <div id="title" className='border rounded-lg'>
            <p className='font-bold text-white text-3xl md:text-5xl lg:text-8xl'>Hacking the Life</p>
          </div>

          <div id="title" className='border rounded-lg bg-gray-200'>
            <div className='blur-none'>
              <p className='font-bold text-black '>Hacking the Life</p>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Semillero