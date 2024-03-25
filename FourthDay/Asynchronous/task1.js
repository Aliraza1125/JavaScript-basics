//Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.


function invoke(callback) {
    setTimeout(() => {
        console.log('Hello ');
        callback(); 
    }, 2000);
}

function message() {
    console.log('world');
}

invoke(message);
