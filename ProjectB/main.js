//a function that calls the text

let a;
let k = 1;
let img;

// let posx=[710,1809,1223,1159,1672,1397,1447,372,1099];
// let posy=[570,296,188,245,374,404,341,290,216];

let Circle1;
let Circle2;
let Circle3;
let Circle4;
let Circle5;
let Circle6;
let Circle7;
let Circle8;
let Circle9;

function setup() {
  let canvas = createCanvas(1400, 800);
  canvas.parent('p5-container');
  img = loadImage('assets/world-map.png');
  a = new Axe();

  Circle1=new Circle(710,570,10)
}

function draw() {
  background("#89CFF0");
  image(img, 420, 80);
  img.resize(1000,0)

  a.draw();
  a.update();

  strokeWeight(2);
  fill(0);
  textFont("Courier");
  textSize(80);
  text("AXE", 80, 280);
  text("THE TAX", 80, 520);
  
  Circle1.checkMouse();
  Circle1.display();
}

class Circle{
  constructor(x,y,rad){
  this.x=x;
  this.y=y;
  this.rad=rad;
  // this.r=255;
  // this.g=255;
  // this.b=255
  }

  checkMouse(){
    let distance = dist(this.x, this.y, mouseX, mouseY);
    if (distance < this.rad) {
      // mouse is in the area
      this.r = 255;
      this.g = 255;
      this.b = 0;
      if (mouseIsPressed) {
        this.r = 255;
        this.g = 0;
        this.b = 0;
      }
    }
    else{
      this.r = 255;
      this.g = 255;
      this.b = 255;
    }
  }

  display(){
    push();
    noStroke();
    fill(this.r,this.g,this.b);
    ellipse(this.x,this.y,10);
    pop()
  }
}

class Axe {
  constructor() {
    this.k = 1;
    this.angle = 0;
  }
  update() {
    this.angle = map(sin(frameCount * 0.1), -1, 1, -0.15, 0.5);
  }
  draw() {
    push();
    translate(120, 450)
    rotate(this.angle);
    noStroke();
    fill("#88503A");

    quad(
      -11 * this.k,
      -11 * this.k,
      11 * this.k,
      11 * this.k,
      187 * this.k,
      -171 * this.k,
      163 * this.k,
      -194 * this.k
    );

    fill("#636363");

    beginShape();
    vertex(128 * this.k, -179 * this.k);
    vertex(175 * this.k, -133 * this.k);
    vertex(202 * this.k, -150 * this.k);
    vertex(220 * this.k, -132 * this.k);
    vertex(154 * this.k, -66 * this.k);
    vertex(137 * this.k, -85 * this.k);
    vertex(154 * this.k, -108 * this.k);
    vertex(103 * this.k, -150 * this.k);
    endShape(CLOSE);

    fill("#9B9B9B");
    quad(
      220 * this.k,
      -132 * this.k,
      225 * this.k,
      -127 * this.k,
      161 * this.k,
      -59 * this.k,
      154 * this.k,
      -66 * this.k
    );
    fill("#D20000");
    quad(
      225 * this.k,
      -127 * this.k,
      228 * this.k,
      -123 * this.k,
      166 * this.k,
      -56 * this.k,
      161 * this.k,
      -59 * this.k
    );

    pop();
  }
}

function openDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-wrapper");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function displayText(){

  
}