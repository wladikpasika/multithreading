# Stage 1: Use a Node.js image to generate the Nginx config
FROM node:20-alpine AS config-generator

# Set the working directory
WORKDIR /usr/src/app/nginx

# Copy the necessary files to generate the Nginx config
COPY ./generate_nginx_conf.js .
COPY ./nginx.conf.template .

# Create a directory to store the generated file
RUN mkdir -p ./generated

# Generate the Nginx config and move it to the 'generated' directory
RUN node generate_nginx_conf.js && \
    echo "Generated nginx.conf file:" && \
    cat ./nginx.conf && \
    mv ./nginx.conf ./generated/nginx.conf

# Stage 2: Use the Nginx image to serve the application
FROM nginx:alpine

# Copy the generated Nginx config from the first stage
COPY --from=config-generator /usr/src/app/nginx/generated/nginx.conf /etc/nginx/nginx.conf


# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
