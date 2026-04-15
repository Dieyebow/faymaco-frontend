const fs = require('fs');
const execSync = require('child_process').execSync;

try {
  require.resolve('sharp');
} catch (e) {
  execSync('npm install --no-save sharp', { stdio: 'inherit' });
}

const sharp = require('sharp');
const path = require('path');

const dir = 'public/favicon_io';
const files = [
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'apple-touch-icon.png',
  'favicon-16x16.png',
  'favicon-32x32.png'
];

async function processImages() {
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) continue;
    
    console.log('Processing', file);
    const buffer = fs.readFileSync(filePath);
    const metadata = await sharp(buffer).metadata();
    
    await sharp({
      create: {
        width: metadata.width,
        height: metadata.height,
        channels: 4,
        background: { r: 218, g: 255, b: 209, alpha: 1 } // #DAFFD1
      }
    })
    .composite([
      { input: buffer, blend: 'over' }
    ])
    .png()
    .toFile(path.join(dir, 'tmp_' + file));
    
    fs.renameSync(path.join(dir, 'tmp_' + file), filePath);
  }
  
  // also handle favicon.ico if possible, though sharp doesn't write .ico
  // we can just delete favicon.ico so it uses the pngs fallback which index.html provides
  if (fs.existsSync(path.join(dir, 'favicon.ico'))) {
    fs.unlinkSync(path.join(dir, 'favicon.ico'));
  }
  console.log('Done!');
}

processImages().catch(console.error);
