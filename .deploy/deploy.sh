#!/bin/sh

git fetch origin
git reset --hard origin/master
git pull origin master

docker-compose build
docker-compose down
docker-compose up -d
docker image prune -f

