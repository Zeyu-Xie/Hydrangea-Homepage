const flagList = {
    USD: '🇺🇸',
    CAD: '🇨🇦',
    GBP: '🇬🇧',
    AUD: '🇦🇺',
    EUR: '🇪🇺',
    SEK: '🇸🇪',
    CNY: '🇨🇳'
}
const currencyToFlag = currencyCode => {
    const flagEmoji = flagList[currencyCode];
    if (flagEmoji) {
        return flagEmoji;
    } else {
        return '';
    }
}

const _info = document.getElementById("info")
const _exchange_rate_info = document.getElementById("exchange_rate_info")
const _weather_info = document.getElementById("weather_info")

fetch("./config.json").then(config => config.json()).then(config => {

    //exchange rate info

    config.info["exchange rate"].pairs.forEach(pair => {
        fetch("https://api.api-ninjas.com/v1/exchangerate" + `?pair=${pair}`, {
            headers: {
                "X-Api-Key": config.info["exchange rate"].apiKey
            }
        }).then(res => res.json()).then(res => {
            const rate_by_pair = document.createElement("li")
            rate_by_pair.innerHTML = `
                <div class="card m-3" style="width: fit-content; display: inline-block;">
                    <div class="card-body">
                        <h5 class="card-title">${pair.substr(0, 3)}&nbsp;${pair.substr(4, 3)}</h5>
                        <h5 class="card-title">&nbsp;${currencyToFlag(pair.substr(0, 3))}&nbsp;→&nbsp;${currencyToFlag(pair.substr(4, 3))}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${res["exchange_rate"]}</h6>
                    </div>
                </div>
            `
            _exchange_rate_info.appendChild(rate_by_pair)
        }).catch(err_ => {
            console.log("ERROR", err_)
        })
    })

    //weather info

    config.info["weather"].cities.forEach(city => {
        fetch("https://api.api-ninjas.com/v1/weather" + `?city=${city}`, {
            headers: {
                "X-Api-Key": config.info["weather"].apiKey
            }
        }).then(res => res.json()).then(res => {
            const weather_by_city = document.createElement("li")
            weather_by_city.innerHTML = `
                <li>
                    <div class="card m-3" style="width: fit-content; display: inline-block;">
                        <div class="card-body">
                            <h5 class="card-title">${city}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${res.temp}°C</h6>
                            <p class="card-text">Wind Speed: ${res.wind_speed}</p>
                            <p class="card-text">Sunrise: ${res.sunrise}</p>
                            <p class="card-text">Sunset: ${res.sunset}</p>
                        </div>
                    </div>
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