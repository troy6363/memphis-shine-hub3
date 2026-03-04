const ffmpegPath = require('ffmpeg-static');
const { spawn } = require('child_process');
const path = require('path');

const videoPath = path.join(__dirname, 'public', 'assets', 'carwash1_optimized.mp4');

const args = ['-i', videoPath];

const ffmpeg = spawn(ffmpegPath, args);

ffmpeg.stderr.on('data', (data) => {
    process.stdout.write(data);
});

ffmpeg.on('close', (code) => {
    // ffmpeg exits with code 1 if no output file is specified, which is fine for -i
    process.exit(0);
});
