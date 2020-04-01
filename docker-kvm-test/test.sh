#!/bin/sh

for i in $(seq 1 10); do
	node cpu_request.js $i 10000000
	echo $i
done


