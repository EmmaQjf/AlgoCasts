// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// define an empty array and subarrays 
// define startRow, endRow, startColumn, endColumn
// loop through each row and wrte #
function pyramid(n) {
    let result = [];
    for (let i = 0; i < n; i++){
        result.push([])
    }
  
    let startRow = 0;
    let endRow = n-1;
    let startColumn = Math.floor((2*n-1)/2)
    let endColumn = Math.floor((2*n-1)/2)

    while(startRow <= endRow){
        for(let i =0; i< 2*n-1; i++){
            if(i>=startColumn && i<=endColumn){
                result[startRow][i]='#'
            } else {
                result[startRow][i]=' '
            }
        }
        startRow++;
        endColumn++;
        startColumn--;
    }
    // for (let i = 0; i < 2*n-1; i++) { 
    //     let s=""; 
    //         for (let j = 0; j < 2*n-1; j++) { 
    //             s+=(result[i][j]+""); 
    //         } 
    //        console.log(s) 
    //     } 
    for (let i = 0; i < 2 * n - 1; i++) { // Loop through rows
        let row = result[i].map(String).join(""); // Convert elements to strings and join them
        console.log(row); // Print the row
    }
  
}

module.exports = pyramid;
