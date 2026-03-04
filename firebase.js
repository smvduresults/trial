import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
GoogleAuthProvider,
signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

apiKey: "AIzaSyDiWDW8kz5N26mHDMFPf4ABiT6x2ljeipQ",
authDomain: "hobbiestocarrer.firebaseapp.com",
projectId: "hobbiestocarrer",
appId: "1:491176675111:web:87f2950296ee07b42c4b02"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


window.signup = function(){

let email=document.getElementById("email").value
let password=document.getElementById("password").value

createUserWithEmailAndPassword(auth,email,password)

.then(()=>{

window.location="hobbies.html"

})

.catch(error=>alert(error.message))

}


window.login = function(){

let email=document.getElementById("email").value
let password=document.getElementById("password").value

signInWithEmailAndPassword(auth,email,password)

.then(()=>{

window.location="hobbies.html"

})

.catch(error=>alert(error.message))

}


window.googleLogin = function(){

const provider = new GoogleAuthProvider()

signInWithPopup(auth,provider)

.then(()=>{

window.location="hobbies.html"

})

.catch(error=>alert(error.message))


}
