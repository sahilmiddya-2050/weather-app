const request = require("postman-request");
const getCoordinate = require("./utils/coordinate");
const getWeather = require("./utils/weather");

const place = process.argv[2];

place
  ? getCoordinate(place, (error, { str, placeName } = {}) => {
      if (error) return console.log(error);
      getWeather(str, (error, weather) => {
        if (error) return console.log(error);
        console.log(weather);
        console.log(placeName);
      });
    })
  : console.log("plese provide an address");

// const geoCodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Washington.json?access_token=pk.eyJ1Ijoic2FoaWxtaWRkeWEiLCJhIjoiY2tmdjR0YzdmMTNjMjMwdGJxZW94NW16cSJ9.lFl6SzSS7Ajm4N-3hPFNrA`;

// const url = `http://api.weatherstack.com/current?access_key=38e9fa3d5c4ee233912330f4ff368da2&query=${coordinateStr}`;
