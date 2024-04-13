// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


//convert string to array of strings
// claim an empty array 
// capitalize the first letter of each string 
// push the caplitzlided word into the empty array.
//stringigy the array.


//In JavaScript, when you use for...of loop to iterate over an array of primitives (like strings), modifying the loop variable doesn't change the original array elements. 

function capitalize(str) {
    // const newArr = str.split(' ')
    // const result = []
    // for (let word of newArr){
    //     const firstLetter = word.charAt(0).toUpperCase()
    //     const newWord = firstLetter+word.slice(1)
    //     result.push(newWord)
       
    // }
    // const newStr = result.join(' ')
    // return (newStr)
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


module.exports = capitalize;
