/**
 * Array FUnction is the concept of ES6
 * an alternative way to write a shorter syntax compared to the functions of function expressions
 

 function addition(a,b){
     return a+b;
 }
add = function addition(a,b){
    return a+b;
}
add = function(a,b){
    return a+b;
}
 console.log(addition(100,200));
 */
var add = (num1,num2) => {return num1+num2}
add(100,200);
let numbers = [4,2,6];
numbers.sort((a,b) =>b-a);
console.log(numbers);