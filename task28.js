// Write a JavaScript program to pass a 'JavaScript function' as a parameter.

function greet(name, callback) {
    callback(name);
}

function sayHello(name) {
    console.log("Hello, " + name + "!");
}

greet("aliraza", sayHello); 
