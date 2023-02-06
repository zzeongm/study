const input = require("fs").readFileSync("example.txt");


let row = 2;
let answer = 0;
for(let i=0; i<input; i++){
    row = row+(row-1);
    answer = row*row;
}
console.log(answer);
