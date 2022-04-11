const express = require('express');

const app = express();

app.get('/', (_req, res) => res.send("PING_PONG"));

app.listen(3000, () => {
  console.log("Server listening on 3000")
})