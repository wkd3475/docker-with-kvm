#!/bin/sh

for i in $(seq 1 100); do
	node io_request.js $i 2000000
done
