// multiple objects with multiple properties 

var students ={ name:'Saiful' , id:192400012, subjet:'cse'};

// console.log(students);

// multiple ways to get and set a object value 
// get 
var laptop = {
    name: 'HP',
    processor:'100Gb',
    ram:'8Gb',
    price:600000
}

var laptopPrice = laptop.price;
// console.log(laptopPrice);

// set a object property value 
// 1st way 
laptop.name = 'Dell';
console.log(laptop);

// second way 
laptop['ram'] = '12Gb';
console.log(laptop);

// 3rd way to set a value in a object  property

var laptopProcessor = 'processor';
laptop[laptopProcessor] = '2000GB';
console.log(laptop);

