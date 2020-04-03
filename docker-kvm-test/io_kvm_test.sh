#!/bin/sh

for i in $(seq 1 2); do
	node io_kvm_request.js $i 2000000
done
