let name = 'John',
   apples = 5,
   pears = 7,
   bananas = function() { return 3; }

console.log(`This is ${name}.`);
console.log(`He carries ${apples} apples, ${pears} pears, and ${bananas()} bananas.`);

// ES5 equivalent:
console.log('He carries ' + apples + ' apples, ' + pears + ' pears, and ' + bananas() +' bananas.');


//Multiline template strings
let x = `1...
2...
3 lines long!`;
console.log(x);

// ES5 equivalents:
var x = "1...\n" + 
"2...\n" +
"3 lines long!";
console.log(x)