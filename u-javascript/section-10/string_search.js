function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){ //11
        for(var j = 0; j < short.length; j++){ //3
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled", "lol"))