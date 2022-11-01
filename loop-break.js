// loop break hocche , loop er mooddhe kono ekta condition dile ta jodi
// sotto hoy tahole loop off hoye jabe ar sotto na hole continue cholbe 

// for loop break and continue

var numbers = [21, 33,41, 50,51, 61, 93, 101, 108, 98];
// for(var i = 0; i < numbers.length; i++){
//     var element = numbers[i];
//     // console.log(element);
//     if(element > 50){
//         break;
//     }
// }

// break 
for(var i = 0; i < numbers.length; i++){
    var ele = numbers[i];
    console.log(ele);
    if(ele == 100){
        continue;
    }
}
document.write(" "+ele)


