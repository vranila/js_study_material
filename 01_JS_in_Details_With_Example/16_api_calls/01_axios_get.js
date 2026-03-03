import axios from "axios";

axios.get("https://api.example.com/data")
  .then(res => console.log(res.data))
  .catch(err => console.error(err));