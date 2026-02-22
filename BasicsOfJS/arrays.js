// ARRAYS CAN CONTAIN MULTI DATA TYPES

// Empty array
let emptyArray = [];
console.log(emptyArray);

// Array with 5 elements
let fruits = ["Apple", "Banana", "Cherry", "Mango", "Raspberry"];
console.log(fruits);

// Find length of array
console.log(fruits.length);

// Accessing array items using index
console.log(fruits[0]); // First item
console.log(fruits[fruits.length - 1]); // Last item
console.log(fruits[Math.floor(fruits.length / 2)]); // Middle item

// FLOOR - rounds down to nearest integer

let mixedDataTypes = ['Irene', 250, true, null, 45.53, {country: 'Japan', city: 'Tokyo'}, [1, 2, 3]];
console.log(mixedDataTypes);

// Array of IT companies
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.log(itCompanies.length);

// Accessing first, middle, last company
console.log(itCompanies[0]); // First
console.log(itCompanies[Math.floor(itCompanies.length / 2)]); // Middle
console.log(itCompanies[itCompanies.length - 1]); // Last

// Printing each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

// Printing companies in uppercase
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}

// Joining array elements into a string
let companiesString = itCompanies.join(', ');
console.log(companiesString + " are big IT companies.");