window.addEventListener("scroll", function(){

let scroll = window.scrollY

let angle = 120 + scroll/5

document.body.style.background =
`linear-gradient(${angle}deg,#1e3c72,#2a5298,#6dd5ed)`

})