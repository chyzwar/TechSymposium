class Vehicle {
  constructor(make, year) {
    this._make = make;
    this._year = year;
  }
  get make() {
    return this._make;
  }
  get year() {
    return this._year;
  }
  toString() {
    return `${this.make} ${this.year}`;
  }
}

const fiesta = new Vehicle("Ford Fiesta", 1998);
console.log(fiesta.toString());


//extend
class Motorcycle extends Vehicle {
  constructor(make, year) {
    super(make, year);
  }
  toString() {
    return `Motorcycle ${this.make} ${this.year}`;
  }
}
const suzuki = new Motorcycle("Suzuki", 1999);
console.log(suzuki.toString());
