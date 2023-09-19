const _bookmarks = document.getElementById("bookmarks")

fetch("./config.json").then(config => config.json()).then(config => config.bookmarks).then(config => {
    config.forEach(website => {
        const link=document.createElement("li")
        link.innerHTML=`<a href="${website.website}"><img width="24px" src="${website.website+"/favicon.ico"}"><p>${website.title}</p></a>`
        _bookmarks.appendChild(link)
    });
}).catch(err => {
    console.log("ERROR", err)
})