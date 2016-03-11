"use strict";

//Create const
const MY_CONST = 10;

//trying to change value
MY_CONST = 11;

//check value of const
console.log(MY_CONST)// still 10

//trying to redeclare
const MY_CONST = 20; //Throw error

//assign to const
const A = 1; A = 2; //Throw syntax error

//Object also work with const
const MY_OBJECT = {"key": "value"};

//Trying to overwrite object
MY_OBJECT = {"OTHER_KEY": "value"};

//check const object
console.log(MY_OBJECT); //{"key": value}


//var Hacks in es5

//naming conventions
var MY_CONST = 'something';

//redefine "const"
MY_CONST = "another";

//It is "another" after all
console.log(MY_CONST);//another
