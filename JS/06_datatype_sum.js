// 2 type of data types mainlly 

//1. Primitive Data Types

// 7 types - String , Number , Null , Boolean , Undefined , Symbol , BigInt
// use typeof to get a data type store in variable 

const name = "Hey Nice to see you !"; // typeof - string 
const age = 13 ; // typeof - number
const score = 14.5 ; // typeof - Nuumber NO matter it has float or long 
let num = null ; // its empty but when do typeoff - object 

const isLoggedIn = false;  // typeof - boolean

let beautyScore ; // Undefined also can like Declare Let beauty =  undefined typeof - undefined 

let id1 = Symbol('123')
let id2 = Symbol('123')

let dreamNum = 99938938938499489494888999899999999999999999999999999999999999999n // typeOf - BigInt - use  n for big int at number last 

console.log(id1)  // Symbol(123)
console.log(id2)  // Symbol(123)
console.log( id1 === id2) // op is false because it can store same thing but its not same 
console.log(typeof id1) // Symbol



// Js is dynamic type language not static because in this data types not use in declaration 
// Dynamic Typing (JavaScript): You do not need to specify a data type when you declare a variable. A single variable can start as a number and later be reassigned to a string or an object.
// Static Typing (e.g., TypeScript): Variables are bound to a specific data type. The code will fail to compile if you try to assign the wrong type of value to a variable


// Non-Primitive Data Types - referance type

// Array , Object , Function

const scorecard = ["1" , '2' , '3']; // Array - result will be [1,2,3] typeof - object


let idcard = {
    idc : 1 ,
    namec : "Willu Sommi",
    age: "Sweeet " + "16"

}// object uses a {} curly braces - op - { idc: 1, namec: 'Willu Sommi', age: 'Sweeet 16' }  typeof - object

const myfun = function () {
    let hi = "Hello"
    return hi // if onnt use return then it gives ans like  undefined so mention the variable so return value 
} // that how we declare function typeof - function
let res = myfun()
console.log(res) // Hello 
console.log(typeof myfun)



