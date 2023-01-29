import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
  return (
    <>
      <label 
        className="text-xl font-bold pl-2">
            Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div 
                    className="bg-yellow rounded-xl h-10 text-base py-1 px-5 m-1 flex items-center cursor-pointer"
                    >
                  <img 
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} 
                    alt="weather" 
                    className="w-10" 
                    />
                  <label 
                    className="text-red flex-1 font-medium ml-4">{forecastDays[idx]}</label>
                  <label className="flex-1 text-right mr-3  "
                    >{item.weather[0].description}</label>
                  <label className="text-grey">{Math.round(item.main.temp_max)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className=" bg-opaque-black grid flex-1 grid-cols-2 rounded-xl py-1 px-4 mx-8 my-2 gap-y-0 gap-x-3.5">
                <div className="flex h-8 justify-between items-center">
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="flex h-8 justify-between items-center">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="flex h-8 justify-between items-center">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="flex h-8 justify-between items-center">
                  <label >Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="flex h-8 justify-between items-center">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="flex h-8 justify-between items-center">
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;