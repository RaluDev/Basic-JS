// JS Hoisting
console.log(myName1);
var myName1 = "Crina";

/*when Javascript compiles all of your code, all variable declarations using var are hoisted/lifted 
to the top of their functional/local scope (if declared inside a function) or to the top of their 
global scope (if declared outside of a function) regardless of where the actual declaration has been made.

Functions declarations are also hoisted, but these go to the very top, 
so will sit above all of the variable declarations.

key thing to note is that the only thing that gets moved to the top is the variable declarations,
not the actual value given to the variable.*/

var myName2;
console.log(myName2);
myName2 = "Crina";

//hoisting functions
function hey() {
  console.log("hey " + myName3);
}
hey();
var myName3 = "Crina";

// the way that the JS compiler sees this:
// renamed the function so that we don't have errors in this JS file
function h_hey() {
  console.log("hey " + myName4);
}
var myName4;
h_hey();
myName4 = "Crina";

// function expressions - the behaviour is the same as for variables
/*The main difference between function declarations 
and function expressions (is any valid unit of code that resolves to a value) is that 
when using function expressions, the name can be omitted, creating an anonymous function. 
*/
expr(); // will result in Uncaught TypeError: expr is not a function
var expr = function() {
  console.log("Hoisting for function expressions");
};

/* Function expressions are not hoisted; 
the they are not loaded until the JavaScript interpreter reaches them in the script. 
If you try to call a function before that point, you’ll get an error. */

// the compiled code
var expr1;
expr1();
expr1 = function() {
  console.log("Hoisting for function expressions");
};

// IIFE - imediatly invoked functions - are not hoisted
(function() {
  console.log("imediatly invoked functions - are not hoisted");
})();

// local scope hoisting
function local1() {
  var a = 1;
  var b = 2;
  console.log(c);
  var c = 3;
}

local1(); // prints undefined not 3

// compiled looks like this
function local2() {
  var a;
  var b;
  var c;
  a = 1;
  b = 2;
  console.log(c);
  c = 3;
}
local2();
