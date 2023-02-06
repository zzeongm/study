const input = require("fs").readFileSync("example.txt").toString().split("\n");
let str = input[1].split(" ").join("");

let str1 = input[2].split(" ").join("");

if (str1.includes(str)) {
    console.log('secret');
}else{ console.log('normal')}