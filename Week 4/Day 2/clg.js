class Laptop {
  constructor(brand, model, color) {
    this.brand = brand;
    this.weight = 2;
    this.model = model;
    this.color = color;
  }
  start() {
    console.log(`${this.nama} telah menyala`);
  }
  browsing() {
    console.log(`${this.nama} sedang browsing`);
  }
  login() {
    console.log(`${this.nama} telah login ke Ubuntu`);
  }
  changeName(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
  }
}

const laptop = new Laptop("MacBook", "Pro 2020", "White");

laptop.start();
laptop.login();
laptop.browsing();
