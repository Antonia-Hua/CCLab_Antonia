
let a;
let k = 0.8;
let img;

let selected = "";

let Circle1;
let Circle2;
let Circle3;
let Circle4;
let Circle5;
let Circle6;
let Circle7;
let Circle8;
let Circle9;


function selectCountry(name) {
  selected = name;
}

function setup() {
  let canvas = createCanvas(1500, 800);
  canvas.parent('p5-container');
  img = loadImage('assets/world-map.png');
  a = new Axe();

  Circle1 = new Button(480, 445, 6, "Argentina");
  Circle2 = new Button(860, 260, 6, "China");
  Circle3 = new Button(650, 180, 6, "Finland");
  Circle4 = new Button(628, 225, 6, "Germany");
  Circle5 = new Button(795, 318, 6, "India");
  Circle6 = new Button(705, 330, 6, "Kenya");
  Circle7 = new Button(725, 292, 6, "Saudi Arabia");
  Circle8 = new Button(380, 260, 6, "United States of America");
  Circle9 = new Button(605, 205, 6, "The United Kingdom");
}


function draw() {
  background("#89CFF0");
  image(img, 250, 60);
  img.resize(800, 0)

  a.draw();
  a.update();

  strokeWeight(2);
  fill(0);
  textFont("Courier");
  textSize(50);
  text("AXE", 40, 200);
  text("THE TAX", 40, 400);

  //Argentina
  Circle1.checkMouse();
  Circle1.display();
  if (selected == "Argentina") {
    displayArgentina();
  }

  //China
  Circle2.checkMouse();
  Circle2.display();
  if (selected == "China") {
    displayChina();
  }

  //Finland
  Circle3.checkMouse();
  Circle3.display();
  if (selected == "Finland") {
    displayFinland();
  }

  //Germany
  Circle4.checkMouse();
  Circle4.display();
  if (selected == "Germany") {
    displayGermany();
  }

  //India
  Circle5.checkMouse();
  Circle5.display();
  if (selected == "India") {
    displayIndia();
  }

  //Kenya
  Circle6.checkMouse();
  Circle6.display();
  if (selected == "Kenya") {
    displayKenya();
  }

  //Saudi Arabia
  Circle7.checkMouse();
  Circle7.display();
  if (selected == "Saudi Arabia") {
    displaySA();
  }

  //USA
  Circle8.checkMouse();
  Circle8.display();
  if (selected == "United States of America") {
    displayUSA();
  }

  //UK
  Circle9.checkMouse();
  Circle9.display();
  if (selected == "The United Kingdom") {
    displayUK();
  }

}

class Button {
  constructor(x, y, rad, name) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.name = name;
  }

  checkMouse() {
    let distance = dist(this.x, this.y, mouseX, mouseY);
    if (distance < this.rad) {
      // mouse is in the area
      this.r = 255;
      this.g = 0;
      this.b = 0;
      push();
      textSize(15);
      fill(255);
      text(this.name, this.x + 10, this.y + 10);
      pop();
      if (mouseIsPressed) {
        this.r = 100;
        this.g = 0;
        this.b = 255;
        selected = this.name; // ***
      }
    }
    else {
      this.r = 255;
      this.g = 255;
      this.b = 255;
    }
  }

  display() {
    push();
    noStroke();
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.rad * 2);
    pop()
  }
}

class Axe {
  constructor() {
    this.k = 0.8;
    this.angle = 0;
  }
  update() {
    this.angle = map(sin(frameCount * 0.1), -1, 1, -0.15, 0.5);
  }
  draw() {
    push();
    translate(50, 350)
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

class Text {
  constructor() {
    this.x = x;
    this.y = y;
  }
  display() {
    push();
    fill(255, 255, 255);
    textSize(20);
    text("this.text", 330, 560, 700, 400);
    pop()
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

function displayArgentina() {
  fill(255, 255, 255);
  textSize(20);
  text("Argentina applies a range of different Value Added Tax rates. Feminine hygiene products are being taxed at the standard 21% rate. Among Women's Day marches and strikes that were called in various parts of the country, advocates demanded the reduction of period taxes.", 330, 560, 700, 400);
}

function displayChina() {
  fill(255, 255, 255);
  textSize(20);
  text("As of 2020, the Chinese government regulates a 13% sales tax on feminine sanitary products. That is 4% higher than the 9% tax for essential daily necessities such as grain and water. Many women and young girls, especially in rural areas, cannot afford feminine hygiene products.", 330, 560, 700, 400);
}

function displayFinland() {
  fill(255, 255, 255);
  textSize(20);
  text("Finland applies one of the highest Value Added Tax rates in Europe. While some pharmaceuticals have a reduced rate applied to health products, products used for sanitary protection and contraception other than medicinal products are taxed at the standard rate of 24%.", 330, 560, 700, 400);
}

function displayGermany() {
  fill(255, 255, 255);
  textSize(20);
  text("A tax reduction of 7% instead of 19% for products for the purposes of monthly sanitary hygiene came into effect in 2020. Under the COVID-19 measures to lower VAT, the products will be taxed at 5% instead of 7% from 1 July 2020 to 31 December 2020). Under EU Law, Germany can only apply the minimum tax rate of 5%.", 330, 560, 700, 400);
}

function displayIndia() {
  fill(255, 255, 255);
  textSize(20);
  text("Menstrual hygiene items are taxed at 12% under India’s Goods & Services Tax (GST) which was launched in July 2017.", 330, 560, 700, 400);
}

function displayKenya() {
  fill(255, 255, 255);
  textSize(20);
  text("Kenya was the first nation in the world to end the period tax in 2004. However, research shows that 65% of Kenyan women and girls are unable to afford basic sanitary pads. As a consequence, girls often rely on the men in their lives for period products and some girls engage in transactional sex in order to secure sanitary products, perpetuating a patriarchal cycle of reliance and exploitation.", 330, 560, 700, 400);
}

function displaySA() {
  fill(255, 255, 255);
  textSize(20);
  text("Saudi Arabia has a standard Value Added Tax of 15%, increasing from 5% in July 2020. Examples of zero-rated goods and services include medicines and medical goods, considered as qualifying medicines and qualifying medical goods as per the classification issued by the ministry of health or any other competent authority from time to time.", 330, 560, 700, 400);
}

function displayUSA() {
  fill(255, 255, 255);
  textSize(20);
  text("There are active campaigns ongoing for various states. As of now, 23 states have exempted tax on menstrual products, while 27 states continue to tax feminine hygiene products.", 330, 560, 700, 400);
}

function displayUK() {
  fill(255, 255, 255);
  textSize(20);
  text("With the UK exiting from the European Union taking effect on 31 December 2020, the tax on menstrual products is now 0%. This was already announced by the government in the 2020 Budget that a zero rate will apply from 1 January 2021.", 330, 560, 700, 400);
}