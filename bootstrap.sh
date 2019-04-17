#!/bin/sh
echo "----------------------------------------"
echo "Running Prisma Deploy..."
yarn prisma:deploy
echo "----------------------------------------"
echo "Generating a token for your application..."
yarn prisma:token
echo "----------------------------------------"
echo "Starting application..."
yarn start
echo "----------------------------------------"
