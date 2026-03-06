/* The this keyword refers to the object that is currently executing the function. */


// Example inside object
const person = {
    name: "Anila",
    greet: function () {
        console.log("Hello " + this.name);
    }
};

person.greet();

// Example inside function
function show() {
    console.log(this);
}

show(); // global object (window in browser)