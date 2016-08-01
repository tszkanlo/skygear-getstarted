#!/bin/bash

echo '[git pre-commit] Building Artifact...'
npm run build

echo '[git pre-commit] Adding /dist/skygear-getstarted.js'
git add $(git rev-parse --show-toplevel)/dist/skygear-getstarted.js
