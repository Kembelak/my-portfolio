import React ,{ useState } from 'react'
import CurrentWeather from './weather/CurrentWeather'
import SearchCity from './weather/SearchCity'
import Forecast from './weather/Forecast'
import { WEATHER_API_URL,WEATHER_API_KEY } from '../utils/API'


const Weather = () => {
    const [currentWeather,SetcurrentWeather] = useState(null);
    const [forecast,Setforecast] = useState(null);


    const handelOnSearchChange = (searchData) => {
        const [lat,lon] = searchData.value;
        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?&units=metric&lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?&units=metric&lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
  
        Promise.all([currentWeatherFetch,forecastFetch])
          .then(async (response) =>{
            const weatherResponse = await response[0].json();
            const forecastResponse = await response[1].json();

            SetcurrentWeather({ city:searchData.label , ...weatherResponse});
            Setforecast({ city:searchData.label , ...forecastResponse});
          })
          .catch((err) => console.log(err))
    }
  return (
    <div className='bg-gradient-rainbow min-h-screen'>
        <SearchCity  onSearchChange={handelOnSearchChange}/>
        {currentWeather && <CurrentWeather  data={currentWeather}/>}
        {forecast && <Forecast data={forecast}/>}
    </div>
  )
}

export default Weather