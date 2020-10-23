function getFullName(firstName, lastName = 'Smith'){
    console.log(`${firstName} ${lastName}`);
}

getFullName('King');
/* Rest Parameters*/
function add(...numbers){
    var total = 0;
    for(var a of numbers){
        total += a;
    }
    console.log(total);
}

add(10,20,30,40,50,60);

/*Spread parameters*/

var odd = [1,3,5,7];
var even = [2,4,6,8];
var combined = [...odd, ...even];
