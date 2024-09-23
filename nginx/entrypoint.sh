#!/bin/sh

# Generate the Nginx config
node generate_nginx_conf.js

# Move the generated nginx.conf to /etc/nginx/nginx.conf
mv ./nginx.conf /etc/nginx/nginx.conf

# Copy the generated file to the mounted directory (accessible on the host)
cp /etc/nginx/nginx.conf ./generated/nginx.conf

# Start Nginx in the foreground
nginx -g 'daemon off;'
