/*
1. “this” refers to global object
By default the execution context for an execution is global 
which means that if a code is being executed as part of a simple function call 
then “this” refers to global object. 
“window” object is the global object  */

function globalThis() {
  console.log("Simple function call");
  console.log(this);
}
globalThis(); //prints the window in console

/*
2. “this” refers to new instance
When a function is invoked with “new” keyword then the function 
is known as constructor function and returns a new instance. 
In such cases, the value of “this” refers to newly created instance. */

function Human(firstName, lastName) {
  console.log("this in initial call is ", this);
  this.first_name = firstName;
  this.last_name = lastName;

  this.showName = function() {
    console.log("this inside the method is ", this);
    console.log("Name: " + this.first_name + " " + this.last_name);
  };
}

var person = new Human("Crina", "Berinde");
// this in initial call is Human {first_name: "Crina", last_name: "Berinde", showName: ƒ}
person.showName();
// this inside the method is Human {first_name: "Crina", last_name: "Berinde", showName: ƒ}
// Prints Name: Crina Berinde
var person2 = new Human("Andrei", "Popescu");
// this in initial call is Human {first_name: "Andrei", last_name: "Popescu", showName: ƒ}
person2.showName();
// this inside the method is Human {first_name: "Andrei", last_name: "Popescu", showName: ƒ}
// Prints Name: Andrei Popescu

/*
3. “this” refers to invoker object (parent object)
In Javascript, property of an object can be a method or a simple value. 
When an Object’s method is invoked then “this” 
refers to the object which contains the method being invoked. */

function nameByIndex(index) {
  console.log("the name of from " + index + " is " + this.users[index]);
  console.log("The invoker object is", this);
}

var usersObj = {
  count: 7,
  users: ["Crina", "Andrei", "Cosmin", "Laura", "Victor", "Oana", "Flaviu"],
  getNameByIndex: nameByIndex,
  getUsers: function() {
    console.log("The invoker object is", this);
    console.log("The list of users is ", this.users);
  }
};

usersObj.getNameByIndex(2);
//the name of from 2 is Cosmin
//The invoker object is {count: 7, users: Array(7), getNameByIndex: ƒ, getUsers: ƒ}
var myUsers = usersObj.getUsers;
myUsers();
//The invoker object is Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
//The list of users is  undefined
// Prints the window as this method is invoked as a simple function.
// because there is no propery users defined on the window object

usersObj.getUsers();
//The invoker object is {count: 7, users: Array(7), getNameByIndex: ƒ, getUsers: ƒ}
//The list of users is  (7) ["Crina", "Andrei", "Cosmin", "Laura", "Victor", "Oana", "Flaviu"]
