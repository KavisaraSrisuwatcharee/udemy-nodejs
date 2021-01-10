const request = require('request')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')
// const url = 'http://api.weatherstack.com/current?access_key=568f8bd89e9a8ba98aeb4113a52492b5&query=37.8267'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to wether service!');
//     } else if (response.body.error) {
//         console.log('Unable to find location');
//     } else {
//         console.log("It is currently " + response.body.current.temperature + " degrees out. There is a " + response.body.current.precip + "% chance of rain");
//     }
//     // const data = JSON.parse(response.body)
//     // console.log(data.current);
//     // console.log(response.body.current);
// })
// const geocodeURL= 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2hpbmdseSIsImEiOiJja2puMGxpcDM4M2s5MnFxamVxYmd6dTE4In0.GGJMX0mnRJwH8KWsAkCb-w&limit=1'
// request({url:geocodeURL , json: true }, (error,response) => {
//     const latitude = response.body.features[0].center[1]
//     const longtitude = response.body.features[0].center[0]
//     console.log(latitude,longtitude);
// })
const address = process.argv[2]
if (!address) {
    console.log('Please provide an address');
} else {
    geocode(address, (error, {latitude,longtitude,location}) => {
        if (error) {
            return console.log(error)
        }
        forecast(latitude, longtitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location);
            console.log(forecastData);
        })
    })
}


