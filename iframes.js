const _iframes = document.getElementById("iframes")

fetch("./config.json").then(config => config.json()).then(config => {
    config.iframes.forEach(website => {
        console.log(website)
        const _iframe = document.createElement("iframe")
        _iframe.src = website.url
        _iframe.title = website.title
        _iframes.appendChild(_iframe)
        console.log(_iframes)
    })
}).catch(err => {
    console.log("ERROR", err)
})