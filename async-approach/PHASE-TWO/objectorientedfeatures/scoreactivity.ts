class Student{
    private ID:number;
    private Name:String;
    private Age:number;
    constructor(ID:number,Name:string,Age:number){
        this.ID=ID;
        this.Name=Name;
        this.Age=Age;
    }
    displayDetails():void{
        console.log(`ID : ${this.ID}, Name : ${this.Name}, Age : ${this.Age}`);
    }
}

class Marks extends Student{
    protected ObjMarks: number;
    protected SubjMarks: number;
    constructor(ID:number,Name:string,Age:number,ObjMarks:number,SubjMarks:number){
        super(ID,Name,Age);
        this.ObjMarks=ObjMarks;
        this.SubjMarks=SubjMarks;
    }
    displayDetails():void{
        super.displayDetails();
        console.log(`ObjMarks : ${this.ObjMarks}, SubjMarks : ${this.SubjMarks}`);
    }
}

class Sports extends Marks{
    protected Score: number;
    constructor(ID:number,Name:string,Age:number,ObjMarks:number,SubjMarks:number,Score:number){
        super(ID,Name,Age,ObjMarks,SubjMarks);
        this.Score=Score;
    }
    displayDetails():void{
        super.displayDetails();
        console.log(`Score : ${this.Score}`);
    }
}

class Result extends Sports{
    private totalMarks:number;
    private averageMarks:number;
    calculateResult(){
        this.totalMarks = this.ObjMarks + this.SubjMarks + this.Score;
        this.averageMarks = this.totalMarks/3;
        console.log(`Total Makrs: ${this.totalMarks}, Avg Marks: ${this.averageMarks}`)
    }
}

var result = new Result(123,"King",23,56,78,45);
result.displayDetails();
result.calculateResult();