// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// find the absolute value with Math.abs()
//reverse function to reverse the string 
function reverseInt(n) {
    let absoluteN = Math.abs(n)
  let str = absoluteN.toString().split('').reverse().join('')
  let number = parseInt(str)
   if(n<0){
    number = -1*number
   }
   return  number
}
module.exports = reverseInt;
