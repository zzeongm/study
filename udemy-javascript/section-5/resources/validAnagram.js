function validAnagram(arr1, arr2) {
  // add whatever parameters you deem necessary - good luck!
  let newArr1 = arr1.split("").sort();
  let newArr2 = arr2.split("").sort();
  if (newArr1.join("") == newArr2.join("")) {
    console.log(true);
  } else {
    console.log(false);
  }
}
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true