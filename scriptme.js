// scriptme.js
// This file is part of the DEPI Front End project.
// It contains JavaScript code for session management and other functionalities.
// Author: [hussam shehata] 

//1 function return value
let Name = "hussam";
console.log("🚀 ~ Name:", Name);
 
//2 math operations
let result1 = 5 + 3; // Addition
console.log("🚀 ~ result1:", result1); // Output: 8
let result2 = 10 - 4; // Subtraction
console.log("🚀 ~ result2:", result2); // Output: 6
let result3 = 6 * 7; // Multiplication
console.log("🚀 ~ result3:", result3); // Output: 42
let result4 = 20 / 4; // Division
console.log("🚀 ~ result4:", result4); // Output: 5


//another way of performing math operations
let result5 = null; // Initializing result5 to null
result5 = 9 / 3; // Division
console.log("🚀 ~ result5:", result5); // Output: 3
result5 = 7 * 8; // Multiplication
console.log("🚀 ~ result5:", result5); // Output: 56
result5 = 7 - 8; // Subtraction
console.log("🚀 ~ result5:", result5); // Output: -1
result5 = 7 + 8; // Addition
console.log("🚀 ~ result5:", result5); // Output: 15


//3 isNaN usage
console.log( isNaN("abc") ); // true, "abc" is not a number
console.log( isNaN(123) ); // false, 123 is a number

//4 function  return even or odd 
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
console.log(isEvenOrOdd(4)); // Output: even
console.log(isEvenOrOdd(5)); // Output: odd

//5 function to concatenate two strings with space between them
function concatenateStrings(str1 , str2) {
    return str1 + " " + str2;
}
console.log(concatenateStrings("Hello", "World")); // Output: Hello World
console.log(concatenateStrings("hussam", "shehata")); // Output: hussam shehata


//6 function return the string in uppercase version
const studentName = "hussam";
console.log(studentName.toUpperCase()); // Converts studentName to uppercase

//7 function accessing string characters
console.log(studentName[2]); // Accesses the character at index 2 of studentName, which is 's'

//8 function return hello Name
let Name2 = "hussam ";
console.log('hello' , Name2); // Output: hello hussam

//9 function to check if value null or undefined
let value = null;
function checkValue(value) {
    if (value === null) {
        return "Value is null";
    } else if (value === undefined) {
        return "Value is undefined";
    }
}
console.log(checkValue(value)); // Output: Value is null 
console.log(checkValue(undefined)); // Output: Value is undefined

// function to check if value is null or undefined(another way)
function checkValue2(value) {
    return value === null ? "Value is null" : value === undefined ? "Value is undefined" : "Value is defined";
}
console.log(checkValue2(null)); // Output: Value is null
console.log(checkValue2(undefined)); // Output: Value is undefined

//10 random number generation
console.log(2 + (4 - 2) * Math.random()) ; // Generates a random number between 2 and 4
console.log(Math.floor(2 + (4 - 2) * Math.random())); // Generates a random number between 2 and 4 and rounds it down to the nearest integer


//11
function checknumbervalue(num){
    if (num > 0) {
        return "positive";
        }
    else if (num < 0) {
        return "negative";
        }
    else {
        return "zero";
    }
}
console.log(checknumbervalue(5));  // Output: positive
console.log(checknumbervalue(-3)); // Output: negative
console.log(checknumbervalue(0));  // Output: zero


//12 function to evaluate an expression
eval("2 + 2"); // Evaluates the expression "2 + 2" and returns 4
console.log(eval("2 + 2")); // Output: 4

function evaluateExpression(expression) {
    return eval(expression);
    }
console.log(evaluateExpression("3 * 4")); // Output: 12

//end of scriptme.js
//This file is part of the DEPI Front End project.
//bye bye captain