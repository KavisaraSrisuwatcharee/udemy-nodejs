const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=568f8bd89e9a8ba98aeb4113a52492b5&query=37.8267'

request({url: url, json: true}, (error,response) => {
    // const data = JSON.parse(response.body)
    // console.log(data.current);
    // console.log(response.body.current);
    console.log("It is currently "+ response.body.current.temperature +" degrees out. There is a "+ response.body.current.precip+"% chance of rain");
})