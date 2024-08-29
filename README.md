# waco-display-box
A display system for the notification TVs at WACO Air Museum

# Setup
* Create a `.env` file in the root of the project folder.
* use the `.env.example` as an example of what values should be in the `.env` file (copy/paste and then rename)
* Use a different folder in the repo for each display device (`/display1`, `/display2`, `/displayHangar`, `/displayEntry`, etc.)

# Slideshow
* The images set in the folder named in the `.env` file are loaded and added to the slideshow.
* The image dimensions should be the same size (consider TV resolutions, 1080, 720, etc)

## Adding images to slide show
* Using Github, navigate to the display's folder in `/src/public/display_images/(...)`
* CLick the "Add Files" button in the top right, and `upload files` and drag and drop your images to the folder
* Fill out the details in the box below
  * (Do not put "adding images", make sure you indicate what you added, so we can troubleshoot problems in the future.)
  * Use comments like: "Added Hangar Photo" or "Added YellowPlaneWithTail Number photo"

# Maintenance
* The System will automatically pull new images and restart the display server every 4 hours.
* see `cron/reload.sh`

# Additional Tips and Tricks
* On the display Raspberry pi, you may need to run this command to allow git to update:
  * `git config --global --add safe.directory /opt/waco-display-box`