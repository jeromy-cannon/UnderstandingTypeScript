console.log("It works!");
const addNumbers = function (number1: number, number2: number): number {
    return number1 + number2;
}
console.log(addNumbers(10, 3));

// new arrow functions
const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(5, 6));

const greet = () => {
    console.log('hello!');
};
greet();

const greetFriend = (friend: string) => console.log(friend);
greetFriend("Manu");

const countdown = (start: number = 0): void => {
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log('done', start);
}
countdown();
countdown(10);

// rest and spread
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
// spread operator
console.log(Math.max(...numbers));

// rest operator
function makeArray(name: string, ...args: number[]) {
    return args;
}
console.log(makeArray("Jeromy", 1, 2));

// tuples, these two functions are equivalent
function printInfo(name: string, age: number) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
function printInfo2(...info: [string, number]) {
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
printInfo("Jeromy", 41);
printInfo2("Jeromy", 41);

// destructuring
const myHobbies = ['meditation', 'hermetics', 'minecraft', 'self-improvement'];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userData = { userName: "jeromy", age: 41 };
const { userName: myName, age } = userData;
console.log(myName, age);

// template literals
const userName = "Jeromy";
const greeting = `This is a heading!
I'm ${userName},
This is cool!
`;
console.log(greeting);

// Re-write the below Code using the ES6 Features you learned throughout this Module.

// Exercise 1 - Maybe use an Arrow Function?
// var double = function(value) {
//     return value * 2;
// };
// console.log(double(10));
const double = (value: number) => value * 2;
console.log(double(10));

// Exercise 2 - If only we could provide some default values...
// var greet = function (name) {
//     if (name === undefined) { name = "Max"; }
//     console.log("Hello, " + name);
// };
// greet();
// greet("Anna");
const greet2 = (name: string = "Max"): void => console.log("Hello, " + name);
greet2();
greet2("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
// var numbers = [-3, 33, 38, 5];
// console.log(Math.min.apply(Math, numbers));
const numbers2 = [-3, 33, 38, 5];
console.log(Math.min(...numbers2));

// Exercise 4 - I have to think about Exercise 3 ...
// var newArray = [55, 20];
// Array.prototype.push.apply(newArray, numbers);
// console.log(newArray);
const newArray = [55, 20, ...numbers2];
console.log(newArray);

// Exercise 5 - That's a well-constructed array.
// var testResults = [3.89, 2.99, 1.38];
// var result1 = testResults[0];
// var result2 = testResults[1];
// var result3 = testResults[2];
// console.log(result1, result2, result3);
const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
// var scientist = { firstName: "Will", experience: 12 };
// var firstName = scientist.firstName;
// var experience = scientist.experience;
// console.log(firstName, experience);
const scientist = { firstName: "Will", experience: 12 };
const { firstName, experience } = scientist;
console.log(firstName, experience);