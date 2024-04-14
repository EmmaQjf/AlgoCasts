// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


//edge case, define the first and second element in the array
//loop through the n, and add the number into the array
// return the number in the position of n
function fib(n) {
//     let array = [0,1]
//    if (n === 0) return 0;
//    if (n === 1 ) return 1;
//    for (let i = 2; i <=n; i++){
//     array[i]=array[i-1]+array[i-2]
//    }
//    return array[n]
if (n < 2){
    return 1;
} else {
    return fib(n-2)+fib(n-3)
}
}

module.exports = fib;
