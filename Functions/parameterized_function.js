function sayHello(name){
    //console.log('Hello ' + name + '!');
    //console.log(`Hello ${name}`);
    
}
function getFullName(firstName, lastName){
    alert(`${firstName} ${lastName}`);
    
}
function getFullNameAgain(){
    var fName = document.getElementById('firstname').value;
    var lName = document.getElementById('lastname').value;
    alert(`${fName} ${lName}`);
}

sayHello('Clay');
getFullName('Clay','Fonseca');