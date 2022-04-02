#! /usr/bin/env bash

set -Eeuo pipefail

sort-package-json &&
	npm install &&
	npm run format &&
	npm run lint &&
	npm run check &&
	npm run compile
