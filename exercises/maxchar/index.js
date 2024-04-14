// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//frequency counter
//define a fc object, maxValue =-definite
//loop through the string and refine the object
//find the property with the largest value
function maxChar(str) {
    let fc = { }
    let maxValue = -infinity

    for (let i =0; i<str.length; i++){
        fc[str[i]]? fc[str[i]]+=1: fc[str[i]]=1;
        fc[str[i]]>maxValue? maxValue=fc[str[i]]:maxValue=maxValue;
    }
    return fc.find(item => fc[item]===maxValue)

}

module.exports = maxChar;
