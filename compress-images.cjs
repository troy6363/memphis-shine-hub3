// Compress JPEG images using ffmpeg (already installed via ffmpeg-static)
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const ffmpeg = require('ffmpeg-static');
const assetsDir = path.join(__dirname, 'src', 'assets');

const images = [
    'shop-interior.jpeg',
    'audi-mobile.jpeg',
    'ram-2500-white.jpeg',
    'toyota-avalon.jpeg',
    'bmw-interior.jpeg',
    'ram-truck.jpeg',
    'sprinter-shop.jpeg',
    'camaro-detail.jpeg',
    'sprinter-detail.jpeg',
];

for (const img of images) {
    const src = path.join(assetsDir, img);
    const tmp = path.join(assetsDir, `_tmp_${img}`);
    const sizeBefore = (fs.statSync(src).size / 1024).toFixed(0);

    try {
        execSync(`"${ffmpeg}" -y -i "${src}" -vf "scale='min(1200,iw)':-1" -q:v 6 "${tmp}"`, {
            stdio: 'pipe',
            timeout: 15000
        });
        fs.renameSync(tmp, src);
        const sizeAfter = (fs.statSync(src).size / 1024).toFixed(0);
        console.log(`✓ ${img}: ${sizeBefore}KB → ${sizeAfter}KB (${Math.round((1 - sizeAfter / sizeBefore) * 100)}% smaller)`);
    } catch (e) {
        console.log(`✗ ${img}: failed - ${e.message}`);
        if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
    }
}
