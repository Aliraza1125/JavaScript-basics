// Write a JavaScript function that accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.


function checkType(arg)
{
    return typeof arg;
}



console.log(checkType({"name":"aliraza","rollno":"005"}))
console.log(checkType(true))
console.log(checkType( function () {} ))
console.log(checkType(3))
console.log(checkType("dsdsd"))
console.log(checkType())
