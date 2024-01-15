import weatherApi from '@/utils/weather'

// 获取天气信息
// Path： https://restapi.amap.com/v3/weather/weatherInfo?city=110101&key=<用户key>
// Method： get
export const getWeather = () => {
    return weatherApi({
        method: 'GET'
    })
}