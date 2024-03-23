//Write a function for searching JavaScript arrays with binary searches.
//Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midVal = arr[mid];

        if (midVal === target) {
            return mid; 
        } else if (midVal < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }

    return -1; 
}


let sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let target = 13;
let resultIndex = binarySearch(sortedArray, target);
if (resultIndex !== -1) {
    console.log(`Target ${target} found at index ${resultIndex}.`);
} else {
    console.log(`Target ${target} not found in the array.`);
}
