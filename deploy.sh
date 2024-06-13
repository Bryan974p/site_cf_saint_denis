#!/bin/bash

set -e

# Build the project
npm run build

# Navigate into the build output directory
cd dist

# Initialize a new git repository
git init
git add -A
git commit -m 'deploy'

# Push to the gh-pages branch
git push -f git@github.com:Bryan974p/site_cf_saint_denis.git main:gh-pages

# Return to the project root
cd -
