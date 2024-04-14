Solution for today

Same 
Naive
```js
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}
//Good
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

//maxChar

function maxChar(str) {
  const frequencyCounter = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (frequencyCounter[char]) {
      frequencyCounter[char]++;
    } else {
      frequencyCounter[char] = 1;
    }
  }

  for (let char in frequencyCounter) {
    if (frequencyCounter[char] > max) {
      max = frequencyCounter[char];
      maxChar = char;
    }
  }

  return maxChar;
}
```