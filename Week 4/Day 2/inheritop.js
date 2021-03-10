//parent class / super class
class Car {
    startEngine() {
        console.log('mesin nyala bos');
    }
    stopEngine() {}
    horn() {}
}
//child class / sub-class
class Toyota extends Car {}

const avanza = new Toyota();

avanza.startEngine