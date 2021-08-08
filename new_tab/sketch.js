// Hello sound was taken from the link below
// http://soundbible.com/769-Hello.html

let circles = [];
let a = 0;
let hello;
let maxRadius, minRadius;
let a1, a2;
let h;
let img;

function preload() {
  img = loadImage("hi_pika.png");
  hello = loadSound("hello.mp3");
}

function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  c.position(0, 0);

  // Range of radii for circles
  minRadius = 10;
  maxRadius = 50;

  // Define background gradient colours
  a1 = color(255);
  a2 = color(50);

  // Get time from computer
  h = hour();
}

function mousePressed() {
  // If first mouse press
  if (circles.length == 0) {
    // a++ makes text disappear after first mouse press
    a++;
    let radius = random(minRadius, maxRadius);
    let circle = new Circle(mouseX, mouseY, radius);
    circles.push(circle);

    // Play hello sound effect
    hello.play();
    return 0;
  }

  // If clicking on existing circle, change colour
  for (let i = 0; i < circles.length; i++) {
    if (circles[i].contains(mouseX, mouseY)) {
      circles[i].changeColour();
      return 0;
    }
  }

  // Else create new circle
  let radius = random(minRadius, maxRadius);
  let circle = new Circle(mouseX, mouseY, radius);
  circles.push(circle);

  // Play hello sound effect
  hello.play();
}

function keyPressed() {
  // If up arrow pressed, make circles larger
  if (keyCode === UP_ARROW) {
    for (let i = 0; i < circles.length; i++) {
      circles[i].enlarge();
    }
  }
  // If down arrow pressed, make circles smaller
  else if (keyCode === DOWN_ARROW) {
    for (let i = 0; i < circles.length; i++) {
      circles[i].shrink();
    }
  }
}

function draw() {
  // Gradient
  setGradient(0, 0, windowWidth, windowHeight, a1, a2);

  // Write text
  if (a === 0) {
    let greeting;
    textSize(50);
    // If night
    if (h >= 22 || h < 4) {
      greeting = "Good night."
    }
    // If evening
    else if (h >= 18) {
      greeting = "Good evening."
    }
    // If afternoon
    else if (h >= 12) {
      greeting = "Good afternoon."
    }
    // If morning
    else {
      greeting = "Good morning!"
    }
    text(greeting, 15, 60);
  }

  // Display and move circles
  for (let i = 0; i < circles.length; i++) {
    circles[i].display();
    circles[i].move();
  }

  // When enter key pressed, show pikachu
  if (keyIsPressed === true && keyCode === ENTER) {
    image(img, windowWidth - img.width / 10, windowHeight - img.height / 10, img.width / 10, img.height / 10);
  }
}

function setGradient (x, y, w, h, c1, c2) {
  // Top to bottom gradient
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}
