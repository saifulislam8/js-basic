// factorial of a number using loop 

var factorial = 1;
for(var i = 1; i <=7; i++){
    var factorial = factorial * i;
}
// console.log(factorial)

// factorial of a number using function 
function checkFactorial(fact){
    let number = 1;
    for(let i = 1; i <= fact; i++){
        number = number * i;
    }
    return number;
}

var myfact = checkFactorial(8);
// console.log(myfact);

// problem 5

// check the leap year 

function isLeapYear(year){
    if(year %4== 0){
        return true
    }
    return false;
}

var myYear = 2022;
var myLeapYear = isLeapYear(myYear);
console.log(myLeapYear);