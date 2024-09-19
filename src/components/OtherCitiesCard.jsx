import React, { useEffect, useState } from 'react'
import { fetchWeatherData } from '../utils/weatherUtil'

const OtherCitiesCard = ({ city }) => {
  const [weatherdata, setWeatherdata] = useState("")

  const search = async (cityName) => {
    const data = await fetchWeatherData(cityName);
    // console.log(data);

    setWeatherdata(data);
  }

  useEffect(() => {
    search(city)
  }, [])

  return (
    <button className='flex snap-start justify-between w-full p-5 transition-all ease-in h-fit rounded-3xl custom-hover-shadowOnly custom-hover-noPointer responsive-bg focused'>
      <div className='flex flex-col items-start w-full my-auto'>
        {/* country */}
        <p className='text-sm responsive-subtext-color'>{weatherdata.country}</p>
        {/* city */}
        <h2 className='text-2xl font-medium break-all truncate line-clamp-2 text-wrap text-start lg:text-xl'>{weatherdata.location}</h2>
        {/* weather */}
        <h3 className='mt-5 text-sm capitalize'>{weatherdata.description}</h3>
      </div>

      <div className='flex flex-col items-center justify-center h-full w-fit'>
        <div className='h-full'>
          {/* icon */}
          <img className='h-full min-h-14' src={weatherdata.icon} alt="weather icon" />
        </div>
        {/* degrees */}
        <h2 className='flex text-3xl font-medium h-fit'>{weatherdata.temp}°</h2>
      </div>
    </button>
  )
}

export default OtherCitiesCard
