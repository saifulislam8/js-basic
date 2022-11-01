// function declaration 

// function ke call korte hobe na hole function kaj korbe na 

function startTheFan(){
    // console.log('Start The Fan Now');
}
startTheFan();


// function parameter and function return 

// function e return neo aborsok noy, ki function likha hoy er 
// upore depend korbe function ke return nite hobe kina

function bringingSingara(taka){
    var singaraPrice = 10;
    singaraQuantity = taka / singaraPrice;
    return singaraQuantity;

}

var money = 300; 
var totalSingara = bringingSingara(money);
// console.log(totalSingara)


// add 2 numbers using function 

function added(num1, num2){
    var total = num1 + num2;
    return total;
}

var first = 21;
var second = 20;
var totalNumber = added(second, first);
console.log(totalNumber);