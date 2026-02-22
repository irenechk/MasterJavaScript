let challenge = '50 days of javascript';
console.log(challenge);

// find length

console.log(challenge.length);

// uppercase
console.log(challenge.toUpperCase());

// lowercase
console.log(challenge.toLowerCase());

//slicing
console.log(challenge.substring(0,2));

console.log(challenge.substring(3,22));

// includes
console.log(challenge.includes('Script'));

// split
console.log(challenge.split(' '));

// split into array of characters
console.log(challenge.split(''));


// Array of companies
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

// replace
console.log(challenge.replace('javascript', 'Python'));

// charAt
console.log(challenge.charAt(15));

// charCodeAt
console.log(challenge.charCodeAt('J'));

// indexOf
console.log(challenge.indexOf('a'));

//index of first occurrence of 'because'
let phrase = 'You cannot end a sentence with because because because is a conjunction';
console.log(phrase.indexOf('because'));

// lastIndexOf
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.lastIndexOf('conjunction'));


