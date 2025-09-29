#!/usr/bin/env bash
# exit on error
set -o errexit

# Install backend dependencies
pip install -r api/requirements.txt

# Install frontend dependencies
npm install --prefix frontend

# Build the frontend
npm run build --prefix frontend