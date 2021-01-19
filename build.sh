#!/bin/bash

grep -rl --exclude=\*.sh "ga('" . | xargs sed -i '' -e "s/ga('/abstractedAnalytics('/g"
