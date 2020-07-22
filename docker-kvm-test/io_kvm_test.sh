#!/bin/sh

for i in $(seq 1 100); do
	echo $i
	node io_kvm_request.js $i 2000000
done
