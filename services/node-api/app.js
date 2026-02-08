const express = require("express");
const os = require("os");
const app = express();

app.get("/", (req, res) => {
  res.send(`Hello from Pod: ${os.hostname()} 🚀`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// colima start
// minikube start
// minikube dashboard