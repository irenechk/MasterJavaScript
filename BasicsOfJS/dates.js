// iterating over a string to print each character
// PRINTING values of the index
// vertical printing of characters in a string
let fname = "Irene";

for (let i = 0; i < fname.length; i++) {
    console.log(fname[i]);
}

//horizontal printing of characters in a string
let firstName = "Irene";

let result = "";
for (let i = 0; i < firstName.length; i++) {
    console.log(firstName[i]);
    result += firstName[i] + " ";
}
console.log(result);

// PRINTING INDICES of the characters in a string
let familyName = "Koner";
let result_index = " ";
for (let i = 0; i < familyName.length; i++) {
    console.log(i);
    result_index = i + " ";
}
console.log(result_index);

// to print the char in string - fux name +i
// to print the index - i

/* 
WHILE LOOP SYNTAX
while (condition) {
    // operations
    //step
}
=> checks the condition then executes
*/

let i =5;
while (i < 10) {
    console.log(i);
    i++;
}

/* DO WHILE LOOP SYNTAX
do {
    // operations
    // step
} while (condition);
=> executes first then checks the condition
*/

let j=0
do {
    console.log(j);
    j++;
} while (j < 10);

// infinite while loop
// do {
//     console.log(x);
//     x++;
// stop the loop with ctrl + c

//Date function - get current date


const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth()); //0-11
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getTime()); // milliseconds since Jan 1, 1970




