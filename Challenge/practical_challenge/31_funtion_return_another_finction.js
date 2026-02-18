function greet(name) {
    return function(message) {
        console.log(name + ": " + message);
    };
}

let user = greet("Anila");
user("Welcome!"); 
