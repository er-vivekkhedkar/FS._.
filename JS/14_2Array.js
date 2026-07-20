const marval_heros = ["Spiderman", "Thor" , "Captain America" , "Ironman"]
const dc_heros = ["Batman" , "Superman" , "Flash"]

// marval_heros.push(dc_heros)

console.log(marval_heros); /* [
  'Spiderman',
  'Thor',
  'Captain America',
  'Ironman',
  [ 'Batman', 'Superman', 'Flash' ]
] */

  // It consider another array as single element in JS  - Its Not Good Practice - When Use  Push

  // console.log(marval_heros[4][1]) // Access inside element -  Superman
 
const heros = marval_heros.concat(dc_heros)
console.log(heros); /* [
  'Spiderman',
  'Thor',
  'Captain America',
  'Ironman',
  'Batman',
  'Superman',
  'Flash'
] */
// Concat returns New Array So We have to store it in new variable else it just return  - [ 'Spiderman', 'Thor', 'Captain America', 'Ironman' ] , Limmitation of concat is we can give only one value 
// So Most Of Dev Use Spread - Eg. A Glass Drop From Top And it spread in pieces , We can give more then one values inside [...elementname]

const new_heros = [...marval_heros , ...dc_heros]

console.log(new_heros) // Ssame result as above just we can more then one element 

const Array1 = [1,2,3,[4,5,6],7,[8,[9,10]]] // its a situation where array inside another array 
const Array2 = Array1.flat(Infinity) // it just make it into array so we have array another aaray infinity gose deeper as array but we can also give a depth by number 
console.log(Array2);

/* [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10    
  It makes one sigle array */

  // Sometimes We have to scrap data from the website and that can be in any form like string , object , nodelist - We can loop is Array so we have to convert it 

console.log(Array.isArray("Vivek"));  // is Array tells us its Array or not in boolean form - false or true  return false 
console.log(Array.from("Vivek")); //  From Convert into the Array any element that given  -- [ 'V', 'i', 'v', 'e', 'k' ]
console.log(Array.from({name :"Vivek"})); // Interesting case for Interview  In object it gives a little problem it gives empty array because we have to spacify we want key or value - []

let score1 = 100;
let Score2 = 200;
let Score3 = 300 ;
 
console.log(Array.of(score1,Score2,Score3)); // returns a new array from set of Array - [ 100, 200, 300 ]
