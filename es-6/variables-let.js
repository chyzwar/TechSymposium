"use strict";

//var function scope
function varTest() {
  var x = 31;
  if (true) {
    var x = 71; // same variable!
    console.log(x); // 71
  }
  console.log(x); // 71
}
varTest();

var x = 'global';
console.log(this.x); //global

//let lexical scope
function letTest() {
  let x = 31;
  if (true) {
    let x = 71; // different variable
    console.log(x); // 71
  }
  console.log(x); // 31
}
letTest();

//let is not global
let y = 'global';
console.log(this.y); //undefined

var x = 5;
var y = 0;
console.log(x + y); // 5

//let block statements
let (x = x + 10, y = 12) {
  console.log(x + y); // 27
}

//let expressions
var a = 5;
console.log(a); // 5

let (a = 6) console.log(a); // 6

//Temporal dead zone
if (x) {
  let foo;
  let foo; // TypeError thrown.
}
