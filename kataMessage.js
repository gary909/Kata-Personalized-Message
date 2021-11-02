function greet (name, owner) {
    // Add code here
    if (name == owner) {
        return "Hello boss"
    } else {
        return "Hello guest"
    }
}

console.log(greet('Daniel', 'Daniel')); // Return "Hello boss"
console.log(greet('Greg', 'Daniel')); // Return "Hello guest"