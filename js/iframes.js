const _iframes = document.getElementById("iframes")

fetch("./config.json").then(config => config.json()).then(config => {
    config.iframes.forEach(website => {
        const _iframe = document.createElement("iframe")
        _iframe.className="col col-12 col-lg-5"
        _iframe.height="300px"
        _iframe.src = website.url
        _iframe.title = website.title
        _iframes.appendChild(_iframe)
    })
}).catch(err => {
    console.log("ERROR", err)
})