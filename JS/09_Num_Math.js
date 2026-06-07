const Num = 120 ;  // 120
console.log(Num);


const ANumber = new Number(400); // when use like this also get cast [Number: 400]
 

console.log(ANumber)

console.log(ANumber.toString().length); // type - string , l - 3 with toString We also get New Functions of string that can use 

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991


const NNum = 2003000020;

console.log(NNum.toLocaleString('en-In')); // it return in indian (en-In)style 2,00,30,00,020 but if we left empty then Us Standard -2,003,000,020

const SNum = 24.231 ;
console.log(SNum.toPrecision(1)) // for 2 - 24 , 3- 24.2 , 1-2e+1

console.log(NNum.toFixed(2)); // 2003000020.00
console.log(SNum);



// ------------------------- Math

console.log(Math); // Object [Math] {}

console.log(Math.PI); //3.141592653589793

console.log(Math.abs(-4)); // converts negative to positive only not vice versa 
console.log(Math.round(4.7)); // 5 round off if 0.5 up then pick next value if its 4.4 the op- 4 

console.log(Math.ceil(4.3)) // no matter what it will pick the most top value like ceil  op = 5 

console.log(Math.floor(4.9)); // op = 4 takes the floor value no matter it goes 0.5 up 

console.log(Math.random()); // Betn 0 to 1 it will take any random no. op - 0.43133499646014595 next time it change re run 

console.log((Math.random()* 10)+1 ); // formula to get any no. betn 1 to 10 op- 8.047431251974748

const min = 10 ;
const max = 100;
console.log(Math.floor(Math.random() * (max - min + 1))); // 6.7679189842744325 its ans is 6 


console.log(Math.floor(Math.random() * (max - min + 1)+min)); // 83 it doesnt return a value in 10 always above 



 

