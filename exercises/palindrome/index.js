// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// find the middle index of the string 
//loop through the string and compare the letter from the beginning and end

function palindrome(str) {
    const midIndex = Math.floor(str.length-1)/2
    for (let i =0; i<=midIndex; i++){
        if(str[i] !== str[str.length -i-1]){return false}
    }
    return true
}

module.exports = palindrome;
