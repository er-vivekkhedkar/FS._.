const NewDate = new Date();

// console.log(NewDate);  // 2026-06-08T11:55:14.067Z
// console.log(NewDate.toString()); // Mon Jun 08 2026 17:25:53 GMT+0530 (India Standard Time)
// console.log(NewDate.toDateString()); // Mon Jun 08 2026

// console.log(NewDate.toLocaleString());  // 6/8/2026, 5:27:25 PM

// console.log(NewDate.toJSON()) ; // 2026-06-08T11:58:40.970Z

// console.log(NewDate.toISOString()); // 2026-06-08T11:59:03.890Z
// console.log(NewDate.toLocaleDateString()); // 6/8/2026

// console.log(NewDate.toTimeString());  // 17:31:33 GMT+0530 (India Standard Time)

const NewTime = Date.now();

// console.log(NewTime); // 1780920165808

// console.log(NewTime.toLocaleString()); // 1,780,920,203,679

// console.log(NewTime.toString());




 let MyDate = new Date(2023,0,4,5,25);

 let NewmyDate = new Date("2023-02-10")

 console.log(MyDate.toLocaleString()); // 2023-01-03T23:55:00.000Z // 1/4/2023, 5:25:00 AM
 console.log(NewmyDate.toLocaleString()); // 2023-02-10T00:00:00.000Z // 2/10/2023, 5:30:00 AM
 console.log(NewmyDate.toString()); // Fri Feb 10 2023 05:30:00 GMT+0530 (India Standard Time)

 console.log(Date.now()/1000); // 1780920876.521
console.log(Math.floor(Date.now()/1000));  // 1780920918

console.log(NewDate.toLocaleString('default' , {
    weekday : "long",  // Monday,

}));


  
 

 

 
 



