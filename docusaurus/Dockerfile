# Container image that runs your code
FROM node:18-alpine

FROM node:18
ENV NODE_ENV=production
ENV NODE_PORT=80

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 9999

CMD [ "node", "index.js" ]