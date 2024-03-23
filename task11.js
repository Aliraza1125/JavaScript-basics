//  Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
///Sample array : [1,2,3,4,5]
//Expected Output : 2,4


function find2LowestnLargest(arr)
{
    let newArr = arr.sort();
    console.log('2nd Lowest Number is: ' + newArr[1])
    console.log('2nd Largest Number is: ' + newArr[newArr.length-2])
}

let array=[2,3,4,5,1]
find2LowestnLargest(array)