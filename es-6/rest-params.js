//Functions def with rest argument
function doSomething(x, ...remaining) {
  console.log(x * remaining.length)
  return x * remaining.length;
}

doSomething(5, 0, 0, 0); // 15
