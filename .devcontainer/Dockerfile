# See https://github.com/devcontainers/images/tree/main/src/javascript-node
# for image contents.
FROM mcr.microsoft.com/devcontainers/javascript-node:0-20-bookworm

# Set working directory
WORKDIR /workspaces/my-app

# Copy package files and install dependencies.
# This is to cache dependencies and speed up container creation.
# The build context must be set to the parent directory in devcontainer.json.
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .