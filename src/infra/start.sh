#!/bin/sh

npm install

echo "Starting development server..."
npx tsx watch src/index.ts
