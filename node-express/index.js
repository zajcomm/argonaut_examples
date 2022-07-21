const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    ip: req.ip,
    headers: req.headers,
  });
});

app.listen(process.env.NODE_PORT, () => {
  console.log(`Server listening on ${process.env.NODE_PORT}`);
});
