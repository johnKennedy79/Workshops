//logging strings on a console

console.log("Hello world")

// variables
// A bucket we can put info into 

let bucket = "water";

//declarations look like a sentance 

let myName = "I am John.";
let age = 45;

console.log(myName)
// console.log("myName")
console.log(age)
let dobday = 17;
let dobmonth = 7;
let dobyear = 1979;
let dateday = 3;
let datemonth = 7;
let dateyear = 2024;
console.log(dateyear - dobyear)
console.log(datemonth - dobmonth)
console.log(dateday - dobday)
let myAge = "I will be 45 in 14 days."; 
console.log(myAge)
//concatination
let result = myName.concat(" ", myAge);
console.log(result)


let str1 = "Hello";
let str2 = "World";

let str3 = str1 + str2; // HelloWorld
let str4 = str1 + " " + str2; // Hello World

//Template Literals
let templateLit = `${str1} ${str2}`;
let bday = `${myName} ${myAge}`;
// document.getElementById("demo").innerHTML = bday;

//naming
let flatcase
let SCREAMINGCASE

let snake_case
let PascalCase
let camelCase;
let nUTcaSe
let strName = "Hungarian case starts with the type descriptor then the meaning descriptore"

//ARITH
// +, -, *, /, % = MODULAR REMAINDER

// reassign a valu to a variable 
let x = 5
x=10 
// value of a was 5 but is now 10 

//numbers 
let number = 1;
console.log(number)
let mints = 10;
let chocolates = 5;
let sweets = mints + chocolates;
console.log(sweets)
// strings
let firstName = "John"; 
let lastName = "Kennedy";
let fullName = firstName + " " + lastName
console.log(fullName)
//string literals
let fName = "John";
let mName = "Martin Ross";
let lName = "Kennedy";
let fullName1 = `${fName} ${mName} ${lName}`;
console.log(fullName1)
// length including spaces
console.log(`${fullName1} is ${fullName1.length} characters long`);
// booleans
let isTrue = true;
let isFalse = false;
console.log(isTrue)
console.log(isFalse)
// typeof 
console.log("the type of sweets is " + typeof sweets);
console.log("the type of fullName1 is " + typeof fullName1);
console.log("the type of isFalse is " + typeof isFalse);
// undefined and null undefined is used when a variable has been declared, but not assigned a value. You shouldn't deliberately set something to undefined.

//null is used when a variable is deliberately left blank. It's a way to say "this variable intentionally empty". It's useful for clearing any value that you might not want to keep anymore.
let age2 = null;
console.log(age2)
// Comparisons
// Comparisons make use of booleans. If you compare two numbers, you get a boolean in return: true or false.

// Is 1 greater than 2? False. Is 2 greater than 1? True. Are they the same? False.
let a=1;
let b=2;
let isaGreaterThanb = a>b;
let isaLessThanb = a<b;
let isaEqualTob = a===b;
console.log(isaGreaterThanb)
console.log(isaLessThanb)
console.log(isaEqualTob)

let mvpl = "PHP not Java Script but I like the coffee"
let courseDay = 3;

const sentance = `My favourite programming language is ${mvpl}. We're now on day ${courseDay} of the course.`;
console.log(sentance)

