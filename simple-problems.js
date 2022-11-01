// problem 1 

// miles to kilometer 

function milesToKm(miles){
    var km = miles * 1.609344;
    return km; 
}

var totalMiles = 200;
var result = milesToKm(totalMiles);
// console.log(result);

// check even and odd number using function 

// porblem 2
function checkEven(number){
    if(number %2==0){
        return true;
    }
    return false;
}

var myNumber = 1621;
var myResult = checkEven(myNumber);
// console.log(myResult);
// problem3
// check odd number 

function isOdd(num){
    if(num %2== 1){
        return true;
    }
    return false;
}
var mynewNumber = 1622;
var myresult = isOdd(mynewNumber);
// console.log(myresult);

// problem-4 

// check imch to feet 
var inch = 142;
var feet = inch / 0.0833333333;
// console.log(feet);

// inch to feet convert with the function 

function inchToFeet(inches){
    var myInches = inches / 0.0833333333;
    return myInches;
} 

var myInchesResult = 142;
var total = inchToFeet(myInchesResult);
console.log(total);

