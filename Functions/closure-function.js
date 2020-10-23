/*function outerFunction(){
    var count=1;
    function innerFunction(){
        console.log(count);
    }
    return innerFunction;
}

var innerFuncResult = outerFunction();
innerFuncResult();
*/
function Counter(){
    var counter = 0;
    function increaseCounter(){
        return counter += 1;
    }
    return increaseCounter;
}

var counter = Counter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());