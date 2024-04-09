 /*creates a function that takes a grid of # and - where each ($) represents a mine and 
 each (-) represents a mine free spot. 
 return an array where each ($) is replaced by a digit indicating the 
 number of mines immediately adjacent to the spot.

mineGrid([
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "$", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"]
])
output => [
    ["0", "0", "0", "0", "0"],
    ["0", "1", "1", "1", "0"],
    ["0", "1", "$", "1", "0"],
    ["0", "2", "2", "2", "0"],
    ["0", "1", "$", "1", "0"]
]
*/

const mineGrid = (arr) => {
    /* create a helper function that access the element position (y, x) in arr. 
if the y index is valid or exists i want to return arr[y][x] otherwise return null
(this will prevent accessing underfiend elements and to avoid errors)
*/
    const checkAccess = (y,x) => arr[y] ? arr[y][x] : null;
    //NOTE - Create a helper function that calculates the number of adjacent mines around the cell
    // at position (y, x)
    const getMine = (y, x) => {
        // an array is constructed with elements represention the content of adjacent cells.
        //we are going to use checkAcess for each of he eight possible adjacent positions.
        return [
            checkAccess(y+1, x), // checks the cell directly bellow the current (y, x)
            checkAccess(y+1, x+1), //checks diagonally bellow and to the right of the current cell.
            checkAccess(y+1, x-1), //check diagonally bellow and to the left,
            checkAccess(y, x+1), // check directly to the right 
            checkAccess(y, x-1), //check directly to the left
            checkAccess(y-1, x), // checks directly above.
            checkAccess(y-1, x+1), // check th cell diagonally to the right.
            checkAccess(y-1, x-1) // check the cell diagonally above to the left.
            //NOTE - construct an array of values represents the content of the cells adjacents, 
            //after the constructing of the array we will use filter method to keep those elements 
            //that are mines ('$')    
        ] .filter(adjCell => adjCell === "$").length.toString()
    }
    return arr.map((r,y) => r.map((c,x) => c === "-" ? getMine(x,y) : c))
}


function mineGrid() {
    const mineGrid = [
        ["-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-"],
        ["-", "-", "$", "-", "-"],
        ["-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-"]
    ];
    for (let i = 0; i < mineGrid.length; i++) {
        // Your code here, for example:
        console.log(mineGrid[i]);
    }
}


 