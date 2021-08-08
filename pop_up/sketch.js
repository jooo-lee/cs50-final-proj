// Pika sound was found at the link below
// https://www.soundboard.com/sb/sound/298334

let img;
let sound;

function preload() {
  img = loadImage("pika.jpeg");
  sound = loadSound("pikachu.mp3");
}

function setup() {
  createCanvas(300, 300, WEBGL);

  // Play sound approximately when user opens pop up
  sound.play();
}

function draw() {
  background(0);

  // Draw 3D box
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  box(80);
  pop();
}
