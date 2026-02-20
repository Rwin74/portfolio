import sharp from 'sharp';
import fs from 'fs';

async function optimizeHeroImage() {
    const imgPath = 'public/sad.webp';
    console.log(`Processing ${imgPath}...`);
    try {
        const buffer = fs.readFileSync(imgPath);
        const metadata = await sharp(buffer).metadata();
        console.log(`Original size: ${metadata.width}x${metadata.height}, Size: ${buffer.length} bytes`);

        const optimizedBuffer = await sharp(buffer)
            .resize({ width: 800, withoutEnlargement: true })
            .webp({ quality: 80, effort: 6 })
            .toBuffer();

        fs.writeFileSync(imgPath, optimizedBuffer);
        console.log(`Successfully resized ${imgPath}. New size: ${optimizedBuffer.length} bytes`);
    } catch (err) {
        console.error(`Error processing ${imgPath}`, err);
    }
}

optimizeHeroImage();
