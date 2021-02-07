#/bin/bash

IMGS=50
R=$(cat /dev/urandom | tr -dc '0-9' | fold -w 256 | head -n 1 | sed -e 's/^0*//' | head --bytes 3)
curl https://thispersondoesnotexist.com/image --output ./portraits/$R.jpg

for i in $(seq 1 $IMGS); do
    curl https://thispersondoesnotexist.com/image --output ./portraits/$i.jpg
    sleep 1
done
