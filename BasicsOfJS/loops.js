//for loops - iterating over a sequence

//for (start, end, step) {
    //
//} 

// for (let i = 0; i < 5; i++) {
//     alert("Hiiii");
//     if (i == 2) countinue;
// }

// iterating over a string to print each character

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