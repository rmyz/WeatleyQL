FROM node:10.15.3-alpine AS base

ADD . /app

WORKDIR /app

COPY yarn.lock .
COPY package.json .

FROM base AS dependencies

RUN yarn install --production --non-interactive

FROM base AS release

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

COPY --from=dependencies /app/node_modules ./node_modules

COPY . .

EXPOSE 4000

CMD [ "yarn", "start" ]
