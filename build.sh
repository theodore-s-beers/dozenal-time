#! /usr/bin/env bash

set -Eeuo pipefail

sort-package-json &&
	npm install &&
	rm js/dozenal.js &&
	npm run standardize &&
	npm run compile &&
	mv ts/dozenal.js js/dozenal.js &&
	npm run prettify &&
	npm run standardize
