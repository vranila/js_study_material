// Sending JWT token in headers

axios.get("/protected", {
  headers: {
    Authorization: "Bearer YOUR_TOKEN"
  }
});