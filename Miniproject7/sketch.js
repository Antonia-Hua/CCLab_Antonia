let cloudx = 100;
let cloudy = 100;
let a=100
let cN = document.getElementById("bgColor")

var grass = [];
var across;
var up;
var wind=0;
var blow=true;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent ("canvasContainer")

  rectMode(CENTER);
  across=600;
  up=570;
  for(var i=0; i<50; i++) {
    grass[i]=random(-5,5);
  }
}

function draw() {
  let c = cN.value;
  let x = width*0.68;
  let y = height/2;
  background(c,206,250);

  // draw robot and waving
  drawRobot()
  var armAngle = map(sin(frameCount * 0.05), -1, 1, radians(-40), radians(0))
  drawWaving(x, y, 100, armAngle)

  // draw cloud
  drawCloud(cloudx,cloudy-50)
  drawCloud(cloudx+150, cloudy+5)
  drawCloud(cloudx+300,cloudy-50)
  cloudx+=0.2

  // draw moving grass
  move()
  field()

}

function drawRobot(){
  push()
  stroke(0)
  translate(width/2,height/2)
  //body
	rect(0,0, 200,120);
  //legs
	rect(-60,70,40,50);
	rect(60,70,40,50);
  //face
	rect(0,-95, 75,95);
    ellipse(20,-120,15)
    ellipse(-20,-120,15)
  //smile
    arc(0, -90, 70, 70, 0.1*PI, 0.9*PI);
  pop()
}

function drawWaving(x,y, a, armAngle) {
  push();
  stroke(0);
  let ratio1 = (a * 2) / 5;
  let ratio2 = a / 10;
  let ratio3 = a / 5;
  translate(-a - ratio1 - ratio2 * 4 + x, (ratio2 * 2) / 3 + y);
  rotate(-armAngle);
  quad(
    0,
    0,
    ratio2,
    (-ratio2 * 4) / 3,
    -ratio3 * 3.5,
    -ratio3 - ratio2 / 3,
    -ratio3 * 4,
    (-ratio3 * 2) / 3
  );
  pop();
}

function drawCloud(cloudx,cloudy){
  noStroke();
  ellipse(cloudx, cloudy, 70, 50);
  ellipse(cloudx + 10, cloudy + 10, 70, 50);
  ellipse(cloudx - 20, cloudy + 10, 70, 50);
  cloudx+=0.2
}

// draw grass
function move(){
  if(wind==0){
    blow=true;
  }
  if(wind<10 && blow==true){
  wind=wind+0.5;
  }
   if(wind==9){
    blow=false;
  }
  if(blow==false){
  wind=wind-0.5;
  }
}

function field() {
  move();
  var i=0;
  var p=0;
  for(var z=up-50; z<=up+30; z=z+5){
    for(var k=-50; k<across+50; k=k+2){
    stroke(126,200,80)
    strokeWeight(2);
    line(k+p+0.1, z, k+grass[i]+p+wind, z- 15+constrain(grass[i],-5,5)+wind/10);
    i++;
    if(i==50){
      i=0;
    }
    }
   p=p+3;
  }

}