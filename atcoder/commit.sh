#!/usr/local/bin/zsh

abc_num=`git status | grep abc | wc -l | xargs echo`
git add abc*
git commit -m "WIP ${abc_num}sho-jin"
