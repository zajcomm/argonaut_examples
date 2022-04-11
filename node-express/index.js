const express = require('express');

const app = express();

app.get('/', (_req, res) => res.send("PING_PONG"));

app.listen(process.env.NODE_PORT, () => {
  console.log(`Server listening on ${process.env.NODE_PORT}`)
})