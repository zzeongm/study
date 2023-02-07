let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];

//배열은 엘리먼트마다 붙어있는 인덱스가 존재한다
//정렬되어있는 데이터가 필요할때 배열을 사용할 수 있지만 성능을 포기해야 할 수도 있다.
//특히 입력과 제거를 사용할때 복잡

//접근은 O(1) 객체와 같다.
//입력 push O(1)
//제거 pop O(1)
//입력 unshift O(N)
//제거 shift O(N)
//탐색 O(N)
