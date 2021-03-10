const bangunan = require("./bangunan");

console.log(bangunan[0].luasPersegi(10));
console.log(bangunan[1]());

//const classBangunan = bangunan[0]
//const functionBangunan = bangunan[1]

const [classBangunan, functionBangunan] = require("./bangunan");

console.log(classBangunan.luasPersegi(10, 10));
functionBangunan();

//const num = [100, 200];
//const seratus = num[0];
//const duaratus = num[1];
//const [seratus, duaratus] = num;
