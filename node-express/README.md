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

- Log in to your Argonaut account and go to the `Applications` section. Then click on the `Deploy` button.

![image](https://user-images.githubusercontent.com/9110203/162891234-a00cb457-6c08-4800-88ec-8a183062c874.png)

- Choose Git Source in the `New Deployment` page and select your repository. Then click on Next.

![image](https://user-images.githubusercontent.com/9110203/162893034-c1104b5d-1491-4dff-ab2e-075f3dec1a25.png)
![image](https://user-images.githubusercontent.com/9110203/162893455-56293741-b07a-4e3e-8c3f-9be5f55de5e5.png)

### Before deploying Argonaut needs to know some key information about how to run your app. 
 - `Build Method` : Here you can choose which node version you need. We have selected node:latest
 - `Build Context` : Here you can specify a subfolder that will act as the root directory of the app during the build
 - `Run Command` : Command to run the project
 - `Secrets` : Secrets are exposed to the app as environment variables. They will be populated in `process.env` inside our Node project.

 ![image](https://user-images.githubusercontent.com/9110203/162894811-9ca6cb52-999a-4c43-975d-d05d0afcbb0a.png)

- After filling up all these fields, click on the 'Deploy' button. You will immediately be taken to the logs screen.

![image](https://user-images.githubusercontent.com/9110203/162896423-a8de9db2-905e-4e19-aacf-aa906c6b1d12.png)

- You can also find your app in the `Applications` section anytime.

![image](https://user-images.githubusercontent.com/9110203/162896689-a45dab26-e3f2-4593-a97c-77ae01d5e4cc.png)

Ready to get started?
Sign Up Today! at [https://ship.argonaut.dev/](https://ship.argonaut.dev/)
Check out our [documentation here](https://www.argonaut.dev/docs) 
