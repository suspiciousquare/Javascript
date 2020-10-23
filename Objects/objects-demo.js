var emp1 = {
    name: 'King Kochhar',
    age: 23,
    city:'Delhi'
}

var emp2 = {
    name: 'Gautam Bhalla',
    age:34,
    city: 'Mumbai'
}

var person = {
    firstName: 'King',
    lastName: 'Smith',
    getFullName: function (){
        return `${this.firstName} ${this.lastName}`
    }
}

var person = {
    firstName: 'King',
    lastName: 'Smith',
}

var person = {};

console.log(person.firstName);
console.log(person["firstName"]);
console.log(person.getFullName());