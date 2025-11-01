FROM node:24.4.0-slim

ENV PORT 3000

RUN npm i -g http-server

WORKDIR /app

ADD package.json .
RUN npm install

ADD . .
RUN npm run build

CMD http-server /app/src/.vuepress/dist -p $PORT
