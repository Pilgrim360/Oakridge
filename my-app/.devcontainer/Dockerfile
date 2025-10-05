# Use official Dev Containers Node image (includes apt)
FROM mcr.microsoft.com/devcontainers/javascript-node:0-20-bookworm

# Switch to root so we can install packages
USER root

# Install Git LFS
RUN apt-get update && apt-get install -y git-lfs && git lfs install

# Switch back to vscode user for normal dev
USER vscode

# Set working directory
WORKDIR /workspaces/my-app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Expose the Next.js port
EXPOSE 3000
