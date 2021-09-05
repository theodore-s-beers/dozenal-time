#! /usr/bin/env bash

set -Eeuo pipefail

sort-package-json &&
	npm install &&
	npm run compile &&
	mv ts/dozenal.js js/dozenal.js &&
	npm run prettify &&
	npm run standardize
