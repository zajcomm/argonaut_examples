# Deploying a simple NodeJS Express API using Argonaut

## Initialize the node project

Only if you haven't done so already.

- Using your package manager, initialize the project. We are using npm here, so `npm init` is used.
- Add express as a dependency in the project using `npm i express`.
- Create an entry file to your project called `index.js` in your root directory.
- Add `start: node index.js` inside the `scripts` section of the `package.json` file.
- Use the code below to create a simple API that sends PING_PONG as response.

### index.js
```javascript
const express = require('express');

const app = express();

app.get('/', (_req, res) => res.send("PING_PONG"));

app.listen(process.env.NODE_PORT, () => {
  console.log(`Server listening on ${process.env.NODE_PORT}`)
})
```

## Deploy using [Argonaut](https://argonaut.dev)
