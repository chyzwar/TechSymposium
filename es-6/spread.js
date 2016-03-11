let values = [1, 2, 4];
let some = [...values, 8]; // [1, 2, 4, 8]
let more = [...values, 8, ...values]; // [1, 2, 4, 8, 1, 2, 4]

// ES5 equivalent:
let values = [1, 2, 4];
// Iterate, push, sweat, repeat...
// Iterate, push, sweat, repeat...

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);
console.log(arr1);

//Functions invokation passing params
let values = [1, 2, 4];
function doSomething(x, y, z) {
   console.log(arguments)// [1, 2, 4]
}
doSomething(...values);

// ES5 equivalent:
doSomething.apply(null, values);