function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        console.log(correctIndex)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}
function same1(arr1, arr2) {
    let newArr1 = arr1.map((value) => value ** 2);
    newArr1 = newArr1.sort().join("");
    arr2 = arr2.sort().join("");
    console.log(newArr1, arr2)
    if (newArr1 == arr2) {
        console.log('true');
    }else{console.log('false')}
}
same1([1, 2, 3, 2], [9, 1, 4, 4]);
same([1,2,3,2], [9,1,4,4])
