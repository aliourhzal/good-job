#!/bin/bash

URL="http://127.0.0.1:3000/api/code/fVLttu" # Replace with your URL
REQUESTS=500 # Replace with the number of requests you want

send_request() {
	RESPONSE=$(curl -o /dev/null -s -w "%{http_code}" "$URL")
    if [ "$RESPONSE" -eq 200 ]; then
        echo "response successful"
    fi
}

for (( i=1; i<=$REQUESTS; i++ ))
do
    send_request &
done