#!/bin/bash

cd $(dirname $0)
hugo
git add .
git commit -m "$(date '+%Y-%m-%d %H:%M:%S')"
git push
git subtree split --prefix public -b gh-pages-deploy
git push origin gh-pages-deploy:gh-pages --force
git branch -D gh-pages-deploy
