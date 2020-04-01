#!/bin/sh

for i in $(seq 1 20); do
	node io_request.js $i 2000000
done
