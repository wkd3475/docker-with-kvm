#!/bin/sh

for i in $(seq 1 10); do
	sync && echo 3 > sudo /proc/sys/vm/drop_caches && \
	node json_request_test.js $i
done

