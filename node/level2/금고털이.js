const input = require("fs").readFileSync("example.txt").toString().split("\n");

let [w, n] = input[0].split(" ").map((value)=>+value);

let price =0;
let item = [];
let stack =0;

for(let i=1; i<input.length; i++){
    item.push(input[i].split(" ").map((value)=>+value));
    item.sort((a,b)=> b[1]-a[1]);
}

for(let i=0; i<n; i++){
    price += item[i][1]*item[i][0];
    stack += item[i][0];
    if(stack >= w){
        price = price-item[i][1]*(stack-w);
        break;
    }
}
console.log(price);