# Use nginx:alpine as the base image
FROM nginx:alpine

# Install Node.js to run your generation script
RUN apk add --no-cache nodejs npm

# Set the working directory
WORKDIR /usr/src/app/nginx

# Copy the necessary files to generate the Nginx config
COPY ./generate_nginx_conf.js .
COPY ./nginx.conf.template .

# Copy the entrypoint script
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expose port 80
EXPOSE 80

# Set the entrypoint
ENTRYPOINT ["/entrypoint.sh"]
