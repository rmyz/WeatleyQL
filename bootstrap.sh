#!/bin/sh
echo "Running Prisma Deploy.."
yarn prisma:deploy
echo "Starting application"
yarn start
