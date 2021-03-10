class Car {
    //static property
    static brand2 = 'Datsun';

    constructor (){
        //instance property
        this.brand = 'ferrari'
        this.type = 'fx300'
    }
    //instance method
    startEngine() {
        console.log('car has been started');
    }

    //static method
    static getBrand2() {
        return Car.brand2;
    }
}

const car = new Car();

console.log(Car.brand2);
console.log(Car.getBrand2());