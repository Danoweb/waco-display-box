import fs from 'fs';
import path from 'path';

type ImagePath = string;

export function loadImages(folderPath: string): ImagePath[] {
  const absolutePath = path.join(__dirname, '..', 'public', folderPath);
  let imagePaths: ImagePath[] = [];

  try {
    const files = fs.readdirSync(absolutePath);

    // Filter out only image files (you can add more extensions if needed)
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'];
    imagePaths = files
      .filter((file) => imageExtensions.includes(path.extname(file).toLowerCase()))
      .map((image) => `${folderPath}/${image}`);
  } catch (error) {
    console.error(`Error reading directory: ${absolutePath}`, error);
  }

  return imagePaths;
}