let data = "End the Stigma. Period."

function setup() {
  createCanvas(windowWidth,windowHeight);
    textSize(50)
    textFont('Courier New');
    typeWriter(data, 0, 50, 200, 180);
}

function draw() {
}

function typeWriter(sentence, n, x, y, speed) {
  if (n < (sentence.length)) {
    text(sentence.substring(0, n+1), x, y);
    n++;
    setTimeout(function() {
      typeWriter(sentence, n, x, y, speed)
    }, speed);
  }
}

