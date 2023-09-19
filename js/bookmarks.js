const _bookmarks_social = document.getElementById("bookmarks_social")
const _bookmarks_sources=document.getElementById("bookmarks_sources")
const _bookmarks_info=document.getElementById("bookmarks_info")
const _bookmarks_tools=document.getElementById("bookmarks_tools")
const _bookmarks_others=document.getElementById("bookmarks_others")

fetch("./config.json").then(config => config.json()).then(config => config.bookmarks).then(config => {
    config.social.forEach(website => {
        const link=document.createElement("li")
        link.innerHTML=`<a href="${website.website}"><img width="24px" src="${website.website+"/favicon.ico"}"><p>${website.title}</p></a>`
        _bookmarks_social.appendChild(link)
    });
    config.sources.forEach(website => {
        const link=document.createElement("li")
        link.innerHTML=`<a href="${website.website}"><img width="24px" src="${website.website+"/favicon.ico"}"><p>${website.title}</p></a>`
        _bookmarks_sources.appendChild(link)
    });
    config.info.forEach(website => {
        const link=document.createElement("li")
        link.innerHTML=`<a href="${website.website}"><img width="24px" src="${website.website+"/favicon.ico"}"><p>${website.title}</p></a>`
        _bookmarks_info.appendChild(link)
    });
    config.tools.forEach(website => {
        const link=document.createElement("li")
        link.innerHTML=`<a href="${website.website}"><img width="24px" src="${website.website+"/favicon.ico"}"><p>${website.title}</p></a>`
        _bookmarks_tools.appendChild(link)
    });
    config.others.forEach(website => {
        const link=document.createElement("li")
        link.innerHTML=`<a href="${website.website}"><img width="24px" src="${website.website+"/favicon.ico"}"><p>${website.title}</p></a>`
        _bookmarks_others.appendChild(link)
    });
}).catch(err => {
    console.log("ERROR", err)
})