let selected=[]

let cards=document.querySelectorAll(".card")

cards.forEach(card=>{

card.addEventListener("click",()=>{

card.classList.toggle("selected")

let hobby=card.innerText

if(selected.includes(hobby)){
selected=selected.filter(h=>h!=hobby)
}else{
selected.push(hobby)
}

localStorage.setItem("hobbies",JSON.stringify(selected))

})

})


async function showResult(){

let hobbies = JSON.parse(localStorage.getItem("hobbies"))

if(!hobbies || hobbies.length===0){

document.getElementById("result").innerHTML =
"<h3>Please select hobbies first</h3>"

return
}

document.getElementById("result").innerHTML =
"<h2>AI is analyzing your hobbies...</h2>"


let prompt =

`A student has these hobbies: ${hobbies.join(", ")}.

Suggest:

1 Best career paths
2 Skills to focus on
3 Upcoming events, competitions or conferences

Make response clear.`


let response = await fetch(

"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDVR9xoL6lNckC9M42mT-BRUCKr_eNJplY",

{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

contents:[
{
parts:[
{text:prompt}
]
}
]

})

})

let data = await response.json()

let text = data.candidates[0].content.parts[0].text


document.getElementById("result").innerHTML =

`

<div class="result-box">

<h2>AI Career Suggestion</h2>

<p>${text.replace(/\n/g,"<br>")}</p>

<button onclick="goFeedback()">Give Feedback</button>

</div>

`

}


function goFeedback(){

window.location="feedback.html"

}