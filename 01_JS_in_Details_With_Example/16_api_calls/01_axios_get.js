//Axios is a promise-based HTTP client used in JavaScript to send requests to servers (APIs). It works in both browser environments and Node.js. Developers commonly use Axios to fetch data from APIs, send data to servers, and handle HTTP requests easily compared to raw XMLHttpRequest.

/* 1. Why Axios is Used
Axios simplifies HTTP communication.

Key uses:
    Fetch data from APIs
    Send data to servers
    Handle asynchronous requests using Promises
    Automatically convert JSON data
    Intercept requests and responses
Example use cases:
    Getting user data from an API
    Submitting form data
    Uploading files
    Communicating with backend services
 */


/* axios.get() is used to send an HTTP GET request to retrieve data from a server or API. A GET request is mainly used when you want to read or fetch data.
syntax : axios.get(url, config)
Parameter	Description
url	API endpoint from where data is fetched
config	Optional configuration (headers, params, etc.) */



import axios from "axios";

axios.get("https://api.example.com/data")
  .then(res => console.log(res.data))
  .catch(err => console.error(err));


  /* axios.get() sends a request to the API
.then() runs when the request is successful
response.data contains the returned data
.catch() handles errors */

console.log("Example Using Async / Await")



async function getUsers() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

getUsers();