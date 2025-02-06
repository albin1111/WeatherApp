import React, { useEffect, useState } from 'react'

const WeatherCard = ({ weatherdata, currentTime, currentDay }) => {

  return (
    <>
      {/* for 7 days */}
      < div className='flex flex-col justify-center w-full h-full px-5 py-0 rounded-3xl bg-cus-gray-900 dark:bg-cus-gray-50' >
        <div className='flex items-center justify-around p-5 text-xl font-semibold rounded-t-3xl bg-opacity-20'>
          {/* day */}
          <div className=''>{currentDay}</div>
        </div>

        <div className='flex h-full gap-3 p-5 pt-0 lg:gap-7'>
          <div className='flex flex-col items-center justify-center w-full h-full'>
            {/* icon */}
            <img className='size-24' src={weatherdata.icon} alt="weather icon" />
            {/* degrees */}
            <div className='flex flex-col items-center gap-1 font-semibold text-7xl'>
              <h1>{weatherdata.temp}°</h1>
              <p className='w-full text-sm capitalize text-start'>{weatherdata.description}</p>
            </div>
          </div>

          <div className='flex items-center justify-around w-full h-full my-auto'>
            <div className='flex h-full pt-4 responsive-gap md:w-full md:flex-row'>
              <div className='flex flex-col gap-3 md:gap-5 md:mx-auto'>
                {/* realFeel */}
                <p className='text-sm text-nowrap'>Real Feel: <span className='block text-base font-medium lg:text-md xl:text-xl'>{weatherdata.feels_like}°C</span></p>
                {/* wind */}
                <p className='text-sm text-nowrap'>Wind: <span className='block text-base font-medium lg:text-md xl:text-xl'>{weatherdata.wind} km/h</span></p>
                {/* pressure */}
                <p className='text-sm text-nowrap'>Pressure: <span className='block text-base font-medium lg:text-md xl:text-xl'>{weatherdata.pressure} mb</span></p>
              </div>
              <div className='flex flex-col gap-3 md:gap-5 md:mx-auto'>
                {/* humidity */}
                <p className='text-sm text-nowrap'>Humidity: <span className='block text-base font-medium lg:text-md xl:text-xl'>{weatherdata.humidity}%</span></p>
                {/* sunrise */}
                <p className='text-sm text-nowrap'>Sunrise: <span className='block text-base font-medium lg:text-md xl:text-xl'>{weatherdata.sunrise}</span></p>
                {/* sunset */}
                <p className='text-sm text-nowrap'>Sunset: <span className='block text-base font-medium lg:text-md xl:text-xl'>{weatherdata.sunset}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default WeatherCard




// for today
// < div className = 'flex flex-col wcard-active' >
//       <div className='flex justify-around p-5 text-xl font-semibold rounded-t-3xl bg-primary-400 bg-opacity-20'>
//         {/* day */}
//         <div className=''>{currentDay}</div>
//         {/* time */}
//         <div className=''>{currentTime}</div>
//       </div>

//       <div className='flex h-full gap-2 p-5 pt-0'>
//         <div className='flex flex-col items-center justify-center w-full h-full'>
//           {/* icon */}
//           <img className='size-24' src={weatherdata.icon} alt="weather icon" />
//           {/* degrees */}
//           <div className='flex flex-col items-center gap-1 font-semibold text-7xl'>
//             <h1>{weatherdata.temp}°</h1>
//             <p className='w-full text-sm capitalize text-start'>{weatherdata.description}</p>
//           </div>
//         </div>

//         <div className='flex items-center justify-around w-full h-full my-auto'>
//           <div className='flex flex-col gap-1 pt-4 md:w-full md:flex-row'>
//             <div className='flex flex-col gap-1 md:gap-5 md:mx-auto'>
//               {/* realFeel */}
//               <p className='text-sm'>Real Feel: <span className='text-base font-medium lg:text-md xl:text-xl'>{weatherdata.feels_like}°C</span></p>
//               {/* wind */}
//               <p className='text-sm'>Wind: <span className='text-base font-medium lg:text-md xl:text-xl'>{weatherdata.wind} km/h</span></p>
//               {/* pressure */}
//               <p className='text-sm'>Pressure: <span className='text-base font-medium lg:text-md xl:text-xl'>{weatherdata.pressure} mb</span></p>
//             </div>
//             <div className='flex flex-col gap-1 md:gap-5 md:mx-auto'>
//               {/* humidity */}
//               <p className='text-sm'>Humidity: <span className='text-base font-medium lg:text-md xl:text-xl'>{weatherdata.humidity}%</span></p>
//               {/* sunrise */}
//               <p className='text-sm'>Sunrise: <span className='text-base font-medium lg:text-md xl:text-xl'>{weatherdata.sunrise}</span></p>
//               {/* sunset */}
//               <p className='text-sm'>Sunset: <span className='text-base font-medium lg:text-md xl:text-xl'>{weatherdata.sunset}</span></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div >




// for 7 days