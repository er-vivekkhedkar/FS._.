
// 1. Array is written in brackets [  ].
// 2.Array data type is an object.
// 3.Array can contain different data types . i.e string,number,boolean,array etc.
// 4. Array is zero based indexing. It starts with zero.
// 5. Once changed its original value will also change beacause it is non primitive (refrence) type.

// ARRAY METHODs :

// 1.Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4.Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7.Join = converts to string.
// 8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
// 9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.


const num = [0,1,3,4,5 , "Hello"]


console.log(typeof(num)); // object

const Num1 = new Array(1,2,3,4)

console.log(typeof(Num1)); // object

const Heros = ["Hitman","Antman","Superman"]

console.log(Heros.length); // 3
console.log(Heros); // [ 'Hitman', 'Antman', 'Superman' ]

Heros.push("Ironman") //  Add into array 

console.log(Heros); // [ 'Hitman', 'Antman', 'Superman' , 'Ironman']

Heros.pop()

console.log(Heros); // remove the last value [ 'Hitman', 'Antman', 'Superman' ]
 
num.unshift(10)  // shift all array data and add given value in 0th position
console.log(num); // [ 10, 0, 1, 3, 4, 5, 'Hello' ]
num.shift()  // remove the first value from array 

console.log(num); // [ 0, 1, 3, 4, 5, 'Hello' ]

console.log(num.includes(10)) // include - like Q and Answer - Gives Answer in True or false in that array present or not - false
console.log(num.indexOf(19)); //  always if not present that index gives annswer -1 
console.log(num.indexOf(3)); //  id present then give their index like 3 is presnt where at 2nd position in array

const NewNum = num.join()
console.log(num); //  [ 0, 1, 3, 4, 5, 'Hello' ]
console.log(NewNum); // convert jion into string and also combine it also change data type into String - 0,1,3,4,5,Hello


// Slice , Splice 

console.log("A ",num); // A  [ 0, 1, 3, 4, 5, 'Hello' ]

const MyN1 = num.slice(1,4) // [ 1, 3, 4 ] it take 1st value to the 3 index value not include the 4th one 

console.log(MyN1); // [ 1, 3, 4 ]
 
console.log("B  " ,num); // B   [ 0, 1, 3, 4, 5, 'Hello' ]

const MyN2 = num.splice(1,4) // [ 1, 3, 4 , 5] it take 1st value to till the 4th index value  not like slice but it affect the orinial array means it make changes into main array like we get splice from 1 to 4 in new array but in original all iit went out and in orginal only remain 0th and after 4th index values C   [ 0, 'Hello' ]

console.log(MyN2); //[ 1, 3, 4, 5 ] 

console.log("C  " ,num); // C   [ 0, 'Hello' ]



