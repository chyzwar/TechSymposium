let books = [{
  title: 'X',
  price: 10
}, {
  title: 'Y',
  price: 15
}];

// Arrow function
let titles = books.map(item => item.title);

// Annonymus function
var titles = books.map(function(item) {
  return item.title;
});


//functionl scope
function Person() {
  var self = this; // Some choose `that` instead of `self`.
  // Choose one and be consistent.
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}

var p1 = new Person();

//using arrow function lex scope
function PersonArrow() {
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p2 = new PersonArrow();
