const menghitungLuasSegitiga = require("./segitiga");
const menghitungPersegi = require("./persegi");
const menghitungPersegiPanjang = require("./persegipanjang");
const menghitungLingkaran = require("./lingkaran");

const checkPrime = require("./prime");

console.log(`luas segitiga adalah ${menghitungLuasSegitiga(10, 10)}`);
console.log(`luas persegi adalah ${menghitungPersegi(10)}`);
console.log(`luas persegi panjang adalah ${menghitungPersegiPanjang(10, 10)}`);
console.log(`luas lingkaran adalah ${menghitungLingkaran(10)}`);

console.log(checkPrime(9));
