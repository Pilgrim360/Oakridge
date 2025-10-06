
# Use official Dev Containers Node image (includes apt)
FROM mcr.microsoft.com/devcontainers/javascript-node:20-bookworm

# Switch to root for any additional setup
USER root

# Install any additional OS packages if needed
# (Removed Git LFS as it's not required for this project)

# Switch back to vscode user for normal dev
USER vscode

# Set working directory to match the devcontainer workspace
WORKDIR /workspaces/Oakridge/my-app

# Copy package files first for better layer caching
COPY package*.json ./

# Copy source code (excluding files in .dockerignore)
COPY . .

# Note: npm install moved to devcontainer.json postCreateCommand to run as vscode user

# Expose the Next.js port
EXPOSE 3000
