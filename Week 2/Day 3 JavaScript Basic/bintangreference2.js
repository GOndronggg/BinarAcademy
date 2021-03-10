let y = 21;
let x = 21;

let str = "";

for(let i = 1; i < y; i++ ){
for(let j = 1; j < x; j++){
    if(i >= j ){
        str = str.concat("*");
    }
    }
    str = str.concat("\n")
}

console.log(str)