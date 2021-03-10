class Car {
    checkWheel() {
        console.log('berjalan 4 roda');
    }
}

class Motorcycle {
    checkWheel() {
        console.log("2roda")
    }
}

class Honda {
    constructor(type, car, motorcycle) {
        this.type = type;
        this.car = car;
        this.motorcycle = motorcycle;
    }
}

const car = new Car();
const motorcycle = new Motorcycle();

const mobilio = new Honda("Mobilio", car, motorcycle);

mobilio.car.checkWheel()