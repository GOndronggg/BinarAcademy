class Car {
    constructor() {
        this.brand = "suzuko";
    }
    startEngine() {
        console.log("bremm");
    }
}
const car = new Car();

//Modified or override
car.brand = "hondo";
car.startEngine = function () {
    console.log("uhuk uhuk");
};

console.log(car.brand);
car.startEngine();