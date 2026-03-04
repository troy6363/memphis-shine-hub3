const ffmpegPath = require('ffmpeg-static');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, 'public', 'assets', 'carwash1.mp4');
const outputPath = path.join(__dirname, 'public', 'assets', 'carwash1_optimized.mp4');

console.log(`Input: ${inputPath}`);
console.log(`Output: ${outputPath}`);

const args = [
    '-i', inputPath,
    '-vcodec', 'libx264',
    '-crf', '30',
    '-preset', 'slow',
    '-an', // Strip audio
    '-y',  // Overwrite output
    outputPath
];

console.log(`Running ffmpeg...`);
const ffmpeg = spawn(ffmpegPath, args);

ffmpeg.stderr.on('data', (data) => {
    // ffmpeg outputs progress to stderr
    const output = data.toString();
    if (output.includes('frame=')) {
        process.stdout.write('.');
    }
});

ffmpeg.on('close', (code) => {
    if (code === 0) {
        console.log('\nCompression finished successfully.');
        const stats = fs.statSync(outputPath);
        console.log(`New size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
    } else {
        console.error(`\nCompression failed with code ${code}`);
        process.exit(code);
    }
});
