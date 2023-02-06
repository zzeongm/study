const input = require("fs").readFileSync("example.txt").toString().split("\n");

let [n,k] = input[0].split(" ").map((a)=>+a);

let score = input[1].split(" ").map((a)=>+a);

for(let i=2; i<n; i++){
    let [a,b] =input[i].split(" ").map((a)=>+a);
    let sum=0;
    let avg=0;
    for(let j=a; j<=b; j++){
        sum += score[j-1];
    }
    console.log((sum/(b-a+1)).toFixed(2));
}


