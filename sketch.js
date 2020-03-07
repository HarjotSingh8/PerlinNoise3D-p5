let inc = 0.05;
let offset = 0;
let n;
let width = 300;
let height = 300;
let d;
//let factor1 = 100;
//let factor2 = 20;
function setup() {
  width = windowWidth;
  //width = windowHeight;
  height = windowHeight;
  createCanvas(width, height);
  frameRate(60);
  noStroke();
  _pixelDensity = 1;
  //pixelDensity(1);
  d = pixelDensity();
  height *= d;
  width *= d;
  //noLoop();
}

function draw() {
  background(0);
  loadPixels();
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      //index = 4 * (j * width + i);
      index = 4 * (j * width + i);
      n = noise(i / 50 + offset, j / 50, offset) * 255;
      let falloff = width / 2 - i;
      if (falloff < 0) {
        falloff = -falloff;
      }
      if (falloff > width / 4) {
        falloff -= width / 4;
        falloff = (50 * falloff) / width;
        n -= falloff * falloff;
      }
      falloff = height / 2 - j;
      if (falloff < 0) {
        falloff = -falloff;
      }
      if (falloff > height / 4) {
        falloff -= height / 4;
        falloff = (50 * falloff) / height;
        n -= falloff * falloff;
      }
      if (n > 190) {
        //n = noise(noise(i / factor1) / factor2, noise(j / factor1) / factor2) * 255;
        pixels[index] = n + 30;
        pixels[index + 1] = n + 30;
        pixels[index + 2] = n + 30;
      } else if (n <= 95 && n > 80) {
        pixels[index] = 59;
        pixels[index + 1] = 179;
        pixels[index + 2] = 200;
      } else if (n <= 80) {
        pixels[index] = 0;
        pixels[index + 1] = 105;
        pixels[index + 2] = 148;
      } else if (n > 95 && n <= 110) {
        pixels[index] = 194;
        pixels[index + 1] = 178;
        pixels[index + 2] = 128;
      } else if (n > 110 && n < 125) {
        pixels[index] = 96;
        pixels[index + 1] = 128;
        pixels[index + 2] = 56;
      } else if (n > 125 && n < 150) {
        pixels[index] = 1;
        pixels[index + 1] = 68;
        pixels[index + 2] = 33;
      } else {
        pixels[index] = 90;
        pixels[index + 1] = 77;
        pixels[index + 2] = 65;
      }
      pixels[index + 3] = 255;
      /*if (n % 10 > 0 && n % 10 <= 0.5) {
        pixels[index] = 0;
        pixels[index + 1] = 0;
        pixels[index + 2] = 0;
        pixels[index + 3] = 122;
      }*/
    }
  }
  updatePixels();
  offset += inc;
  //noiseSeed(random(1000));
}
