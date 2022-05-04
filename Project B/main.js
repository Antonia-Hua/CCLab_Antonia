let a;
let k = 1;
let selected = "";

function myFunction() {
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

function selectCountry( name ) {
  selected = name;
}

function setup() {
  let axe = createCanvas(windowWidth, windowHeight);
  axe.parent("canvasContainer")
  a = new Axe();
}

function draw() {
  background("#89CFF0");
  if (selected == "Argentina") {
    displayArgentina();
  }
  if (selected == "China") {
    displayChina();
  }
  if (selected == "Finland") {
    displayFinland();
  }
  if (selected == "Germany") {
    displayGermany();
  }
  if (selected == "Japan") {
    displayJapan();
  }
  if (selected == "Kenya") {
    displayKenya();
  }
  if (selected == "Saudi Arabia") {
    displaySaudiArabia();
  }
  if (selected == "United States of America") {
    displayUnitedStatesofAmerica();
  }
  if (selected == "The United Kingdom") {
    displayTheUnitedKingdom();
  }

  a.draw();
  a.update();

  strokeWeight(2);
  fill(0);
  textFont("Courier");
  textSize(80);
  text("AXE", 150, 240);
  text("THE TAX", 150, 460)
}

function displayChina() {
  background(255, 0, 0);
}
function displayArgentina() {
  background(255, 255, 0);
  // you can do much more here!
}
function displayFinland() {
  background(255, 0, 0);
}
function displayGermany() {
  background(255, 0, 0);
}
function displayJapan() {
  background(255, 0, 0);
}
function displayKenya() {
  background(255, 0, 0);
}
function displaySaudiArabia() {
  background(255, 0, 0);
}
function displayUnitedStatesofAmerica() {
  background(255, 0, 0);
}
function displayTheUnitedKingdom() {
  background(255, 0, 0);
}

class Axe {
  constructor() {
    this.k = 1;
    this.angle = 0;
  }

  update() {
    push();
    this.angle = map(sin(frameCount * 0.1), -1, 1, -0.15, 0.5);
    pop();
  }

  draw() {
    push();
    translate(209, 387)
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

