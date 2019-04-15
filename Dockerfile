FROM node:10.15.3-alpine AS base

RUN mkdir -p /app

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production --non-interactive

COPY . .

RUN chmod +x ./wait-for-it.sh
RUN yarn global add graphql-cli

EXPOSE 4000
