//Bic O란 입력의 크기와 실행시간의 관계를 말한다.
//전반적인 추세를 관찰하는 것
//N이 커질수록 컴퓨터가 f(n)*f(n) 보다 간단한 연산을 덜 해야한다면
//그 알고르짐을 바로 O(f(n))이라고 표현한다.

//1. f(n) could be linear (f(n)=n) 입력과 실행시간
//2. f(n) could be quadratic (f(n)=n*n) n이 커질수록 실행시간이 커진다
//3. f(n) could be constant (f(n)=1) n이 커져도 실행시간에 영향x
//4. f(n) could be something entirely different

function addUp(n){
    return n*(n+1)/2;
    //n이 변경되어도 전반적인 주제엔 변화가 없다.
    //실행시간이 변하지 않는다.
    //따라서 O(1)
}

function addUptoFirst(n){
    let sum=0;
    for(let i=1; i<=n; i++){
        sum+=i;
    }
    return sum;
    //n이 커질수록 실행시간 변화
    //따라서 O(n)
    //5n이든 n이든 상관이 없다. 대략적으로 비슷하다.
}

function printAllPairs(n){
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            console.log(i,j);
        }
    }
    //n이 커질수록 연산이 커진다. 또한 중첩루프로 중첩이 되기때문에
    //따라서 O(n*n)
}