//빅오의 시점에서 객체와 배열이 어떻게 작동하는지

let instructor = {
  firstName: "kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

//객체는 정렬되어 있을 필요가 없을때 잘 작동한다
//빠른 접근과 입력, 제거를 원할때 좋다
//빠르다고 했을 때 입력, 제거, 접근하는 시간이 상수시간이라는 것을 의미한다.
//객체는 시작,끝이 존재하지않고 단지 key를 통해 접근

console.log(Object.keys(instructor))
//key값들이 들어가있는 배열이 출력된다
//시간 복잡도로는 O(N) 선형 시간이다. 아이템 갯수가 늘어나면서 각 아이템을 접근해서 이 배열에 추가하는 시간이 증가한다.
//엘리먼트가 100개이거나, 속성이 100개라면 처리해야할 연산이 100개라는 것.
//따라서 N에 따라 시간이 변동한다. 그래서 결국 O(N)
console.log(Object.entries(instructor))

console.log(instructor.hasOwnProperty("firstName"))