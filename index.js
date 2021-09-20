const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');
 
const img1 = PNG.sync.read(fs.readFileSync('img1.png'));
const img2 = PNG.sync.read(fs.readFileSync('img2.png'));
const {width, height} = img1;
const diff = new PNG({width, height, colorType: 6});
 
pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.01, diffColor: [0, 255, 0] });
 
fs.writeFileSync('diff.png', PNG.sync.write(diff));