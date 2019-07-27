FROM node:10.16-alpine AS base

RUN mkdir -p /app

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production --non-interactive

COPY . .

RUN chmod +x ./wait-for-it.sh
RUN chmod +x ./bootstrap.sh

RUN yarn global add graphql-cli
