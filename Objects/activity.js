var number = 100;

function MyFunc(){
    var number = 200;
    console.log(number);
    console.log(this.number)
}

var obj = new MyFunc();
console.log(obj.number);
