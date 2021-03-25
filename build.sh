#! /opt/homebrew/bin/bash

npx sort-package-json &&
npm install &&

npm run prettify-ts &&
npm run standardize-ts &&

npm run compile &&
mv ts/dozenal.js js/dozenal.js &&

npm run prettify-js &&
npm run standardize-js &&

npm run prettify-html
