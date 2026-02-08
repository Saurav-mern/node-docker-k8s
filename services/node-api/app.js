const express = require("express");
const os = require("os");

const app = express();

// Built-in fetch is available in Node 18+
const GO_SERVICE_URL = "http://go-svc:8080/process";

app.get("/", (req, res) => {
  res.send(`Hello from Pod: ${os.hostname()} 🚀`);
});

app.get("/api/process", async (req, res) => {
  try {
    const response = await fetch(GO_SERVICE_URL, {
      // simple timeout pattern
      signal: AbortSignal.timeout(2000),
    });

    if (!response.ok) {
      return res.status(502).json({ error: "Go service returned error" });
    }

    const data = await response.json();
    res.json({
      from: os.hostname(),
      upstream: data,
    });
  } catch (err) {
    console.error("Error calling go-svc:", err.message);
    res.status(504).json({ error: "Failed to reach go-svc" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
