let hobbies = []

function login(){

let user = document.getElementById("username").value

if(user.length > 0){

localStorage.setItem("user",user)

window.location = "hobbies.html"

}
}

function selectHobby(hobby){

if(!hobbies.includes(hobby)){

hobbies.push(hobby)

alert(hobby + " added!")

}

}

function sendFeedback(e){

e.preventDefault()

alert("Thanks for feedback!")

}