const request = require("request");

const forecast = (latitude, longtitude, callback) => {
    const URL = 'http://api.weatherstack.com/current?access_key=568f8bd89e9a8ba98aeb4113a52492b5&query=' + latitude + ',' + longtitude +
        '&units=f'
    request({ url: URL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to wether service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, "It is currently " + response.body.current.temperature + " degrees out. There is a " + response.body.current.precip + "% chance of rain");

        }
    })
}




module.exports = forecast