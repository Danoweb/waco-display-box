#!/bin/bash

# Navigate to the directory where your repo is located
cd /opt/waco-display-box

# Fetch the latest changes from the remote repository
git fetch origin

# Reset the current branch to match the remote branch, discarding any local changes
git reset --hard origin/$(git rev-parse --abbrev-ref HEAD)

# Pull the latest changes from the remote repository
git pull origin $(git rev-parse --abbrev-ref HEAD)