function* idMaker(){
  var index = 0;
  while(true)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

function getFirstName() {
    setTimeout(function(){
        gen.next('alex')
    }, 1000);
}

function getSecondName() {
    setTimeout(function(){
        gen.next('perry')
    }, 1000);
}


function *sayHello() {
    var a = yield getFirstName();
    var b = yield getSecondName();
    console.log(a, b); //alex perry
}

var gen = sayHello();

gen.next();