// Primitive Data-types

let name = "Vivek" // String - Collection of characters represent by quate
let age = 18  // number - numeric value represent - includes both integer and float also speacial type Nan 
let isLoggedIn = true // Boolean - Represent Boolean Value Either true or false
let state = null // use it when dont want to show any number ex if wheather app has error and we use 0 then 0 is also a temp so so we use null it has some unknown value  called it null value 



let temp ; // undefined - the value is not defined - A variable that has been declared but not initialized with a value is automatically assigned the undefined value. It means the variable exists, but it has no value assigned to it.

let s1 = Symbol("Geeks");  //  Represents a unique and immutable value (added in ES6)
let b = BigInt("0b1010101001010101001111111111111111");
console.log(b); // Used for very large numbers beyond the safe integer limit (added in ES2020)

console.log(typeof name) // result will be string 
console.log(typeof null); // the type of  null is - object 
console.log(typeof undefined) //  the result is undefined 

//Non primitive data types -
//  The data types that are derived from primitive data types are known as non-primitive data types. It is also known as derived data types or reference data types.

// 1. Objects -JavaScript objects are key-value pairs used to store data, created with {} or the new keyword. They are fundamental as nearly everything in JavaScript is an object.

let gfg = {
    type: "Company",
    location: "Noida"
}
console.log(gfg.type)

// 2. Array -Used to store ordered collections of data
let colors = ["red", "green", "blue"];
let a2 = [1, "two", { name: "Object" }, [3, 4, 5]];

// 3. Function - A function in JavaScript is a block of reusable code designed to perform a specific task when called.
function greet() {
  console.log("Hello!");
}

// 4. Dates – Used to work with date and time 
let today = new Date();