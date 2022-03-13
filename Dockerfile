FROM node:16.14.0-slim
MAINTAINER Kota Nonaka <kota.kaicho@gmail.com>

ENV PORT 3000

RUN npm i -g http-server

WORKDIR /app

ADD package.json .
# ADD package-lock.json .
RUN npm i

ADD . .
RUN npm run build

CMD http-server /app/src/.vuepress/dist -p $PORT