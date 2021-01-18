#!/bin/bash

pwd > place.txt

grep -rl "gtag('" . | xargs sed -i '' -e "s/gtag('/legacyGa('/g"
