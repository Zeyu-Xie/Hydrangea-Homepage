const _info = document.getElementById("info")
const _exchange_rate_info=document.getElementById("exchange_rate_info")
const _weather_info=document.getElementById("weather_info")

fetch("../config.json").then(config => config.json()).then(config => {
    config.info["exchange rate"].pairs.forEach(pair => {
        fetch("https://api.api-ninjas.com/v1/exchangerate" + `?pair=${pair}`,{
            headers: {
                "X-Api-Key": config.info["exchange rate"].apiKey
            }
        }).then(res => res.json()).then(res => {
            const rate_by_pair=document.createElement("li")
            rate_by_pair.innerHTML=`<li><p>${pair}: ${res["exchange_rate"]}</p></li>`
            _exchange_rate_info.appendChild(rate_by_pair)
        }).catch(err_ => {
            console.log("ERROR", err_)
        })
    })

    config.info["weather"].cities.forEach(city => {
        fetch("https://api.api-ninjas.com/v1/weather" + `?city=${city}`,{
            headers: {
                "X-Api-Key": config.info["weather"].apiKey
            }
        }).then(res => res.json()).then(res => {
            console.log(res)
            const weather_by_city=document.createElement("li")
            weather_by_city.innerHTML=`
                <li>
                    <p>${city}</p>
                    <ul>
                        <li>Temperature: ${res.temp}</li>
                        <li>Cloud Percentage: ${res.cloud_pct}</li>
                        <li>Wind Speed: ${res.wind_speed}</li>
                        <li>Sunrise: ${res.sunrise}</li>
                        <li>Sunset: ${res.sunset}</li>
                    </ul>
                </li>
            `
            _weather_info.appendChild(weather_by_city)
        }).catch(err_ => {
            console.log("ERROR", err_)
        })
    })
}).catch(err => {
    console.log("ERROR", err)
})