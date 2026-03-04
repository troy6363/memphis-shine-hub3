const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const ffmpeg = require('ffmpeg-static');

const assetsDir = path.join(__dirname, 'public', 'assets');

const videos = [
    { src: 'carwash1_optimized.mp4', dst: 'hero-final.mp4' },
    { src: 'specials.mp4', dst: 'specials-final.mp4' },
    { src: 'booking-hero.mp4', dst: 'booking-final.mp4' }
];

videos.forEach(v => {
    const srcPath = path.join(assetsDir, v.src);
    const dstPath = path.join(assetsDir, v.dst);

    console.log(`Optimizing ${v.src}...`);
    try {
        // 720p, 800k bitrate, no audio, faststart
        execSync(`"${ffmpeg}" -y -i "${srcPath}" -vf "scale=1280:-2" -b:v 800k -an -movflags +faststart "${dstPath}"`);
        console.log(`✓ ${v.dst} created successfully.`);
    } catch (e) {
        console.error(`✗ Error optimizing ${v.src}:`, e.message);
    }
});
