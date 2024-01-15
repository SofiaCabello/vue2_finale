import axios from 'axios'


// 天气api
const weatherApi = axios.create({
    baseURL: 'https://restapi.amap.com/v3/weather/weatherInfo?city=410100&key=	7ff51079b1a2dabacad137d81bad174b',
    timeout: 5000
})

export default weatherApi;