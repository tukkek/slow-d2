#!/usr/bin/bash
set -e

rm --recursive --force data/
cp --recursive base/data/ .
./slow.js
