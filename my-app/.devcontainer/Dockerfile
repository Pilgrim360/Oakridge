FROM mcr.microsoft.com/devcontainers/javascript-node:0-20-bookworm

WORKDIR /workspaces/my-app

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000
