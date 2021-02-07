var img;
function preload() {
  let PERS_COUNT = Math.floor(Math.random() * (50 - 1) + 1);

  pers = loadImage(`./portraits/${PERS_COUNT}.jpg`);
  let PLANT_COUNT = Math.floor(Math.random() * (10 - 1) + 1);
  console.log(PLANT_COUNT);
  plant = loadImage(`./plants/${PLANT_COUNT}.jpg`);
}

function setup() {
  // put setup code here
  createCanvas(1000, 1000);
  let grey = color(163, 193, 188);
  let pink = color(254, 237, 240);
  let egg = color(255, 255, 233);
  let oceanBlue = color(200, 222, 228);
  let white = color(255, 255, 255);
  let skyBlue = color(220, 216, 255);
  let teal = color(194, 234, 240);

  let PALETTE = [grey, pink, egg, oceanBlue, white, skyBlue, teal];
  const COLOR = PALETTE[Math.floor(Math.random() * Math.floor(PALETTE.length))];
  background(COLOR);
  let halfW = width / 2;
  let halfH = height / 2;
  // image(plant, height / 3, width / 3, width / 3, height / 3);
  image(pers, halfW / 2, halfH / 2, halfW, halfW);
  filter(GRAY);
  copy(plant, 0, 0, halfW, halfH, width / 3, height / 3, width / 3, height / 3);
}

function draw() {}
