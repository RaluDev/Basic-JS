//Function arguments & parameters
// firstName and lastName are parameters
function fullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}
// 'Bruce' and 'Wayne' are arguments;
// they are passed directly when the function is called
fullName("Bruce", "Wayne");
// arguments can be previously-defined vars
var fName = "Bruce";
var lName = "Wayne";
fullName(fName, lName);

// Sending parameters by value
/*
Primitive parameters (such as a number) are passed to functions by value
    ○ the value is passed to the function, but
      if the function changes the value of the
      parameter, this change is not reflected
      globally or in the calling function
    ○ it’s like creating a copy of that value inside the function
*/
function sum(a, b) {
  console.log("sum", a + b);
  a = 0;
  console.log(a); //outputs 0
}
var a = 2,
  b = 3;
sum(a, b); //outputs 5, 0
console.log(a); //outputs 2

//Sending parameters by reference
/**Non-primitive parameters are passed to functions by reference
   ○ If you pass an object (such as an
      array or a user-defined object) as a
      parameter and the function
      changes the object's properties,
      that change is visible outside the function
*/
function fullName2(name) {
  console.log(name.first + " " + name.last);
  name.last = "Batman";
  console.log(name.last); // 'Batman'
}
var name = {
  first: "Bruce",
  last: "Wayne"
};
fullName2(name); // 'Bruce Wayne', 'Batman'
console.log(name.last); // 'Batman

/*Returning values from functions
   ● To return values from function we can use the reserved keyword return.
   ● If we don’t specifically return nothing from a function
      undefined will be returned automatically.
   ● Note: After the return statement nothing will be executed.
*/
function sum2(a, b) {
  return a + b;
  // nothing will execute here
}
// combining function calls with expressions
var age1 = sum2(10, 10) + sum2(2, 3);
console.log(age1); // 25
// function calls inception!
var age2 = sum2(sum2(10, 10), sum2(2, 3)) + 2;
console.log(age2); // 27
// recursive function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
factorial(20);

// GLOBAL SCOPE
// global variables, accessible from everywhere
var x = 1;
window.x = 1;
x = 1;

//LOCAL SCOPE
function myFunction() {
  var name = "Todd";
  console.log(name); // Todd
}
/* Uncaught ReferenceError: name is not defined */
console.log(name);

//Function Scopes Rules
/* Variables defined inside a function cannot be
   accessed from anywhere outside the
   function, because the variable is defined only
   in the scope of the function.
● A function can access all variables and
  functions defined inside the scope in which it  is defined
● A function defined inside another function
   can also access all variables defined in its
   parent function and any other variable to
   which the parent function has access.
 */
var globalX = 2;
function sum(localA, localB) {
  // can access localA and localB here
  console.log("sum", localA + localB);
  // can also access globalX here
  console.log(globalX);
}
// can’t access localA and localB here

//Closures
// A function defined inside another function can also access all variables
// defined in its parent function and any other variable to which the parent
// function has access. This is called scope chain
// The inner function has 3 scope chains:
// own scope (variables defined between its curly brackets),
// outer function’s variables
// it has access to the global variables.
var global = "Global!";
function greetPerson(name) {
  function greet(greeting) {
    console.log(greeting + name);
    console.log(global);
  }
  greet("Hello");
}
greetPerson();

//The scope chain is saved to the
//function object at the time of its creation.
// In other words, when an inner
//function is returned from an outer
//function, all the variables of the
//outer function are saved in the
//context of the inner function

/*Closures are functions together with an execution context (all the variables in the scope chain)
A closure is created every time an enclosing outer function is called. */

function greetPerson2(name) {
  function greet(greeting) {
    console.log(greeting + " " + name);
  }
  return greet; // returns a function!
}

var greetAna = greetPerson2("Ana");
var greetAna = function(greeting) {
  console.log(greeting + "Ana");
}

greetAna("Hello"); // Hello Ana
greetAna("Bye"); // Bye Ana
var greetBen = greetPerson2("Ben");
greetBen("Hello"); // Hello Ben

// EXERCISE 1
/* the function numberGenerator creates a local “free” variable num (a number) 
and checkNumber (a function which prints num to the console). 
The function checkNumber doesn’t have any local variables of its own — however, 
it does have access to the variables within the outer function, numberGenerator, because of a closure. 
Therefore, it can use the variable num declared in numberGenerator to successfully log it 
to the console even after numberGenerator has returned. */
function numberGenerator(num) {
  // returning this funtion means that we can to successfully log the variable num
  // to the console even after numberGenerator has returned
  return function checkNumber() {
    console.log(num);
  };
}
// num = 2
var generatorOfTwo = numberGenerator(2);
// after calling numberGenerator(2), this has returned the checkNumber functions
console.log(generatorOfTwo);
// is a function
/*ƒ checkNumber() {
    console.log(num);
  } */
generatorOfTwo();
// logs 2

/* A variable hello is defined after a anonymous function — 
but can still access the hello variable. 
This is because the hello variable has already been defined in the function “scope” 
at the time of creation, making it available when 
the anonymous function is finally executed. */
var anonymousFn = function() {
  console.log(hello);
};
var hello;
anonymousFn();
