# Use the official Python image from Docker Hub
FROM python:3.11-slim

# Set working directory inside the container
WORKDIR /app

# Copy the FastAPI app into the container
COPY ./src/requirements.txt /app/requirements.txt

# Install FastAPI and Uvicorn
RUN pip install -r requirements.txt

# Expose port 8000 for the app
EXPOSE 8000

# Command to run the FastAPI app
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]