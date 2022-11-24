function saturdayFun(){
    return `This Saturday, I want to ...!`;
}
saturdayFun();

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun("bathe my dog");


// console.log(1+1);
// console.log("Razzle" + " dazzle!");

// console.log(function(){
//     console.log("Yet more razzling");
// }); -> anonymous functions -> mostly used as second parameters in event listeners

//or access anonymous function  by declaring a variable and assigning the function as its value.
// function expressions are not hoisted
const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork();

//IIFE => immediately invoked function expression
// (function(baseNumber){
//  console.log(baseNumber + 3)
// })(2);

//function level  scope -> child functions access parameters and variables defined of parent functions
// function outer(greeting, msg = "It's a fine day to learn"){
//     // const innerFunction = function(name, lang = "Python"){
//         return function(name, lang = "Python"){
//         return `${greeting}, ${name}! ${msg} ${lang}`;
//     }
// // console.log(innerFunction("student", "JavaScript"));
// }
// console.log(outer("Hello")("student", "JavaScript"));

// //closure

// // inner function -> closure
// const array = (function(thingToAdd){
//     const base = 3;
//     return [
//         function (){
//             return base + thingToAdd;
//         },
//         function (){
//           return base;  
//         },
//     ];
// })(2);
// console.log(array[0]());
// console.log(array[1]());

//  scope chain -> allows functions defined inside functions (inside functions) to access all their parent (and grandparent) scopes' variables.

function wrapAdjective(wrapper = "*"){
    return (function(msg = "special"){
     return `You are ${wrapper}${msg}${wrapper}!`
    })("a hard worker")
}
console.log(wrapAdjective());
console.log(wrapAdjective("||"))



