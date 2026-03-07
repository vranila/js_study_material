/* The Fetch API is a modern JavaScript interface used to make HTTP requests (GET, POST, PUT, DELETE, etc.) to servers. It is commonly used to retrieve or send data to APIs in web applications.

It is built on Promises, which makes asynchronous operations easier to handle compared to older approaches like XMLHttpRequest.
 */
//1. Basic Syntax
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));


/* //Steps

fetch(url) → sends request to server

response.json() → converts response to JSON

.then(data) → access data

.catch(error) → handle errors */

//2. Example – GET Request
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
      console.log(data);
  })
  .catch(error => {
      console.log("Error:", error);
  });


//3. Example – POST Request

//Used to send data to server.

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "New Post",
        body: "This is a post",
        userId: 1
    })
})
.then(response => response.json())
.then(data => console.log(data));


/* 
4. Using Fetch with Async / Await

Modern JavaScript usually uses async/await for cleaner code.
 */
async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log(data);
    } 
    catch(error) {
        console.log("Error:", error);
    }
}

getUsers();


/* 5. Fetch Methods
Method	Purpose
GET	Retrieve data
POST	Send new data
PUT	Update entire data
PATCH	Update partial data
DELETE	Remove data */