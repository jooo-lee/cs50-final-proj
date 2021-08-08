class Circle {
  constructor(tempX, tempY, tempRadius) {
    // Circle dimensions
    this.x = tempX;
    this.y = tempY;
    this.radius = tempRadius;
    // RGB colour values
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    // Circle transparency
    this.transparency = 100;
  }

  // Check if point is inside circle
  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    return (d < this.radius);
  }

  // Set new random RGB colour values
  changeColour() {
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  // Circle shaking
  move() {
    let nums = [1, 2];
    let num = random(nums);
    let s = second();
    if (s % 2 == 0) {
      if (num == 1) {
        this.x += random(-5, 5);
      }
      else {
        this.y += random(-5, 5);
      }
    }
  }

  // Enlarge circles
  enlarge() {
    this.radius += 10;
  }

  // Shrink circles
  shrink() {
    this.radius -= 10;
  }

  // Draw circles
  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.transparency);
    ellipse(this.x, this.y, this.radius * 2);
  }
}
