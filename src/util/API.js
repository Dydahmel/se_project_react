//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

const latitude = 40.60;
const longitude = -73.95;
const APIkey = "89c0092216c33711bbf4446badc558c2"
export function getWeather(){
    const weatherApi = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`)
    .then((res) => {  
          
        if(res.ok){
            return res.json()
        }
        else{
            return Promise.reject(`Error: ${res.status}`)
        }
    })
    return weatherApi
}

export function parseWeatherTemp(data){
    const main = data.main;
    const temperature = Math.ceil(main.temp)
    return temperature
}
    
export function parseWeatherCondition(data){
    const weather = data.weather;
    const weatherObject = weather[0]
    const weatherCondition = weatherObject.id
    return weatherCondition
}
