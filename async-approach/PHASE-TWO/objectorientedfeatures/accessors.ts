/**
 * Public
 * Private
 * Protected
 

var num: number = 100;

class Employee {
    private empCode: number;
    private empName: string;
    private _empAge: number;

    private static country: string ="US";

    private static companyName: string = "TCS";

    get empAge(){
        return this._empAge;
    }

    constructor(eCode, eName, eAge) {
        this.empCode = eCode;
        this.empName = eName;
        this._empAge = eAge;
    }

    displayDetails(){
        console.log(`Employee Code : ${this.empCode}`);
        console.log(`Employee Name: ${this.empName}`);
        console.log(`Employee Age: ${this._empAge}`);
    }
}
var emp = new Employee(1001,"Clay",22);
emp.displayDetails();

*/