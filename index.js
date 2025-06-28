
const nameFeedback = document.getElementById("nameFeedback");
const ageFeedback = document.getElementById("ageFeedback");
const emailFeedback = document.getElementById("emailFeedback");
const countryFeedback = document.getElementById("countryFeedback");

const submitBtn = document.getElementById("submitBtn");
const myForm = document.getElementById("myForm");

let nameFormat = /^[a-z]+$/;
let emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let countryFormat = /^[a-zA-Z]+$/;
let ageFormat = /^[0-9]+$/;

myForm.addEventListener("submit", (e) => {
    let yourName = document.getElementById("yourName").value;
    let yourAge = document.getElementById("yourAge").value;
    let yourEmail = document.getElementById("yourEmail").value;
    let yourCountry = document.getElementById("yourCountry").value;

    e.preventDefault();
    // conditionals for checking name
    if(yourName.match(nameFormat) && yourName.length < 5){
        nameFeedback.textContent = "Name must be at least 5 characters long";
        nameFeedback.style.color = "red";
    }
    else if(yourName.match(nameFormat) && yourName.length > 30){
        nameFeedback.textContent = "Name must not be more than 30 characters"
        nameFeedback.style.color = "red";
    } 
    else if(!yourName.match(nameFormat)){
        nameFeedback.textContent = "Name must be in lowercase only";
        nameFeedback.style.color = "red";
    }
     else {
        nameFeedback.textContent = "Name is okay";
        nameFeedback.style.color = "green";
    }

    // conditionals for checking email
    if(!yourEmail.match(emailFormat)){
        emailFeedback.textContent = "Invalid email";
        emailFeedback.style.color = "red";
    } else{
        emailFeedback.textContent = "Email is valid";
        emailFeedback.style.color = "green";
    }

    // conditionals for checking age
    if(!yourAge.match(ageFormat)){
        ageFeedback.textContent = "Age must be a number";
        ageFeedback.style.color = "red";
    } 
    else if(yourAge > 120){
        ageFeedback.textContent = "You cannot be above 120";
        ageFeedback.style.color = "red";
    }
    else if(yourAge < 0){
        ageFeedback.textContent = "Age cannot be a negative number";
        ageFeedback.style.color = "red";
    } else{
        ageFeedback.textContent = "Age is okay";
        ageFeedback.style.color = "green";
    }

    // conditionals for checking country
    if(!yourCountry.match(countryFormat)){
        countryFeedback.textContent = "Country must start with Uppercase!";
        countryFeedback.style.color = "red";
    }
    else{
        countryFeedback.textContent = "'Country is okay";
        countryFeedback.style.color = "green";
    }

});