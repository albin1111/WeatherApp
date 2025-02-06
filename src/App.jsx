import { useEffect, useRef, useState } from 'react'
import WeatherCard from './components/WeatherCard'
import Chart from "react-apexcharts";
import { convertUnixToTime, getDayName, updateTime } from './utils/timeUtil';
import { icons, weatherIcons } from './utils/icons';
import OtherCitiesCard from './components/OtherCitiesCard';
import { fetchForecastData, fetchWeatherData } from './utils/weatherUtil';
import DailyForecastCard from './components/DailyForecastCard';
import TommorowForecastCard from './components/TommorowForecastCard';

function App() {

  const inputRef = useRef(null)
  const [isProfileActive, setIsProfileActive] = useState(false)
  const [isLightMode, setIsLightMode] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [activeWeatherCard, setActiveWeatherCard] = useState(null)
  const [activeTab, setActiveTab] = useState('forecast')
  const [activeDay, setActiveDay] = useState('today')
  const [currentTime, setCurrentTime] = useState('');
  const [currentDay, setCurrentDay] = useState('');

  function handleThemeToggle() {
    if (isLightMode) setIsLightMode(false)
    else setIsLightMode(true)

    document.documentElement.classList.toggle("dark")
  }

  const [weatherdata, setWeatherdata] = useState("")

  const search = async (city) => {
    const data = await fetchWeatherData(city);
    // console.log(data);

    setWeatherdata(data);
  }

  useEffect(() => {
    setCurrentDay(getDayName());
    updateTime(setCurrentTime);
    // console.log(currentDay, " ", currentTime);

    search("Manila")
    fetchForecastData("Manila")
  }, [])

  // console.log(weatherdata);

  const chartConfig = {
    type: "bar",
    height: "300",
    series: [
      {
        name: "Celcius",
        data: ['29', '28', '29', '27', '26', '27',],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#5CA7D4"],
      plotOptions: {
        bar: {
          columnWidth: "20%",
          borderRadius: 4,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#5D5D5D",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "10AM",
          "11AM",
          "12AM",
          "1PM",
          "2PM",
          "3PM",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#4F4F4F",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#454545",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  return (
    <>
      <div className='absolute top-0 left-0 p-2 hidden bg-red-300 z-[100]'>
        <p className='md:hidden'>sm</p>
        <p className='lg:hidden'>md</p>
        <p className='xl:hidden'>lg</p>
        <p className='2xl:hidden'>xl</p>
        <p className=''>2xl</p>
      </div>
      <div className='relative w-full h-screen overflow-auto transition-colors ease-in-out scroll-smooth bg-cus-gray-950 text-cus-gray-50 dark:bg-cus-gray-100 dark:text-cus-gray-800'>
        <div className='container flex flex-col mx-auto lg:h-full lg:overflow-auto scroll-smooth'>

          <nav className='sticky top-0 z-[11] flex items-center w-full transition-colors ease-in-out bg-opacity-90 dark:bg-opacity-70 bg-cus-gray-950 dark:bg-cus-gray-100 backdrop-blur-md responsive-gap responsive-p'>

            {/* w-full */}
            <div className='flex w-full px-1 responsive-gap'>
              {/* menu */}
              <button className='roundBtn custom-hover focused2'>
                <svg className='icon-size icon-inactive' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32z" /></svg>
              </button>

              {/* notif */}
              <button className='relative hidden md:flex roundBtn custom-hover focused2'>
                <svg className='relative icon-size icon-inactive' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7v3.528a1 1 0 0 1-.105.447l-1.717 3.433A1.1 1.1 0 0 0 4.162 18h15.676a1.1 1.1 0 0 0 .984-1.592l-1.716-3.433a1 1 0 0 1-.106-.447V9a7 7 0 0 0-7-7m0 19a3 3 0 0 1-2.83-2h5.66A3 3 0 0 1 12 21" /></g></svg>
                <div className='absolute inset-x-0 w-1/2 mx-auto top-[20%]'>
                  <span className='bg-red-600 rounded-full flex ml-auto size-1.5'></span>
                </div>
              </button>

              {/* location */}
              <div className={`p-2 flex gap-2 items-center mr-auto xl:mr-0 text-cus-gray-50 dark:text-cus-gray-800 ${openSearch ? 'hidden xl:flex' : 'flex'}`}>
                <svg className='icon-size icon-inactive' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" /></svg>
                <h3 className='text-nowrap truncate max-w-[25vw]'>
                  <span className='font-medium'>{weatherdata.location}, </span>
                  <span className='responsive-subtext-color'>{weatherdata.country}</span>
                </h3>
              </div>

              {/* search */}
              <button className={`lg:hidden custom-hover p-3 rounded-full focused ${!openSearch ? 'flex' : 'hidden'}`} onClick={() => {
                if (openSearch) setOpenSearch(false)
                else setOpenSearch(true)
              }}>
                <svg className='icon-size icon-inactive' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0" /></svg>
              </button>
              <div className={`${openSearch ? 'grow' : 'hidden lg:inline grow'}`}>
                <div
                  className='bg-cus-gray-900 dark:bg-cus-gray-50 h-full xl:max-w-[500px] flex items-center rounded-full px-5 py-2 responsive-gap focused group ml-auto custom-hover-noPointer'
                // action={() => { search(inputRef.current.value) }}
                >
                  <button onClick={() => {
                    search(inputRef.current.value)
                    inputRef.current.value = ""
                  }}>
                    <svg className='icon-size icon-inactive' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0" /></svg>
                  </button>

                  <input
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        search(inputRef.current.value)
                        inputRef.current.value = ""
                      }
                    }}
                    className='w-full inputStyle placeholder:text-cus-gray-400'
                    ref={inputRef} type="text" placeholder='Search City...' />

                  {/* <svg className={`h-5 ${isSearchFocused ? 'hidden' : 'flex'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z" /></svg> */}
                  <button onClick={() => { inputRef.current.value = "" }} className='hidden rounded-full group-focus-within:flex focused2'>
                    <svg className='icon-size icon-inactive' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z" /></svg>
                  </button>
                </div>
              </div>
              {openSearch && (
                <button className='p-3 rounded-full custom-hover roundBtn focused xl:hidden' onClick={() => {
                  if (openSearch) setOpenSearch(false)
                  else setOpenSearch(true)
                }}>
                  <svg className='icon-size icon-inactive' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z" /></svg>
                </button>
              )}
            </div>

            {/* w-40% */}
            <div className='w-fit xl:w-[40%] flex responsive-gap items-center px-1'>
              <h1 className='items-center hidden gap-2 cursor-default xl:flex'>
                <img className='flex size-4 dark:hidden' src={icons.logo2_white} alt="" />
                <img className='hidden dark:flex size-4' src={icons.logo2} alt="" />
                Weather App
              </h1>
              {/* toggle */}
              <button className='relative flex items-center h-full p-3 ml-auto overflow-hidden rounded-full bg-cus-gray-900 dark:bg-cus-gray-50 custom-hover min-w-fit gap-7 justify-evenly focused2' onClick={handleThemeToggle}>

                <div className={`w-1/2 h-full hidden md:inline absolute z-[9] bg-primary transition-all top-0 rounded-full ease-in-out left-0 ${isLightMode ? 'translate-x-0' : 'translate-x-full'}`}></div>

                {isLightMode ? (
                  < svg className='icon-size icon-active' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m8 24a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m-69.66 5.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16" /></svg>
                ) : (
                  <svg className='hidden icon-size icon-inactive md:flex' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M122 40V16a6 6 0 0 1 12 0v24a6 6 0 0 1-12 0m68 88a62 62 0 1 1-62-62a62.07 62.07 0 0 1 62 62m-12 0a50 50 0 1 0-50 50a50.06 50.06 0 0 0 50-50M59.76 68.24a6 6 0 1 0 8.48-8.48l-16-16a6 6 0 0 0-8.48 8.48Zm0 119.52l-16 16a6 6 0 1 0 8.48 8.48l16-16a6 6 0 1 0-8.48-8.48M192 70a6 6 0 0 0 4.24-1.76l16-16a6 6 0 0 0-8.48-8.48l-16 16A6 6 0 0 0 192 70m4.24 117.76a6 6 0 0 0-8.48 8.48l16 16a6 6 0 0 0 8.48-8.48ZM46 128a6 6 0 0 0-6-6H16a6 6 0 0 0 0 12h24a6 6 0 0 0 6-6m82 82a6 6 0 0 0-6 6v24a6 6 0 0 0 12 0v-24a6 6 0 0 0-6-6m112-88h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12" /></svg>
                )}

                {isLightMode ? (
                  <svg className='hidden icon-size icon-inactive md:flex' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56"><path fill="currentColor" d="M31.316 14.887c.282 0 .446-.188.492-.446c.727-3.89.704-3.984 4.758-4.78c.281-.048.446-.188.446-.47c0-.304-.165-.445-.446-.492c-4.054-.82-4.03-.89-4.758-4.781c-.046-.258-.21-.445-.492-.445c-.28 0-.422.187-.468.445c-.75 3.89-.704 3.96-4.782 4.781c-.258.047-.445.188-.445.492c0 .282.188.422.445.47c4.102.796 4.032.89 4.782 4.78c.046.258.187.446.468.446M42.543 30.73c.422 0 .726-.304.773-.75c.774-6.304 1.031-6.398 7.43-7.453c.516-.093.82-.328.82-.797c0-.445-.304-.726-.726-.796c-6.493-1.102-6.75-1.149-7.524-7.454c-.047-.445-.351-.75-.773-.75c-.446 0-.75.305-.797.727c-.82 6.305-1.008 6.375-7.523 7.477c-.422.07-.727.351-.727.796c0 .446.305.704.727.797c6.515 1.055 6.75 1.149 7.523 7.5a.775.775 0 0 0 .797.703M24.918 52.528c8.578 0 15.516-4.312 18.68-11.648c.421-1.008.28-1.781-.164-2.25c-.422-.398-1.125-.492-1.97-.164c-1.757.703-3.913 1.101-6.609 1.101c-10.476 0-17.226-6.539-17.226-16.828c0-2.836.539-5.648 1.265-7.125c.47-.937.422-1.734.024-2.226c-.445-.516-1.242-.68-2.344-.235c-7.195 2.93-12.14 10.43-12.14 19.196c0 11.414 8.39 20.18 20.484 20.18m.047-3.562c-10.008 0-16.969-7.29-16.969-16.899c0-5.906 2.742-11.109 7.102-14.437c-.563 1.523-.891 3.867-.891 6.117c0 11.531 7.969 19.266 19.758 19.266c2.11 0 4.031-.258 5.015-.61c-2.93 4.055-8.156 6.563-14.015 6.563" /></svg>
                ) : (
                  <svg className='z-10 icon-size icon-active' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56"><path fill="currentColor" d="M31.211 14.945c.281 0 .445-.187.492-.445c.727-3.89.703-3.984 4.758-4.781c.281-.047.445-.188.445-.469c0-.305-.164-.445-.445-.492c-4.055-.82-4.031-.89-4.758-4.781c-.047-.258-.21-.446-.492-.446c-.281 0-.422.188-.469.446c-.75 3.89-.703 3.96-4.781 4.78c-.258.048-.445.188-.445.493c0 .281.187.422.445.469c4.102.797 4.031.89 4.781 4.781c.047.258.188.445.469.445M42.438 30.79c.421 0 .726-.305.773-.75c.773-6.281 1.078-6.469 7.43-7.453c.515-.094.82-.328.82-.797c0-.445-.305-.727-.727-.797c-6.398-1.219-6.75-1.172-7.523-7.453c-.047-.445-.352-.75-.773-.75c-.446 0-.75.305-.797.727c-.82 6.351-1.032 6.562-7.524 7.476c-.422.047-.726.352-.726.797c0 .445.304.703.726.797c6.492 1.195 6.727 1.219 7.524 7.5a.774.774 0 0 0 .797.703M24.789 52.47c8.484 0 15.258-4.29 18.492-11.508c.399-.867.328-1.617-.093-2.016c-.375-.351-1.032-.398-1.758-.14c-1.899.75-4.125 1.125-6.68 1.125c-10.64 0-17.437-6.657-17.437-17.04c0-2.953.562-5.788 1.289-7.241c.398-.82.398-1.524.046-1.97c-.421-.468-1.171-.538-2.085-.187C9.367 16.328 4.539 23.97 4.539 32.547c0 11.414 8.414 19.922 20.25 19.922" /></svg>
                )}

              </button>

              {/* profile */}
              <button className='roundBtn custom-hover focused2'>
                {/* <img src="" alt="" /> */}

                {isProfileActive ? (
                  <svg className='icon-size icon-active' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-4.991 9A2 2 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797C6.417 17.614 8.145 18 10 18s3.583-.386 4.865-1.203C16.167 15.967 17 14.69 17 13a2 2 0 0 0-2-2z" /></svg>
                ) : (
                  <svg className='icon-size icon-inactive' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8M7 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-1.991 5A2 2 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797C6.417 17.614 8.145 18 10 18s3.583-.386 4.865-1.203C16.167 15.967 17 14.69 17 13a2 2 0 0 0-2-2zM4 13c0-.553.448-1 1.009-1H15a1 1 0 0 1 1 1c0 1.309-.622 2.284-1.673 2.953C13.257 16.636 11.735 17 10 17s-3.257-.364-4.327-1.047C4.623 15.283 4 14.31 4 13" /></svg>
                )}

              </button>
            </div>

          </nav>

          <section className='flex flex-col w-full lg:overflow-hidden responsive-p responsive-gap-sections lg:pt-2'>
            {/* row-1 */}
            <div className='flex flex-col w-full responsive-gap-sections h-fit lg:flex-row'>
              {/* weather */}
              {/* for today remove: lg:w-[70%] */}
              <div className='flex flex-col lg:max-w-[70%] w-full h-full p-1 pt-0 responsive-gap'>

                {/* header buttons */}
                <div className='flex flex-col items-center justify-between gap-3 md:flex-row'>

                  {openSearch && (
                    <div className='flex items-center lg:hidden'>
                      <svg className='icon-size icon-inactive' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" /></svg>
                      <h3 className='text-nowrap truncate max-w-[25vw]'>
                        <span className='font-medium'>{weatherdata.location}, </span>
                        <span className='responsive-subtext-color'>{weatherdata.country}</span>
                      </h3>
                    </div>
                  )}

                  <div className='flex items-center w-full text-xl md:gap-10 justify-evenly md:justify-start'>
                    <button className={`${activeDay == 'today' ? 'day-active' : 'day-inactive'}`} onClick={() => { setActiveDay('today') }}>Today</button>
                    <button className={`${activeDay == 'tom' ? 'day-active' : 'day-inactive'}`} onClick={() => { setActiveDay('tom') }}>Tomorrow</button>
                    <button className={`${activeDay == 'next7' ? 'day-active' : 'day-inactive'}`} onClick={() => { setActiveDay('next7') }}>Next 7 Days</button>
                  </div>

                  <div className='relative flex w-full overflow-hidden rounded-full md:w-fit focused bg-cus-gray-900 dark:bg-cus-gray-50 custom-hover-shadowOnly-sm'>
                    {/* <input type="radio" name="" id="" /> */}
                    <div className={`absolute w-1/2 h-full rounded-full transition-all bg-primary ease-in-out top-0 left-0 inset-0 ${activeTab == 'forecast' ? 'translate-x-0' : 'translate-x-full'}`}></div>

                    <button
                      className={`btn-tab ${activeTab == 'forecast' ? 'btn-activeTab' : 'btn-inactiveTab'}`}
                      onClick={() => { setActiveTab('forecast') }}
                    >
                      Forecast
                    </button>
                    <button
                      className={`btn-tab ${activeTab == 'air' ? 'btn-activeTab' : 'btn-inactiveTab'}`}
                      onClick={() => { setActiveTab('air') }}
                    >
                      Air Quality
                    </button>
                  </div>
                </div>

                {/* wcards container*/}
                <div className='flex w-full h-full p-1 overflow-auto snap-x responsive-gap dark:text-cus-gray-800'>
                  {/* active weather card*/}
                  <WeatherCard
                    weatherdata={weatherdata}
                    currentDay={currentDay}
                    currentTime={currentTime}
                  ></WeatherCard>
                  {/* <div className='z-50 flex w-full h-full bg-white '>asd</div> */}

                  < div className={`${activeDay == 'tom' ? 'flex' : 'hidden'} responsive-gap snap-start`}>
                    <TommorowForecastCard
                      weatherdata={weatherdata}
                      currentDay={currentDay}
                      currentTime={currentTime}
                    ></TommorowForecastCard>
                    {/* <DailyForecastCard></DailyForecastCard> */}
                    {/* <div className='z-50 h-full bg-blue-500'>asdd</div> */}
                  </div>

                  < div className={`${activeDay == 'next7' ? 'grid' : 'hidden'} grid-flow-col responsive-gap snap-start w-full`}>
                    <DailyForecastCard ></DailyForecastCard>
                    <DailyForecastCard ></DailyForecastCard>
                    <DailyForecastCard ></DailyForecastCard>
                    <DailyForecastCard ></DailyForecastCard>
                    <DailyForecastCard ></DailyForecastCard>
                    <DailyForecastCard ></DailyForecastCard>
                    {/* <div className='z-50 flex w-full h-full bg-red-300'>asddd</div>
                    <div className='z-50 flex w-full h-full bg-red-300'>asddd</div>
                    <div className='z-50 flex w-full h-full bg-red-300'>asddd</div>
                    <div className='z-50 flex w-full h-full bg-red-300'>asddd</div>
                    <div className='z-50 flex w-full h-full bg-red-300'>asddd</div>
                    <div className='z-50 flex w-full h-full bg-red-300'>asddd</div>
                    <div className='z-50 flex w-full h-full bg-red-300'>asddd</div> */}
                  </div>

                </div>

              </div>

              {/* chart */}
              <div className='flex flex-col w-full lg:w-[40%] p-1'>
                <h1 className='pt-1 text-xl font-semibold'>Hourly Forecast</h1>
                <Chart className="" {...chartConfig} />
              </div>
            </div>

            {/* row-2 */}
            <div className='flex flex-col w-full h-full lg:overflow-hidden lg:flex-row responsive-gap-sections'>
              {/* map container*/}
              <div className='flex flex-col w-full h-full p-1 overflow-auto lg:snap-y scroll-smooth responsive-gap'>
                <div className='flex items-center justify-between gap-3 snap-start'>
                  <h1 className='text-xl font-semibold '>Global Map</h1>

                  <button className='flex items-center justify-center gap-3 text-sm btn-withIcon focused custom-hover responsive-bg custom-hover-shadowOnly group'>
                    <p className='responsive-text-color group-hover:text-white dark:group-hover:text-black'>View Wide</p>
                    <svg className='h-4 text-[#fcc11a]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" /></svg>
                  </button>
                </div>

                {/* map */}
                <div className='flex w-full h-[60vh] resize lg:h-full overflow-hidden transition-all ease-in rounded-3xl min-h-[400px] lg:min-h-[300px] responsive-bg custom-hover-shadowOnly responsive-text-color snap-start hover:brightness-110'>
                  <div className='relative flex w-full'>
                    <div className='absolute inset-0 responsive-p'>
                      <div className='relative w-full h-full'>
                        {/* back */}
                        <button className='absolute top-0 left-0 roundBtn-map'>
                          <svg className='icon-size' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m5.828 7l2.536 2.535L6.95 10.95L2 6l4.95-4.95l1.414 1.415L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 0 0 0-12z" /></svg>
                        </button>
                        <div className='absolute top-0 right-0 flex flex-col justify-between h-full responsive-gap'>
                          {/* stack */}
                          <button className='roundBtn-map h-fit'>
                            <svg className='icon-size' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M229.18 173a6 6 0 0 1-2.16 8.2l-96 56a6 6 0 0 1-6 0l-96-56a6 6 0 0 1 6-10.36l93 54.23l93-54.23a6 6 0 0 1 8.16 2.16M221 122.82l-93 54.23l-93-54.23a6 6 0 0 0-6 10.36l96 56a6 6 0 0 0 6 0l96-56a6 6 0 0 0-6-10.36M26 80a6 6 0 0 1 3-5.18l96-56a6 6 0 0 1 6 0l96 56a6 6 0 0 1 0 10.36l-96 56a6 6 0 0 1-6 0l-96-56A6 6 0 0 1 26 80m17.91 0L128 129.05L212.09 80L128 31Z" /></svg>
                          </button>
                          <div className='flex flex-col responsive-gap'>
                            {/* + */}
                            <button className='roundBtn-map h-fit'>
                              <svg className='icon-size' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8" /></svg>
                            </button>
                            {/* - */}
                            <button className='roundBtn-map h-fit'>
                              <svg className='icon-size' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" /></svg>
                            </button>
                          </div>
                          {/* location */}
                          <button className='roundBtn-map h-fit'>
                            <svg className='icon-size' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.45 11.227h-1.39a8.18 8.18 0 0 0-7.36-7.36v-1.39a.75.75 0 0 0-1.5 0v1.39a8.17 8.17 0 0 0-7.31 7.36H2.5a.75.75 0 1 0 0 1.5h1.39a8.18 8.18 0 0 0 7.36 7.36v1.39a.75.75 0 0 0 1.5 0v-1.39a8.19 8.19 0 0 0 7.36-7.36h1.39a.75.75 0 1 0 0-1.5zm-9.5 7.39a6.64 6.64 0 1 1 6.64-6.64a6.65 6.65 0 0 1-6.64 6.65z" /><path fill="currentColor" d="M16.48 11.987a4.54 4.54 0 1 1-4.53-4.54a4.53 4.53 0 0 1 4.53 4.54" /></svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <img className='object-cover w-full text-red-500 transition-all ease-in-out' src={icons.map} alt="" />
                  </div>
                </div>
              </div>

              {/* other cities */}
              <div className='w-full lg:w-[40%] flex flex-col responsive-gap'>
                <div className='flex items-center justify-between gap-3 p-1 pt-0'>
                  <h1 className='text-xl font-semibold'>Other cities</h1>

                  <button className='flex items-center gap-3 pl-5 pr-3 text-sm lg:px-0 xl:pl-5 xl:pr-3 btn-showAll focused2 custom-hover custom-hover-text-color custom-hover-shadowOnly'>
                    <p className='flex lg:hidden xl:flex'>Show All</p>
                    <svg className='h-4 transition-all ease-in-out responsive-text-color group-hover:mx-0 lg:group-hover:mx-3 xl:group-hover:mx-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10 17l5-5l-5-5" /></svg>
                  </button>
                </div>

                {/* ccards list */}
                <div className='flex flex-col w-full p-1 overflow-auto scroll-smooth h-fit responsive-gap lg:snap-y'>
                  {/* ccard */}
                  <OtherCitiesCard city="Imus"></OtherCitiesCard>
                  <OtherCitiesCard city="Shibuya"></OtherCitiesCard>
                  <OtherCitiesCard city="London"></OtherCitiesCard>
                  <OtherCitiesCard city="New York"></OtherCitiesCard>
                  <OtherCitiesCard city="Shanghai"></OtherCitiesCard>
                  <OtherCitiesCard city="Batangas"></OtherCitiesCard>
                  <OtherCitiesCard city="Tokyo"></OtherCitiesCard>
                </div>

              </div>
            </div>


          </section>

        </div >

      </div >
    </>
  )
}

export default App
