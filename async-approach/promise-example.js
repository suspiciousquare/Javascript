const { resolve } = require("path");

var promise = new Promise(function(resolve, reject){
    var isTrue = true;
    if(isTrue) {
        resolve("Your status is active")
    } else {
        reject("Your status is inactive")
    }
})

promise.then(function (data){
    console.log(data);
}).catch(function (error){
    console.log(error);
});