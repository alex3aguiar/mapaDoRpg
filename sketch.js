let img;
let slider;
var header;
let fontsize = 30;

function preload() {
  img = loadImage('https://s3.amazonaws.com/files.d20.io/images/228763394/ChT8l3Fb5c0t9lE4R--w-Q/max.jpg?1623797510');
}

const points = [
  {
    zoom:-500,
    x: 1115,
    y: 980,
    date:"Dia 01 (21/03, qua), 08h"
  },
    {
    zoom:-500,
    x: 1315,
    y: 580,
    date:"Dia 01 (21/03, qua), 08h"
  }
]
let sizeImage = {
  x:2048,
  y:1536
}
function setup() {
  createCanvas(sizeImage.x, sizeImage.y);
  slider = createSlider(-1200, 1200, -500);
  slider.position(10, 10);
  slider.style('width', '200px');
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {

  let val = slider.value();
  const point = points[0];
  //let zoom =   point.zoom/1200;
  let zoom =   val/1200;

  background(220);
  const newY = (1+ zoom) * sizeImage.y;
  const newX = (1+ zoom) * sizeImage.x;
  console.log(newX, newY, newX/newY)
  image(img, 0, 0, newX, newY);
  fill('red');
  drawPins(points[0], zoom)
  drawPins(points[1], zoom)
  drawLineBetween(points[0], points[1], zoom)
  drawWords(point.date);


}

function drawPins(point, zoom) {
    fill('red');
    rect((1+ zoom) * point.x, (1+ zoom) * point.y, 10, 10);
}
function drawLineBetween(point1, point2, zoom) {
    fill('red');
    line((1+ zoom) * point1.x, (1+ zoom) * point1.y, (1+ zoom) * point2.x, (1+ zoom) * point2.y);
}

function drawWords(x) {
  fill(0);
  text(x, 200, 60);
}
