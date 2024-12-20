#!/bin/sh
set -e

npm run generate

cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:SpilMand/test-1.git master:gh-pages

cd -