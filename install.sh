#!/bin/bash

# Define colors for pretty output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Helper function for checking errors
check_error() {
  if [ $? -ne 0 ]; then
    echo -e "${RED}An error occurred, exiting script...${NC}"
    exit 1
  fi
}

# Check if Docker is installed
if ! [ -x "$(command -v docker)" ]; then
  echo -e "${GREEN}Installing Docker...${NC}"
  curl -fsSL https://get.docker.com -o get-docker.sh
  sh get-docker.sh
  check_error
else
  echo -e "${GREEN}Docker is already installed.${NC}"
fi

# Check if Docker Compose is installed
if ! [ -x "$(command -v docker-compose)" ]; then
  echo -e "${GREEN}Installing Docker Compose...${NC}"
  # Install Docker Compose (adjust version as needed)
  sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  check_error
  sudo chmod +x /usr/local/bin/docker-compose
  check_error
else
  echo -e "${GREEN}Docker Compose is already installed.${NC}"
fi

# Building the Docker images
echo -e "${GREEN}Building Docker images...${NC}"
docker-compose up --build -d
check_error

echo -e "${GREEN}Installation completed!${NC}"
