var fullName = function getFullNameAgain(){
    var fName = document.getElementById('firstname').value;
    var lName = document.getElementById('lastname').value;
    var age = document.getElementById('age').value;
    document.write(`Hello ${fName} ${lName}!! ${getStatus(age)}`);
    
}
function getStatus(){
    if(age >= 18){
        return 'You are valid to travel';
    } else {
        return 'You are not valid to travel';
    }
}