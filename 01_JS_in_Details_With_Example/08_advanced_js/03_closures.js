/* closure occurs when a function remembers variables from its outer function even after the outer function has finished executing. */

function outerFunction() {
    let count = 0;

    function innerFunction() {
        count++;
        console.log("Count:", count);
    }

    return innerFunction;
}

let counter = outerFunction();

counter(); // 1
counter(); // 2
counter(); // 3