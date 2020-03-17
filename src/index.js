// This is an in-line comment.

/* This is a
multi-line comment */

// concatenating strings
var concatString = "My name is Ioan";
console.log(concatString.length); // 15

// Increment a Number with JavaScript
var inc = 5;
inc = inc + 1;
inc++;

// Decrement a Number with JavaScript
var dec = 5;
dec = dec - 1;
dec--;

//Compound Assignment
var myVar1 = 1;
myVar1 += 5; // myVar1 = myVar1 + 5;
console.log(myVar1); // Returns 6
var myVar2 = 10;
myVar2 -= 5; // myVar2 = myVar2 - 5;
console.log(myVar2); // Returns 5
var myVar3 = 2;
myVar3 *= 5; // myVar3 = myVar3 * 5;
console.log(myVar3); // Returns 10

// String Escaping
var sampleStr = 'Andrei said, "students are learning JavaScript".';
// var sampleStr = "Andrei said, \"students are learning JavaScript\"."; - I've put this in a comment because codesandbox autoamticaly removes the escaping
console.log(sampleStr);

// concatenating strings
var concatString = "My name is Mircea,";
concatString += " and I'm a front-end developer.";
console.log(concatString.length); // 49
console.log(concatString[0]); // M
console.log(concatString[1]); // y

// Javascript Arrays
var house = ["basement", "first floor", "second floor"];
console.log(house);

// Multi-dimensional Array
var dogBreeds = [
  ["Akita", "medium", 300],
  ["Beagle", "small", 200],
  ["Sheepdog", "big", 800]
];
console.log(dogBreeds);

// accessing data in array
console.log(dogBreeds[2]);

// Changing data in array
var myArray = [2, 4, 6];
myArray[0] = 5;
console.log(myArray); // equals [5,4,6]

// add item at the end of the array
myArray.push(7);
console.log(myArray); // myArray is now [5,4,6,7]

// remove last item from array
var last = myArray.pop();
console.log(myArray); // myArray is now [5,4,6]
console.log(last); // 7

// remove first item from array
var first = myArray.shift();
console.log(myArray); // myArray is now [4, 6]
console.log(first); // first is 5

// add item at the beggining of the array
myArray.unshift("five");
console.log(myArray); // myArray is now ["five", 4, 6]

// objects
var dog = {
  name: "Beagle",
  legs: 4,
  tails: 1,
  colors: ["white", "brown"]
};
console.log(dog);

var car = {
  make: "Ford",
  5: "five",
  model: "focus",
  "color of car": "grey"
};
console.log(car);

// dot notation
console.log(car.model); // focus

// brakets notation
console.log(car["color of car"]); // grey

// get object value based on varible value
var carModelProp = "model";
console.log(car[carModelProp]); // focus

// update object properties
car.make = "BMW";
car.model = "X5";
car["color of car"] = "black";
console.log(car);
/* make: "BMW",
5: "five",
model: "X5",
"color of car": "black" */

// adding new properties to objects
car.weels = 5;
car["spare weels"] = 1;
console.log(car);
/* make: "BMW",
5: "five",
model: "X5",
"color of car": "black",
weels: 5,
"spare weels: 1" */

delete car.weels;
delete car["spare weels"];
console.log(car);
/* make: "BMW",
5: "five",
model: "X5",
"color of car": "black" */
car.hasOwnProperty("model"); // true
car.hasOwnProperty("weels"); // false

// complex object
var complexObj = {
  id: "0001",
  type: "donut",
  name: "Cake",
  ppu: 0.55,
  batters: {
    batter: [
      { id: "1001", type: "Regular" },
      { id: "1002", type: "Chocolate" },
      { id: "1003", type: "Blueberry" },
      { id: "1004", type: "Devil's Food" }
    ]
  },
  topping: [
    { id: "5001", type: "None" },
    { id: "5002", type: "Glazed" },
    { id: "5005", type: "Sugar" },
    { id: "5007", type: "Powdered Sugar" },
    { id: "5006", type: "Chocolate with Sprinkles" },
    { id: "5003", type: "Chocolate" },
    { id: "5004", type: "Maple" }
  ]
};
console.log(complexObj);

// logical order in IF ELSE statements
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
foo(0); // "Less than one"
bar(0); // "Less than two"

// ternary operator and function with parameters
function findGreaterOrEqual(a, b) {
  return a === b
    ? "a and b are equal"
    : a > b
    ? "a is greater"
    : "b is greater";
}
findGreaterOrEqual(2, 3);

// expression functions
var expFunction = function(param1) {
  console.log("My expression function ! " + param1);
};

expFunction("HOORAY !!!");

// Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("Chirp, chirp!");
})(); // this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately

// callback functions
function createQuote(quote, callback) {
  var myQuote = "Like I always say, " + quote;
  callback(myQuote); // 2
}

function logQuote(quote) {
  console.log(quote);
}

createQuote("eat your vegetables!", logQuote); // 1

// Result in console:
// Like I always say, eat your vegetables!

createQuote("eat your vegetables!", function(quote) {
  console.log(quote);
});

// callback funtions - fake API request
function request(query, callback) {
  setTimeout(function() {
    var response = query + "full!";
    callback(response);
  }, 5000);
}

function getResults(results) {
  console.log("Response from the server: " + results);
}

request("The glass is half ", getResults);

// Result in console after 5 second delay:
// Response from the server: The glass is half full!

// EXERCISE - print in console a half pyramid patern
function createHalfPyramid(height) {
  for (var i = 1; i <= height; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
createHalfPyramid(5);
