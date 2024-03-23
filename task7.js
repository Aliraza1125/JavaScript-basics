// Write a JavaScript program that uses a try-catch block to catch and handle a 'RangeError' when accessing an array with an invalid index.

function invalidIndex(arr, i) {
    try {
        console.log(arr[i]);
    } catch (err) {
        if (err instanceof RangeError) {
            console.log('Error: Invalid Index');
        } else {
            throw err;
        }
    }
}

let arr = [2, 3, 4, 5];
let index = 4;
invalidIndex(arr, index);

