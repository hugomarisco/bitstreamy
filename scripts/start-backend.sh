#!/bin/bash

node packages/api/lib/index.js &
node packages/tracker/lib/cli.js &