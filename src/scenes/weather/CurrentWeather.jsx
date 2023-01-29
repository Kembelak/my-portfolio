import React from 'react'



const CurrentWeather = ({data}) => {
  return (
    <div className='p-4 opacity-85 w-96 bg-dark-grey text-yellow mt-5 mx-auto rounded-lg shadow-btnShadow'>
        <div className='flex justify-between items-center'>
            <div>
            <p className='m-0 font-bold text-lg tracking-wider'>{data.city}</p>
            <p className='m-0 font-medium text-base tracking-wider'>{data.weather[0].description}</p>
            </div>
            <img alt='weather'
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                color='aliceblue' />
        </div>
        <div className='flex justify-between pt-10 items-center'>
            <p className='w-auto tracking-tight mx-0 my-3 text-6xl font-bold '>{Math.round(data.main.temp)}°C</p>
            <div className='w-full pl-3'>
                <div className='flex justify-between'>
                    <span className='text-left font-normal text-base'>Details</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-left font-normal text-base'>Feels Like</span>
                    <span className='text-right font-semibold text-base'>{Math.round(data.main.feels_like)}°C</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-left font-normal text-base'>Wind</span>
                    <span className='text-right font-semibold text-base'>{data.wind.speed}m/s</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-left font-normal text-base'>Humidity</span>
                    <span className='text-right font-semibold text-base'>{data.main.humidity}%</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-left font-normal text-base'>Pressure</span>
                    <span className='text-right font-semibold text-base'>{data.main.pressure}hPa</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CurrentWeather