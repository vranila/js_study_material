// ===============================
// async FUNCTION
// ===============================

// async automatically returns a Promise.

async function getData() {
  return "Hello"; // wrapped inside Promise.resolve()
}

getData().then(console.log);


// ===============================
// await KEYWORD
// ===============================

// await pauses execution until Promise resolves.
// It only works inside async functions.

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log("Start");

  await delay(2000); // waits 2 seconds

  console.log("After delay");
}

run();


// ===============================
// ERROR HANDLING
// ===============================

async function test() {
  try {
    let result = await Promise.reject("Error occurred");
    console.log(result);
  } catch (err) {
    console.log("Caught:", err);
  }
}

test();