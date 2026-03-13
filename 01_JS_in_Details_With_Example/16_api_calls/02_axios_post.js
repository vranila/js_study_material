
/*  axios.post()
axios.post() is used to send data to a server using an HTTP POST request.

POST requests are commonly used when you want to:
    Submit form data
    Create a new record in a database
    Send user input to a backend API

syntax : axios.post(url, data, config)
url	API endpoint
data	Data to send to the server
config	Optional settings (headers, params, etc.)

*/

import axios from "axios";
axios.post("https://api.example.com/data", {
  name: "John"
});


console.log("Example Using Async / Await")


async function createPost(){
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "JavaScript",
        body: "Axios POST Example",
        userId: 10
      }
    );

    console.log(response.data);
  } catch(error) {
    console.log(error);
  }
}

createPost();