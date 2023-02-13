function addUptoFirst(n){
    let sum =0;
    for(let i=1; i<=n; i++){
        sum+=i;
    }
    //n=10이라면 연산수는 10n+2
    console.log(sum)
}

addUptoFirst(100)


function addUp(n){
    let sum=0;
    sum = n*(n+1)/2
    //연산 수 3번
    console.log(sum)
}

addUp(100);
//최대한 적은 코드 사용, 하지만 빠른 코드 사용 방법으로 실행
//하지만 코드로 시간을 비교하는 것은 문제가 있다.
//실행하는 연산 수를 계산하라.
//10n+2에서 전체적인 추세는 n.