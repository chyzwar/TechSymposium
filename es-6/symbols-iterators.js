let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur }
      }
    }
  }
}

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}


var symbol = Symbol('My custom symbol');
var x = {};

x[symbol] = 'foo';
console.log(x[symbol]); 'foo'

if (fibonacci[Symbol.iterator]) {
	console.log(true)
};