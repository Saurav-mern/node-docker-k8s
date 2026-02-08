# Stage 1: Build the Svelte app
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*
# Copy the build output from the builder stage
# NOTE: SvelteKit 'adapter-static' outputs to the 'build' folder
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80