const id= 1; // constant value always never can declare again and change the value - block scope
let name = "Vivek";  // let can be declare once and change value - block scope
var role = "Developer"; // var has one issue that its global scope so if with same declaration change value in one scope other fuction scope value also change so to solve that progammer introduce let variable - prefer not to use 
income = 1200 ;  // 


console.log(id);
console.table([id,name,role,income]);

// const id= 2;  can't declare again declare causes error
name = "Shivam";  // if let is already declare then use just variable name dont use variable
var role = "App Dev"; 
income = 1300 ;  

let tax ; // Only declare and not initialise means result will be - Undefined 

console.log(id);
console.table([id,name,role,income]);


// ; semi-colon is optional can use or not using also works 


