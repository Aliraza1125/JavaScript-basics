//Write a JavaScript program to compute the sum of an array of integers.  
//Example : var array = [1, 2, 3, 4, 5, 6]
//Expected Output : 21

function computeSum(arr) {
    if (arr.length === 0) {
        return 0; 
    } else {
        return arr[0] + computeSum(arr.slice(1)); 
    }
}

const array = [1, 2, 3, 4, 5, 6];
const sum = computeSum(array);
console.log("The sum of the array is:", sum);
