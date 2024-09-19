import React from 'react'

const DailyForecastCard = () => {
  return (
    <div className='flex-col flex gap-5 snap-start wcard wcard-hover'>
      <div className='flex justify-center text-xl font-semibold rounded-t-3xl bg-opacity-20'>
        {/* day */}
        <div className=''>Tues</div>
        {/* time */}
        <div className='hidden '>00:00 pm</div>
      </div>

      {/* divider */}
      <div className='h-0.5 w-[60%] bg-cus-gray-700 dark:bg-cus-gray-200 rounded-full mx-auto'></div>

      <div className='flex flex-col gap-5'>
        <div className='flex flex-col items-center justify-between gap-5'>
          {/* degrees */}
          <div className='order-last font-semibold text-5xl'>16°</div>
          {/* icon */}
          <svg className='size-14' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#fcc11a" d="M37.41 41.95c-9.71 12.48-9.54 34.65 2.87 45.64c14.09 12.47 33.92 12.34 46.39.87c14.95-13.76 14.09-36.66.87-49.63c-13.29-13.04-37.04-13.72-50.13 3.12" /><path fill="#fee269" d="M53 37.67c-3.84-1.7-8.04 2.93-9.87 6.09c-1.83 3.17-3.53 9.38.37 10.97c3.9 1.58 6.7-1.1 9.51-5.73c2.79-4.63 4.38-9.38-.01-11.33" /><path fill="#ffa722" d="M63 20.27c-.93 1.74-.62 3.08 1.23 3.52s13.36 2.31 14.33 2.37c1.41.09 1.93-.97 1.76-2.2c-.18-1.23-2.99-18.46-3.25-20.04S75.14.76 73.55 2.87S63.7 18.96 63 20.27m29.8 11.96c-1.81.56-1.76 1.67-.79 3.08s7.65 11.6 8.26 12.31c.62.7 1.67.88 2.55-.18c.88-1.05 11.86-16.45 12.66-17.41c1.32-1.58.53-3.25-1.49-2.73c-1.54.41-20.05 4.58-21.19 4.93m13.8 29.63c-1.3-.74-2.99-.53-3.43 1.14s-2.37 13.8-2.55 14.86s.62 2.11 1.93 1.85s19.45-2.95 20.66-3.25c2.11-.53 2.81-2.64.62-4.22c-1.42-1.03-16-9.68-17.23-10.38M92.09 90.6c1.4-.75 2.64-.18 2.99 1.41c.35 1.58 4.22 17.76 4.84 20.75c.31 1.5-1.41 2.73-2.81 1.85c-1.41-.88-16.69-11.53-17.67-12.4c-1.41-1.23-.43-2.51.26-3.16c1.4-1.33 11.07-7.74 12.39-8.45m-42.55 8.88c-1.77-.17-2.29 1.41-2.02 2.81c.26 1.41 2.9 19.24 3.08 20.57c.26 1.93 2.29 2.73 3.6.79s10.35-16.4 11.08-17.76c1.32-2.46.35-2.99-.97-3.6c-1.31-.61-12.92-2.63-14.77-2.81M24.23 79c1.23-2.02 2.81-1.49 3.96.44c.78 1.32 7.38 10.2 8 11.16c.62.97.88 2.81-1.05 3.25c-1.95.45-17.68 4.58-20.14 5.02s-3.87-1.49-2.29-3.6c.92-1.24 10.82-15.12 11.52-16.27m-3.34-15.3c2.25 1 3.31.64 3.78-.97c.62-2.11 2.46-11.78 2.55-13.98c.06-1.43-.53-2.81-2.73-2.46S6.47 48.85 4.45 49.55c-2.35.82-2.18 3.4-.62 4.22c1.85.97 15.47 9.23 17.06 9.93m27.34-36.92c1.27-1.01.88-2.46-.26-3.25s-15.26-11-17.05-12.4c-1.58-1.23-3.52-.79-2.99 2.02c.38 2.02 4.88 19.7 5.19 20.92c.35 1.41 1.41 2.11 2.64 1.23c1.21-.87 11.15-7.46 12.47-8.52" /></svg>
        </div>

        <div className='hidden'>
          <div className='flex flex-col flex-wrap w-1/2'>
            {/* realFeel */}
            <div>
              <p>Real Feel: <span className='font-medium'>Nigga</span></p>
            </div>
            {/* wind */}
            <div>
              <p>Wind: <span className='font-medium'>Nigga</span></p>
            </div>
            {/* pressure */}
            <div>
              <p>Pressure: <span className='font-medium'>Nigga</span></p>
            </div>
          </div>

          <div className='flex flex-col flex-wrap w-1/2'>
            {/* humidity */}
            <div>
              <p>Humidity: <span className='font-medium'>Nigga</span></p>
            </div>
            {/* sunrise */}
            <div>
              <p>Sunrise: <span className='font-medium'>Nigga</span></p>
            </div>
            {/* sunset */}
            <div>
              <p>Sunset: <span className='font-medium'>Nigga</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DailyForecastCard
