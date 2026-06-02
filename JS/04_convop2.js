let str1 = "Hello"
let str2 = " World"

let str3 = str1+str2;

console.log(str3)
/*-----------------------------------------operations------------------------------------------------------ */

console.log(2+2)  // addition
console.log(2-2)  // subtracction
console.log(2*2)  // multiplication
console.log(2**3) // power 
console.log(2/2) // divide
console.log(2%2)  //  module gives remainder

num1 = num2 = num3 = 2+2 ; // bad practice 
console.log(num1)

console.log(++str1) //  NAN

let n1 = true

console.log(n1) // true
console.log(n1++) // one
console.log(++n1) // 3 because n1 is post inc 2 then pre inc 1+2 so 3

let gc = 100
let inc_gc = gc++ 
console.log(inc_gc) // 100
inc_gc = ++gc 
console.log(inc_gc) // 102

let st = "hi"
let inc_st = st++ 
console.log(inc_st) // Nan
inc_st = ++st
console.log(inc_st) // Nan


