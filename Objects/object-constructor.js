/*function Person(fName, lName){
    this.firstName = fName || 'Unknown',
    this.lastName = lName || 'Unknown',
    this.getFullName = () => {
        return `${this.firstName} ${this.lastName}`
    }
}*/


function Person(fName, lName){
    this.firstName = fName || 'Unknown',
    this.lastName = lName || 'Unknown',
    Object.defineProperties(this, {
        "firstName":{
            get: function(){return this.firstName},
            set: function(value){this.firstName = value}
        },
        "lastName":{
            get: function(){return this.lastName},
            set: function(value){this.lastName = value}
        }
    })
}

var person = new Person('King','Kochhar');
console.log(person.firstName);
console.log(person.lastName);