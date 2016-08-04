#!/bin/bash

echo '[git pre-commit] Linting Code...'
npm run lint
rc=$?; if [[ $rc != 0 ]]; then
  echo '[git pre-commit] Lint Failed, Abort.'
  exit $rc
fi

echo '[git pre-commit] Building Artifact...'
npm run build
rc=$?; if [[ $rc != 0 ]]; then
  echo '[git pre-commit] Build Failed, Abort.'
  exit $rc
fi

echo '[git pre-commit] Adding /dist/skygear-getstarted.js'
git add $(git rev-parse --show-toplevel)/dist/skygear-getstarted.js
