const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map(el => [el]);
  // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
        console.log(fixed);
        console.log(index);
        console.log(origin);
    const rest = origin.slice(index + 1);
    // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1);
    // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map(el => [fixed, ...el]);
    //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached);
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

console.log(getCombinations([1, 2, 3], 2));

const getPermutaions = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map(el => [el]);

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = getPermutaions(rest, selectNumber - 1);
        const attached = permutations.map(el => [fixed, ...el]);

        results.push(...attached);
    });
    return results;
}

console.log(getPermutaions([1,2,3,4],3))