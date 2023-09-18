const getLastDate = () => {
    var today = new Date()
    today.setDate(today.getDate() - 1)
    var year = today.getFullYear()
    var month = today.getMonth() + 1
    var day = today.getDate()
    if (month < 10) {
        month = '0' + month
    }
    if (day < 10) {
        day = '0' + day
    }
    var formattedDate = year + '-' + month + '-' + day
    return formattedDate
}

const _news = document.getElementById("news")

let source = ""
let apiKey = ""
let regions = []
let url = "https://api.worldnewsapi.com/search-news"

fetch("./config.json").then(config => config.json()).then(config => config.news).then(config => {
    source = config.source
    apiKey = config.apiKey
    regions = config.regions
}).then(() => {
    regions.forEach(region => {

        fetch(url + `?source-countries=${region.region}&language=${region.lang}&earliest-publish-date=${getLastDate()}&api-key=${apiKey}`).then(res => res.json()).then(res => {
            res.news.forEach(item => {
                const news = document.createElement("li")
                news.innerHTML = `
                    <a href="${item.url}">
                        <img width=300px src="${item.image}" alt="${item.title}">
                    </a>
                    <a href="${item.url}">
                        ${item.title}
                    </a>
                `
                _news.appendChild(news)
            })
        }).catch(err_ => {
            console.log("ERROR", err_)
        })
    })
}).catch(err => {
    console.log("ERROR", err)
})