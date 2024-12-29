#!/bin/bash

cd $(dirname $0)

# Build Site
hugo

# Push Main Branch
git add .
git commit -m "$(date '+%Y-%m-%d %H:%M:%S')"
git push

# Push Github Pages Branch
git subtree split --prefix public -b gh-pages-deploy
git push origin gh-pages-deploy:gh-pages --force
git branch -D gh-pages-deploy
