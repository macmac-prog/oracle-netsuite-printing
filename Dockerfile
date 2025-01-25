# Use Node.js as a base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app


# Install the dependencies
RUN npm install -g pnpm

# Copy the package.json and package-lock.json to the working directory
COPY package.json pnpm-lock.yaml ./

RUN pnpm install


# Copy the remaining application files to the working directory
COPY . .

# Build the application
RUN pnpm run build

# Install a simple HTTP server to serve static files
RUN npm install -g serve

EXPOSE 1000

CMD ["serve", "-s", ".next", "-l", "1000"]
