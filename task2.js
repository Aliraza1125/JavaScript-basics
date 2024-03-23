// Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.

function undefinedObject(obj) {
    try {
        console.log('Property',obj.property); 
    } catch (error) {
        if (error instanceof TypeError) {
            throw new Error("Trying to access property of undefined object");
        } else {
            throw error; 
        }
    }
}

try {
    let num;
    undefinedObject(num);
} catch (err) {
    console.log(err.message);
}
