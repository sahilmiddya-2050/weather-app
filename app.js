const request = require("postman-request");
const API_KEY = "38e9fa3d5c4ee233912330f4ff368da2";

const place = "new york";

const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=37.8267,-122.4233`;
// const geoCodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1Ijoic2FoaWxtaWRkeWEiLCJhIjoiY2tmdjR0YzdmMTNjMjMwdGJxZW94NW16cSJ9.lFl6SzSS7Ajm4N-3hPFNrA`;

function getCoordinate(place) {
  let str = "1";
  const geoCodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1Ijoic2FoaWxtaWRkeWEiLCJhIjoiY2tmdjR0YzdmMTNjMjMwdGJxZW94NW16cSJ9.lFl6SzSS7Ajm4N-3hPFNrA`;
  request(geoCodingUrl, { json: true }, async (error, response, body) => {
    console.log(error);
    // const coordinates = await response.body.features[0].center;
    // return coordinates;
    // str = (await str) + coordinates[0] + "," + coordinates[1];
    str += "sj";
  });
  return str;
}

// http.get(url, (res) => console.log(res.json()));

// request({ url: url, json: true }, (error, response, body) => {
//   //   const data = JSON.parse(response.body);
//   console.log(response.body.current);
// });
console.log(getCoordinate(place));
