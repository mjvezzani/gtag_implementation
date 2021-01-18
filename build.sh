#!/bin/bash

grep -rl "gtag('" . | xargs sed -i '' -e "s/gtag('/legacyGa('/g"
