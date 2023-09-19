const _search_text=document.getElementById("search_text")
const _search_button=document.getElementById("search_button")

let query=""

_search_button.addEventListener("click",()=>{
    query=_search_text.value
    window.open(`https://google.com/search?q=${query}`,"_blank")
})