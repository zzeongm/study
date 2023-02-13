//삽입정렬
function insertionSort(arr) {
  var currentVal; //현재값 변수 선언
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i]; //1->9->76->4
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log("i:",i," j:",j)
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
