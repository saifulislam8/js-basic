// push => array er moddhe last ekta element ke add korte gele push use kora hoy 

var books =['programmer', 'hablu', 'gymnasium', 'choddogusti', 'battery'];
// console.log(books);
books.push ('diary');
// console.log(books);

// pop => array er moddhe last element ke baad dile hole pop use korte hoy 

var numbers = [21, 33, 78, 89, 32, 11, 26];
numbers.pop();
// console.log(numbers)

// shit => array er moddhe first er element ke baad dile hole shift use korte hobe

var friendsName = ['Rashed', 'Noyon', 'jalal', 'Bablu'];
friendsName.shift();
// console.log(friendsName);

// unshift => array er moddhe first element add korte hole unshift use korte hobe 

var num = [44, 88, 91, 90, 67];
num.unshift(11);
// console.log(num);


// specific element add form an  array use spilce

var array = ['bangladesh', 'india', 'pakistan', 'south africa'];
array.splice(2, 0, 'zimbabuwe');
// console.log(array);

// specific element remove from an array in javascript 
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var removed = arr.splice(1,2,4);
console.log(removed);

// splice always change the main array 
var number = [21, 45, 67, 90, 44];
console.log(number);
// number.splice(1,3 , 41, 88, 81 );
// console.log(number);
number.splice(-1, 3, 87, 54, 31)
console.log(number);

