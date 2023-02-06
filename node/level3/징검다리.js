const input = require("fs").readFileSync("example.txt").toString().split("\n");

let [n] = input[0];
let bridge = input[1].split(" ").map((a)=>+a);
let dp = [];
for(let i=0; i<n; i++){
    dp[i]=1;
}
// 3 2 1 4 5
for(let i=0; i<n; i++){
    for(let j=0; j<=i; j++){
        if(bridge[i] > bridge[j]){
            dp[i] = Math.max(dp[i],dp[j]+1);
            console.log(i,j)
        }
    }
    
}

console.log(dp)