//Write a JavaScript program to get integers in the range (x, y) using recursion.  
//Example : range(2, 9)
//Expected Output : [3, 4, 5, 6, 7, 8]

function range(x, y) {
    if (y - x === 1 || y - x === 0) {
        return [];
    } else {
        let result = range(x, y - 1);
        result.push(y - 1);
        return result;
    }
}


const x = 2;
const y = 9;
const result = range(x, y);
console.log(result);
