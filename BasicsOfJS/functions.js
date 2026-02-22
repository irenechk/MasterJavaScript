//in js  we can create a fxn using the function keyword

function sayHello(fname) {
    console.log(`Hello ${fname}`);
}

// calling the function
sayHello("Irene");
sayHello("Prasad");

// sayHello = fnx name
// fname = parameter

//fnx ref
sayHello;
console.log(sayHello);
console.log(typeof sayHello);

//fxn is a type of object
// class is a type of fnx

//arrow fxn
const greet = (fname) => console.log(`Hi ${fname}, welcome to JS functions!`);

greet("Charles");

const greeting = (fname, lname) => {
    console.log(`Hi ${fname} ${lname}, welcome to JS functions!`);
}

greeting("Charles");

console.log(null ===0); //false
// triple === checks value and type

// anonymous fxn
let anonFxn = function(fname) {
    console.log("I am an anonymous function");
}

anonFxn("Irene");

// to print the value in return it is necessary to use console.log when calling the function

function sum(a, b) {
    return a + b;
}
sum(2, 3); //5
console.log(sum(2, 3));

// fnxs can return another fnx
// no + undefined= NaN

console.log(sum(1)); //NaN

// to avoid this we can set default values to parameters
//function sum(a=0, b=2) 

console.log(sum(1,3));
const sumofnumbers = (para1, para2 = 1) => para1 + para2;
console.log(sumofnumbers(1,3)); //4

const sumofNumbers = (para1, para2) => para1 + 2 + '2';

console.log(sumofNumbers(1,3)); //62
//para1=1, para2=3
//1+2=3
//3+'2' = '32' string concatenation

