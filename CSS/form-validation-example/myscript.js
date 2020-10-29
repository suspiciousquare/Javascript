function printError(element, msg){
    document.getElementById(element).innerHTML = msg;
}

function validateForm(){

var name = document.contactForm.name.value;
var email = document.contactForm.email.value;
var mobile = document.contactForm.mobile.value;
var country = document.contactForm.country.value;
var gender = document.contactForm.gender.value;
var hobbies = [];
var checkboxes = document.getElementsByName("hobbies[]");
for (var i = 0; i < checkboxes.length; i++){
    if (checkboxes[i].checked){
        hobbies.puch(checkboxes[i].value);
    }
}

var nameErr = emailErr = mobileErr = countryErr = genderErr = true;

if (name == ""){
    printError("nameErr", "Please enter your name");
} else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false){
        printError("nameErr","Please enter a valid name");
    } else{
        printError("nameErr","");
        nameErr = false;
    }
}

if (email == ""){
    printError("emailErr", "Please enter your email");
} else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false){
        printError("emailErr","Please enter a valid email");
    } else{
        printError("emailErr","");
        emailErr = false;
    }
}

if (mobile == ""){
    printError("mobileErr", "Please enter your mobile");
} else {
    var regex = /^[0-9]{10}$/;
    if (regex.test(mobile) === false){
        printError("mobileErr","Please enter a valid mobile");
    } else{
        printError("mobileErr","");
        mobileErr = false;
    }
}

if (country == "Select"){
    printError("countryErr", "Please select a country");
} else {
    printError("countryErr","");
    countryErr = false;
}

if (gender == ""){
    printError("genderErr", "Please select a gender");
} else {
    printError("genderErr","");
    genderErr = false;
}

if(nameErr == true || emailErr == true || mobileErr == true || countryErr == true || genderErr == true){
    return false;
} else {
    alert('You have submitted the form')
}
}