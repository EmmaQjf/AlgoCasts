// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    if(n%5===0 && n%3 ===0){
        return "fizzbuzz"
    } 
    if(n%5===0){
        return 'buzz'
    }
     if(n%3 ===0){
        return'fizz'
    }
    else {
        return n
    }
}

module.exports = fizzBuzz;
