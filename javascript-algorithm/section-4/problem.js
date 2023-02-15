//문제 해결 전략

//1.문제를 이해한다.
//2.구체적 예시를 알아본다.
//3.해결할 수 있는 방법으로 분석하여 처음부터 차근차근 접근한다.
//4.문제를 단순화 시킨다.
function charCount(str) {
  var result = {};
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  console.log(result);
  return result;
}
//요약
//코드를 되돌아보고 리팩토링하고 다시 분석해보기!!