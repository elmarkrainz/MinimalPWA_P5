
function setup() {

  //createCanvas(300, 300);
  createCanvas(windowWidth, windowHeight);
}

let y = 0;


function draw() {
  background(220);
  circle(190, y +=3, 50);
  if(y > windowHeight) {
    y = -10;
    console.log('reset');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
  
  

  
