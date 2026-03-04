let selected = []

let cards = document.querySelectorAll(".card")

cards.forEach(card => {

card.addEventListener("click", () => {

card.classList.toggle("selected")

let hobby = card.innerText

if(selected.includes(hobby)){
selected = selected.filter(h => h != hobby)
}else{
selected.push(hobby)
}

localStorage.setItem("hobbies", JSON.stringify(selected))

})

})


async function showResult(){

let hobbies = JSON.parse(localStorage.getItem("hobbies"))

let resultDiv = document.getElementById("result")

if(!hobbies || hobbies.length === 0){

resultDiv.innerHTML = "<h3>Please select hobbies first</h3>"
return

}

resultDiv.innerHTML = "<h2>AI is analyzing your hobbies...</h2>"

let prompt = `A student has these hobbies: ${hobbies.join(", ")}.

Suggest:
1. Best career paths
2. Skills to focus on
3. Upcoming global events or competitions related to these careers.`

try{

let response = await fetch(
"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_GEMINI_API_KEY",
{
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
contents: [
{
parts: [{ text: prompt }]
}
]
})
}
)

let data = await response.json()

console.log(data)

let text = data.candidates[0].content.parts[0].text

resultDiv.innerHTML = `
<div class="result-box">

<h2>AI Career Suggestions</h2>

<p>${text.replace(/\n/g,"<br>")}</p>

<br>

<button onclick="goFeedback()">Give Feedback</button>

</div>
`

}catch(error){

console.error(error)

resultDiv.innerHTML = `
<h3>⚠️ Error getting AI result</h3>
<p>Check your API key or internet connection.</p>
`

}

}


function goFeedback(){

window.location = "feedback.html"

}
