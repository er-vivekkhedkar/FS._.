// Singleton  -  When Object declare as littral then its not sigleton but if it make from constructor the its singleton

// Object.create // This is constructor way to declair

//Object Literals

const mySym = Symbol("key1"); // In Interview ask take symbol and add into object keys and show 

const JSUser = {
    name : "Vivek", // behind name is store as string means "name" like 
    "full name" : "Vivek Khedkar" , //  now it cant be access by . dot if we gave in betn space else we can access it so we have to use sq bracket method 
    age: "18",
    [mySym] : "mykey1", // currect way to symbol use 
    location : "Pune",
    email: "vivek@google.com",
    isLoggedIn : false,
    lastLoggedInDays : ["Monday", "Saturday"]

}

// Object Access Ways  -  2 ways 
console.log(JSUser.email);
console.log(JSUser["email"]); // Square Notation Way 

console.log(JSUser["full name"]);
console.log(typeof JSUser[mySym]);
console.log(JSUser[mySym]); // string \


/* Object Literal: Naturally supports Singleton pattern by creating a single instance and providing global access through a closure. It’s a straightforward approach for ensuring only one instance.

Constructor: By default, allows the creation of multiple instances. To implement Singleton behavior with a constructor, additional logic is needed to ensure only one instance is created and managed.

Thus, while object literals inherently create a single instance, constructors require extra steps to achieve the same Singleton behavior */


JSUser.email = "Vivek@chatgpt.com"
// Object.freeze(JSUser) not allow to do modification Object 
/* {
  name: 'Vivek',
  'full name': 'Vivek Khedkar',
  age: '18',
  location: 'Pune',
  email: 'Vivek@chatgpt.com',
  isLoggedIn: false,
  lastLoggedInDays: [ 'Monday', 'Saturday' ],
  Symbol(key1): 'mykey1'
} */
JSUser.email = "Vivek@youtube.com"
console.log(JSUser)

// Function declare  it act as variable in js 

JSUser.greeting = function(){
    console.log("Welcome to JS")
}
JSUser.greetingTwo = function(){
    console.log(`Welcome in Js ${this["full name"]}`) // string manipulation  - this is use ot get all inside from the objects 
}


console.log(JSUser.greeting) //undefined - [Function (anonymous)] fuction referance comes not function execute 
console.log(JSUser.greeting()) // Welcome to JS  - undefined
console.log(JSUser.greetingTwo()) //Welcome in Js Vivek Khedkar