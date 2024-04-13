// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


//remove specail symbols and spaces --regular express
//fequency counter
function anagrams(stringA, stringB) {
    const newStringA =stringA.replace(/[^a-zA-Z0-9]/g,'')
    const newStringB =stringB.replace(/[^a-zA-Z0-9]/g,'')
    let fcA = {}
    for (const letter of newStringA.toLowerCase()){
       fcA[letter]= (fcA[letter]||0)+1
    }
    let fcB = {}
    for (const letter of newStringB.toLowerCase()){
       fcB[letter]= (fcB[letter]||0)+1
    }
    return _.isEqual(fcA,fcB)? true:false
}


module.exports = anagrams;
