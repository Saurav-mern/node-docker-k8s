FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output from your local machine to the container
COPY build /usr/share/nginx/html

# Optional: If you want routing to work when you refresh the page 
# (e.g., localhost:8081/about), we will need an nginx.conf later.
# For now, let's just get the home page working.

EXPOSE 80