//var let const
//var
//1) var is function scope
//2) var can be re declared and re initilize

function fooe(){
    var num = 10;
    //var only access in function
    console.log(num)
}
fooe()
// console.log(num)
var num1 = 12
var num1 = 20
console.log(num1)

//let
//1) let is block scope
//2) let can't br re declared but let can be re initilize

let num2 = 15
// let num2 = 20
let num3;
num3 = 5
console.log(num3)

if(true){
    //let only access in this block
    let num4 = 22
    console.log(num4)
}
// console.log(num4)

//const
//1) const is block scope
//2) const neither re declared or nor re initilize

const num5 = 4
// const num5 = 5
// num5 = 6
// console.log(num5)

for (var i =0; i<3;i++){
    const num6 = 7
    //const only access in this block
    console.log(num6)
}

// console.log(num6)

//template literals ``
var a =1
var b= 2

var result = `the sum of ${a} and ${b} is ${a+b} `
console.log(result)
//spread operator  (...)
//mergeing the element
var stu1 = ['minhaj','zahim','asad']
var stu2 = [...stu1,'tanner','owais','adeel','huzaifa']
console.log(stu2)
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";
  // change code below this line
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // change code above this line
  return failureItems;
}

const failuresList = makeList(result.failure);
//object destructuring
var stuObj={
    name:'minhaj',
    university:"UOK",
    rollNo:'1234'
}
let {name,university,rollNo} = stuObj
console.log(university)

// array destructuring
var arr = [50,86,55,1,2,3];
let [c,d] = arr
console.log(b)

//program to swap number without creating third variable
var e = 45;
var f = 77;

[f,e] = [e,f]
console.log(f)
console.log(e)

//ternary operator
var age = 20
var check = age > 30 ? "30 se bara h"
: " 30 se chota h"
//else if
var another_check = age > 30 ? "30 se bara h"
:? " 30 se chota h"
:"koi number nhi h"


function foo() {
    var a = 5
}
foo() 

//arrow function
let foo = () => () {
    console.log("this is arrow function ") 
}
foo() 

//promises
const myPromise = new promise(function (resolve,reject){
    var age = 20
    if(age===20){
        resolve('allow')
    }else{
        reject('not allow')
    }
})
.then(function (resolve){
    console.log(resolve,'resolve')
}
.catch(function(error){
    console.log(reject,'reject')
}
       
//classes
class Student() {
      constrictor (name, email) {
      this.name = name
      this.email = email
    }
}
let std1 = new ("Minhaj", "min@gmail.com" ) 
console.log(std1) 

// merging two classes
class School extends student() {
    constrictor (name, email, school){
        super(name, email) 
        this.school = school
                }
}
let std2 = new School("owais", "owaid@gmail.com", " smit") 

//try and catch
var myPromise = new promise(function (resolve,reject){
    try() {
        var age = 20
        if(age===20){
           resolve('allow')
        }else{
            reject('not allow')
    }
     catch() {}
})
.then(function (resolve){
    console.log(resolve,'resolve')
}
.catch(function(error){
    console.log(reject,'reject')
}
function () {}   
       
//async and await
async function foo() {
    await console.log("hello") 
    }
foo() 

//creating a palindrome function
// find the length of a string
const len = string.length;

// loop through half of the string
for (let i = 0; i < len / 2; i++) {

    // check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
        return 'It is not a palindrome';
    }
}
return 'It is a palindrome';

var a = function(){
    console.log('func')
        }
//Write Concise Object Literal Declarations Using Object Property Shorthand    
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name,
    age,
    gender
  };
};
//ES6 provides a new syntax to create objects, using the class keyword.
//In ES5, an object can be created by defining a constructor function and using the new keyword to instantiate the object.
class Vegetable{
  constructor(name){
    this.name = name
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

//Regex in js
//test() method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

//.match method
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

//for global and insensitive flag, use
// /abx/gi
//for range, use
// /[a-z0-0]/
//for negated character, use ^
// /[^abc]/gi
// for Match Characters that Occur One or More Times, use (+)
// /a+/gi
//for Match Characters that Occur Zero or More Times , use (*)
//  /a*/
//for lazy matching, use (?)
// /a[a-r].?/
// for Match Ending String Patterns, use ($)
//  /end$/
// for Match All Letters and Numbers use js class (\w)  \w is equal to => [A-Za-z0-9_]
// /\w/gi
//for Match Everything But Letters and Numbers, user (\W)  is equal to => [^A-Za-z0-9_]
// /\W/gi
// for Match All Numbers, use \d
// /\d/
// for Match All Non-Numbers, use \D
// /\D/
// for check username
//  /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i
//for amtch whitespace, use \s
//  /\s/
// for for everything except whitespace. use (\S)
//  /\S/

//Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; 
let result = quoteSample.match(myRegex); 

//regex cpmpleted

//
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);


//factorial
function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}

factorialize(5);

// reverse strings
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');
