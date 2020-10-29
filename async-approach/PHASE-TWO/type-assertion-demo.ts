var value: any = 100;
var moreValue = value as number;

console.log(value);
console.log(moreValue);

console.log(typeof (value));
console.log(typeof (moreValue));

interface Customer{
    custCode: number,
    custName: string
}

var cust = <Customer>{custCode:1001,custName:"Shreya"};
var cust2 = <Customer>{custCode:1002,custName:"Clay"};
