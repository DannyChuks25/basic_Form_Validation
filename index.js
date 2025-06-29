
const nameFeedback = document.getElementById("nameFeedback");
const ageFeedback = document.getElementById("ageFeedback");
const emailFeedback = document.getElementById("emailFeedback");
const countryFeedback = document.getElementById("countryFeedback");

const submitBtn = document.getElementById("submitBtn");
const myForm = document.getElementById("myForm");

let nameFormat = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
let emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let countryFormat = /^[A-Za-z]+$/;
let ageFormat = /^[0-9]+$/;

myForm.addEventListener("submit", (e) => {
    let yourName = document.getElementById("yourName").value;
    let yourAge = document.getElementById("yourAge").value;
    let yourEmail = document.getElementById("yourEmail").value;
    let yourCountry = document.getElementById("yourCountry").value;

    e.preventDefault();
    console.log(yourName);
    
   
    //f(hasError) return;

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
        nameFeedback.textContent = "Name must begin with uppercase";
        nameFeedback.style.color = "red";
    }
     else {
        nameFeedback.textContent = "Name is okay";
        nameFeedback.style.color = "green";
    }

    // conditionals for checking email
    if(!yourEmail.match(emailFormat)){
        emailFeedback.textContent = "Email must follow placeholder format!";
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
        countryFeedback.textContent = "Select a Country!";
        countryFeedback.style.color = "red";
    }
    else{
        countryFeedback.textContent = "Country is okay";
        countryFeedback.style.color = "green";
    }

    let splitName = yourName.split(" ");

    let hasError = false;

    console.log(splitName);
    if(splitName.length < 2){
        nameFeedback.textContent = "Enter last name";
        nameFeedback.style.color = "red";
        hasError = true;
    }
    
     if(yourName===""){
        nameFeedback.textContent= "Enter a name";
        nameFeedback.style.color = "red";
        hasError = true;
    }
    if(yourAge === ""){
        ageFeedback.textContent = "Enter age";
        ageFeedback.style.color = "red";
        hasError = true;
    }
    if(yourEmail === ""){
        emailFeedback.textContent = "Enter email";
        emailFeedback.style.color = "red";
        hasError = true;
    }
    if(yourCountry === ""){
        countryFeedback.textContent = "Enter country";
        countryFeedback.style.color = "red";
        hasError = true;
    }

});