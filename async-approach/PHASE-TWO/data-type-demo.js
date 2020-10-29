//String
//Boolean
//Array
//Tuple
//Enum
//Union
//Any
//Void
//Never
//Strings can be defined in single or double quotes
/*
var names: Array<string> = ["John","Smith","Karah"];

var values1: Array<string|number> = [101,"John",102,"Smith"];

var values2 : (string | number)[] = [101,"John",102,"Smith"];

var fruits: Array<string> = ['Apple','Orange','Banana'];
fruits.sort();
console.log(fruits);
console.log(fuits.pop());
fruits.push('Papaya');
console.log(fruits;)
fruits = fruits.concat(['Fig','Mango']);
console.log(fruits);
console.log(fruits.indexOf('Papaya'));


var customerCode: number = 1001;
var customerName: string = "King";

//var customerDetail: [number, string] = [1001, "King Kochhar"];
//console.log(customerDetail);

var userDetail: [number, string, boolean, number, string]; //Declaring a tuple
userDetail = [101,'King',true,20,'Admin'];
var customerDetail: [number, string][];
customerDetail = [[1001, "King"],[1002,"Clay"]];
for (var [x,y] of customerDetail){
    console.log([x,y]);
}

var newdetail: [number, string] = [1001, "Kochhar"];
console.log(newdetail[0]);
console.log(newdetail[1]);

function sayHello(): string {
    return "Hello world";
}

console.log(sayHello());

//void type can be null or undefined
//Never type:
//Cannot have any value

var value: never;
function throwError(errorMessage: string): never {
    throw new Error(errorMessage);
}

//Enum Type
//String Enum
//Numberic Enum
//Heterogeneous Enum

enum Directions{
    South,
    North,
    East,
    West
}

enum Directions2{
    South = 10,
    North,
    East,
    West
}

*/ 
