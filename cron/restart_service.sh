#!/bin/bash

# Navigate to service repository:
cd /opt/waco-display-box

# stop and start docker service (must use SUDO when running this script, or be root!)
docker-compose down && docker-compose up -d