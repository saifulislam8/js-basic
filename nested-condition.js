// var danishPrice = 30;
// var potatoPrice = 15;

// var sandwitchPrice = 40;
// var packedWell = true;
// var myBudget = 25;

// if(myBudget > danishPrice ) {
//     if(packedWell == true){
//         console.log('I will eat danish')
//     }
//     else if(myBudget > potatoPrice ){
//         if(packedWell == true){
//             console.log('I will eat Potato now')

//         }
//     }
//     else if(myBudget > sandwitchPrice){
//         if(packedWell== true){
//             console.log('Ami sanwidtch khabo')
//         }
//     }
//     else{
//         console.log('amago loge parbo na re')
//     }
// }

var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 7;
var packedWell = false;

if (danishPrice < myBudget) {
    console.log('Danish kyeye danish jabo');
}
else if (butterBreadPrice < myBudget) {
    console.log('Butter bon diye cha khamu');
}
else if (toastBiscuitPrice < myBudget) {
    console.log('toast biscuit khamu');
}
else {
    console.log('Batasha diye cha khumu');
}
