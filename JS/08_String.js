const Name = 'Vivekk';
const web = 'https://vivekkhedkar.com';

// console.log(Name + web + "Value"); // Bad Habits of writing a string 
// String is a collection of characters 

console.log(`My name is ${Name}. My Portfolio link is ${web}`);

const GameName = new String('Vivekk-web-developer'); // another form to declare a string 

console.log(Name.concat(" Hi ")); // Vivekk Hi

console.log(GameName.charAt(2)); //v
console.log(GameName.indexOf('k'));  //4

const NewString = new String("  Coder ")

console.log(NewString)  // [String: '  Coder ']
console.log(NewString.trim())  //Coder

console.log(Name.toLocaleUpperCase()) // VIVEKK also has a for lowercase

console.log(GameName.__proto__); //{} in browser we can see all index character it has 

console.log(NewString.substring(2,6)); //Code 

const NoString = Name.slice(1,5) ; // ivek
console.log(NoString);

const url = "https://vivekk%20/Vivek";

console.log(url.replace('%20','-'));  // https://vivekk-/Vivek

console.log(url.includes('Vivek')); //true

console.log(GameName.split('-')) // [ 'Vivekk', 'web', 'developer' ]

console.log(GameName)