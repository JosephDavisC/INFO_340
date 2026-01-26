'use strict';

// === BASIC OUTPUT ===
console.log('Hello, World!');
// Output: Hello, World!

console.log('I Love Coffee');
// Output: I Love Coffee

// === VARIABLES ===
let favoriteDrink = 'Ice Americano';
favoriteDrink = "Iced Acmericano"
console.log('My favorite drink is ' + favoriteDrink);
// Output: My favorite drink is Iced Acmericano

const birthYear = 1999;
console.log('I was born in ' + birthYear);
// Output: I was born in 1999

// === TYPE COERCION ===
console.log('40' - 2);
// Output: 38 (string '40' coerced to number)

const num1 = 10;
const str = '10';

const areSame = ('' == false);
console.log(areSame);
// Output: true (empty string is falsy, coerced to false)

// === TRUTHY/FALSY ===
const isWarm = undefined;
if (isWarm) {
    console.log("It's warm outside!");
}
// Output: (nothing - undefined is falsy)

// === ARRAYS ===
const lettersArray = ['a', 'b', 'c'];

console.log(lettersArray[2]);
// Output: c

console.log(lettersArray[3]);
// Output: undefined (out of bounds)

lettersArray[1] = 'Beta';

console.log(lettersArray[1]);
// Output: Beta

// === OBJECTS ===
const agesObj = {
    'Alice': 30,
    'Bob': 25,
    'Charlie': 35
};

console.log(agesObj);
// Output: {Alice: 30, Bob: 25, Charlie: 35}

// === ARRAYS - MORE EXAMPLES ===
const thingsArray = ['dogs', 2.5, true, [3,4,0]]; //can mix types
const emptyArray = []; //an array with no values in it

console.log(lettersArray[0]);
// Output: a

console.log(lettersArray[4]);
// Output: undefined

lettersArray[5] = 'f'; //assigning out of bounds grows array
console.log(lettersArray);
// Output: ['a', 'Beta', 'c', empty, empty, 'f']

console.log(lettersArray.length);
// Output: 6

lettersArray.push('z'); //add 'z' to the end

// === NESTED ARRAYS ===
const dinnerOptions = [
    ['chicken', 'mashed potatoes', 'mixed veggies'],
    ['steak', 'seasoned potatoes', 'asparagus'],
    ['fish', 'rice', 'green beans'],
    ['portobello steak', 'rice', 'green beans']
];

console.log(dinnerOptions.length);
// Output: 4

const fishOption = dinnerOptions[2];

console.log(fishOption[0]);
// Output: fish

console.log(dinnerOptions[2][0]);
// Output: fish

// === NESTED OBJECTS ===
const person = {
    firstName: 'Alice',
    lastName: 'Wong',
    age: 40,
    favorites: {
        music: 'jazz',
        food: 'pizza',
        numbers: [12, 42]
    }
};

const name = person['firstName'];
person['lastName'] = 'Jones';
console.log(person['firstName'] + ' ' + person['lastName']);
// Output: Alice Jones

const chosenValue = "food";
const favFood = person['favorites'][chosenValue];
// favFood = 'pizza'

const firstNumber = person['favorites']['numbers'][0];
// firstNumber = 12

person['favorites']['numbers'].push(7);

// === DATA TABLES (Array of Objects) ===
const people = [
    {name: 'Ada', height: 64, weight: 135},
    {name: 'Bob', height: 74, weight: 156},
    {name: 'Chris', height: 69, weight: 139},
    {name: 'Diya', height: 69, weight: 144},
    {name: 'Emma', height: 71, weight: 152}
];

console.log(people);
// Output: (5) [{name: 'Ada', height: 64, weight: 135}, ...]
