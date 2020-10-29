var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(ID, Name, Age) {
        this.ID = ID;
        this.Name = Name;
        this.Age = Age;
    }
    Student.prototype.displayDetails = function () {
        console.log("ID : " + this.ID + ", Name : " + this.Name + ", Age : " + this.Age);
    };
    return Student;
}());
var Marks = /** @class */ (function (_super) {
    __extends(Marks, _super);
    function Marks(ID, Name, Age, ObjMarks, SubjMarks) {
        var _this = _super.call(this, ID, Name, Age) || this;
        _this.ObjMarks = ObjMarks;
        _this.SubjMarks = SubjMarks;
        return _this;
    }
    Marks.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        console.log("ObjMarks : " + this.ObjMarks + ", SubjMarks : " + this.SubjMarks);
    };
    return Marks;
}(Student));
var Sports = /** @class */ (function (_super) {
    __extends(Sports, _super);
    function Sports(ID, Name, Age, ObjMarks, SubjMarks, Score) {
        var _this = _super.call(this, ID, Name, Age, ObjMarks, SubjMarks) || this;
        _this.Score = Score;
        return _this;
    }
    Sports.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        console.log("Score : " + this.Score);
    };
    return Sports;
}(Marks));
var Result = /** @class */ (function (_super) {
    __extends(Result, _super);
    function Result() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Result.prototype.calculateResult = function () {
        this.totalMarks = this.ObjMarks + this.SubjMarks + this.Score;
        this.averageMarks = this.totalMarks / 3;
        console.log("Total Makrs: " + this.totalMarks + ", Avg Marks: " + this.averageMarks);
    };
    return Result;
}(Sports));
var result = new Result(123, "King", 23, 56, 78, 45);
result.displayDetails();
result.calculateResult();
