# Use official Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json & install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight server to serve the build
RUN npm install -g serve

# Expose port
EXPOSE 3001

# Command to start server
CMD ["serve", "-s", "build", "-l", "3001"]
