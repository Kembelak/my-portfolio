const geoApiOptions = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
  headers: {
    'X-RapidAPI-Key': 'b3e277f8d5msh7f4677137be1c8ep1e554djsn68419e82cd8f',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
}
};
const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const WEATHER_API_KEY = "833144963cf37e4b0228f3d2f17b76c2"



export {geoApiOptions,GEO_API_URL,WEATHER_API_URL,WEATHER_API_KEY};




// const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=dallas&lat={lat}&lon={lon}&appid=${weatherKey}`


// const weatherKey = "833144963cf37e4b0228f3d2f17b76c2"




