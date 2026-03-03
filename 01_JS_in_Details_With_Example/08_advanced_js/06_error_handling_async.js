// ===============================
// PROMISE ERROR HANDLING
// ===============================

new Promise((resolve, reject) => {
  reject("Something went wrong");
})
  .then(res => console.log(res))
  .catch(err => console.log("Caught:", err));


// ===============================
// TRY/CATCH WITH ASYNC
// ===============================

async function example() {
  try {
    let data = await Promise.reject("Async error");
    console.log(data);
  } catch (err) {
    console.log("Handled:", err);
  }
}

example();


// ===============================
// UNHANDLED REJECTION (Browser)
// ===============================

window.addEventListener("unhandledrejection", event => {
  console.log("Unhandled promise rejection:", event.reason);
});


// ===============================
// THROW CUSTOM ERROR
// ===============================

function validate(age) {
  if (age < 18) {
    throw new Error("Age must be 18+");
  }
}

try {
  validate(16);
} catch (err) {
  console.log(err.message);
}