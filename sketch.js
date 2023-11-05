let isHovered = false;
let button;
let bookImage;
let customImageWidth = 100;
let customImageHeight = 100;
let customImageX = 150;
let customImageY = 150;

function preload() {
  bookImage = loadImage('book.jpg'); // Load the book image before setup
}

function setup() {
  createCanvas(400, 400);
  button = createButton(''); // Create a button without text
  button.position(150, 100);
  button.mouseOver(onButtonHover);
  button.mouseOut(onButtonOut);

  let img = createImg('file.png'); // Create an image element
  img.size(64, 50); // Set the size of the image to match the button
  img.parent(button); // Place the image inside the button
  button.style('background-color', 'transparent'); // Set the background color of the button to transparent
}

function draw() {
  clear(); // Clear the canvas each frame to make it transparent

  if (isHovered) {
    drawBookImage(); // Call the function to draw the book image with custom properties when hovering
  }
}

function onButtonHover() {
  isHovered = true;
  customImageWidth = 320; // Change the width when hovering
  customImageHeight = 175; // Change the height when hovering
  customImageX = 30; // Change the X position when hovering
  customImageY = 160; // Change the Y position when hovering
}

function onButtonOut() {
  isHovered = false;
  customImageWidth = 100; // Reset the width
  customImageHeight = 100; // Reset the height
  customImageX = 50; // Reset the X position
  customImageY = 300; // Reset the Y position
}

function drawBookImage() {
  image(bookImage, customImageX, customImageY, customImageWidth, customImageHeight); // Draw the book image with custom properties
}
