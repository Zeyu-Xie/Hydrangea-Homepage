const _news = document.getElementById("news")

let source = ""
let apiKey = ""
let regions = []
let url = "https://newsapi.org/v2/top-headlines"

fetch("./config.json").then(config => config.json()).then(config => config.news).then(config => {
    source = config.source
    apiKey = config.apiKey
    regions = config.regions
}).then(() => {
    regions.forEach(region => {
        
        fetch(url + `?country=${region}&apiKey=${apiKey}`).then(res => res.json()).then(res => {
            res.articles.forEach(item=>{
                const news=document.createElement("li")
                news.innerHTML=`<a href="${item.url}">${item.title}</a>`
                _news.appendChild(news)
            })
        }).catch(err_ => {
            console.log("ERROR", err_)
        })
    })
}).catch(err => {
    console.log("ERROR", err)
})