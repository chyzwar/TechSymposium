//Deep properties
var foo = { bar: { deep: 'pony', dangerouslySetInnerHTML: 'lol' } };
var { bar: { deep, dangerouslySetInnerHTML: sure }} = foo;
console.log(deep);
console.log(sure);

//Default Values
var {foo=3} = { foo: 2 }
console.log(foo);
var {foo=3} = { foo: undefined }
console.log(foo);
var {foo=3} = { bar: 2 }
console.log(foo);

//Functions arguments
function greet ({ age, name:greeting='she' }) {
  console.log(`${greeting} is ${age} years old.`)
}
greet({ name: 'nico', age: 27 });
greet({ age: 24 });


//Binding variables
var foo = { bar: 'pony', baz: 3 }
var {bar, baz} = foo
console.log(bar)
console.log(baz)

//Aliasing
var foo = { bar: 'pony', baz: 3 }
var {bar: a, baz: b} = foo
console.log(a);
console.log(b);

//Arrays and skipping
var [,,a,b] = [1,2,3,4,5];
console.log(a);
console.log(b);
