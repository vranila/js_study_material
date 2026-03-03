
// Function() Constructor
const adding = new Function("a", "b", "return a + b");
console.log(adding(10, 20));



// Function call()
function show(city) {
    console.log(this.name + " from " + city);
}
const person1 = { name: "Anila" };
show.call(person1, "Mumbai");


// Function apply()
show.apply(person1, ["Delhi"]);


// Function bind()
const boundFn = show.bind(person1, "Chennai");
boundFn();





