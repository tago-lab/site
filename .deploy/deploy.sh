#!/bin/sh

git fetch origin
git reset --hard origin/master
git pull origin master

docker-compose build --no-cache
docker-compose restart