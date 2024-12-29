#!/bin/bash

cd $(dirname $0)
git subtree split --prefix public -b gh-pages-deploy
git push origin gh-pages-deploy:gh-pages --force
git branch -D gh-pages-deploy
