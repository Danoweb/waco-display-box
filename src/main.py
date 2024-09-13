from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import base64

app = FastAPI()

# Allow CORS for frontend requests (jQuery)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this in production for security
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the folder where the images are stored
IMAGES_FOLDER = "images"

class ImageData(BaseModel):
    filename: str
    data: str

@app.get("/images/")
def list_images(img_folder: str):
    """
    List all available image filenames in the images folder.
    """
    try:
        img_folder.replace('../', '')
        images = os.listdir(IMAGES_FOLDER+f"/{img_folder}/")
        # Filter to only include image files (optional step)
        image_files = [img for img in images if img.lower().endswith(('jpg', 'jpeg', 'png', 'gif'))]
        return {"images": image_files}
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Image folder not found")

@app.get("/images/{image_name}", response_model=ImageData)
def serve_image(image_name: str, img_folder: str):
    """
    Serve the requested image as base64 data.
    """
    image_path = os.path.join(IMAGES_FOLDER+f"/{img_folder}/", image_name)
    
    if os.path.exists(image_path) and image_name.lower().endswith(('jpg', 'jpeg', 'png', 'gif')):
        with open(image_path, "rb") as img_file:
            b64_string = base64.b64encode(img_file.read()).decode('utf-8')
        return {"filename": image_name, "data": b64_string}
    else:
        raise HTTPException(status_code=404, detail="Image not found")
    
@app.get("/env")
def get_env():
    """
    Returns environment variables relevant to the frontend.
    """
    return {
        "api_url": os.getenv("API_URL", "http://localhost:8000"),
        "app_name": os.getenv("APP_NAME", "Waco Image display"),
        "img_folder": os.getenv("IMG_FOLDER", "display_front"),
        # Add more environment variables here as needed
    }