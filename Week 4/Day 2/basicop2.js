class Mobil {
    constructor() {
    this.nama= ("Ferrari");
    this.weight= (1200);
    this.model= ("Hypercar");
    this.color= ("Red");
    }
    start() {
        console.log(`${this.nama} telah menyala`);
    }
    drive() {
        console.log(`${this["nama"]} siap dikemudikan`);
    }
    stop() {
        console.log("mobil telah berhenti");
    }
    brake() {
        console.log("mobil telah di rem");
    }
}


