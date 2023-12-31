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
const _news_box = document.getElementById("news_box")

let source = ""
let apiKey = ""
let regions = []
let url = "https://api.worldnewsapi.com/search-news"

fetch("./config.json").then(config => config.json()).then(config => config.news).then(config => {
    if (config.active === false) {
        _news_box.innerHTML = `<p>News Services have been turned off.<p>`
        return
    }
    source = config.source
    apiKey = config.apiKey
    regions = config.regions
}).then(() => {
    regions.forEach(region => {
        const news_by_lang = document.createElement("li")
        news_by_lang.innerHTML = `<h3>${region.region} - ${region.lang}</h3>`
        const news_by_lang_list = document.createElement("ul")
        news_by_lang.appendChild(news_by_lang_list)
        _news.appendChild(news_by_lang)

        fetch(url + `?number=10&source-countries=${region.region}&language=${region.lang}&earliest-publish-date=${getLastDate()}&api-key=${apiKey}`).then(res => res.json()).then(res => {
            res.news.forEach(item => {
                const news = document.createElement("li")
                news.innerHTML = `
                    <a href="${item.url}">
                        ${item.title}
                    </a>
                `
                news_by_lang_list.appendChild(news)
            })
        }).catch(err_ => {
            console.log("ERROR", err_)
        })
    })
}).catch(err => {
    console.log("ERROR", err)
})