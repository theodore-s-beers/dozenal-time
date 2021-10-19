#! /usr/bin/env bash

set -Eeuo pipefail

sort-package-json &&
	npm install &&
	rm js/dozenal.js &&
	npm run standardize &&
	npm run check &&
	npm run compile &&
	npm run prettify &&
	npm run standardize
