//Write a JavaScript program that uses a try-catch block to catch and handle a 'ReferenceError' when accessing an undefined variable.

function accessUndefinedVariable() {
    try {
        console.log(undefinedVariable);
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log('Error caught:', error.message);
        } else {
            throw error;
        }
    }
}


accessUndefinedVariable();
