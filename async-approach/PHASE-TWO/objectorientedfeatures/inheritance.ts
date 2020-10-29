//Inheritance helps in reusability of code and to reduce the time and efforts of developer
//We can acquire the features and behaviousrs of a class into another class

class Person {
    private name: String;
    private age: Number;
    private city: String;
    
    constructor(name:string,age:number,city:string){
        this.name = name;
        this.age = age;
        this.city = city;
    }

    displayDetails(): void {
        console.log(`Name : ${this.name} : Age : ${this.age} : City : ${this.city}`);
    }
}

class Employee extends Person{
    private salary: number;
    private jobType: string;

    constructor(name:string,age:number,city:string,salary:number,jobType:string){
        super(name, age, city);
        this.salary = salary;
        this.jobType = jobType;
    }

    displayDetails(): void{
        super.displayDetails();
        console.log(`Salary : ${this.salary} : JobType : ${this.jobType}`);
    }
}

var emp = new Employee("Clay",22,"Bentonville",60000,"Engineer");