# Argonaut Deployment
![image](https://user-images.githubusercontent.com/9110203/188390854-72defa4b-8fba-4a50-a8b8-b3f94708e65a.png)
![image](https://user-images.githubusercontent.com/9110203/188390894-c71ee98f-c667-4fce-bcd8-f8959800c0ff.png)



# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
