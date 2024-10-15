function setup() {
  noLoop();
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#3c3b4c");

  fill("lightblue");
  noStroke();
  let altezza = 25;
  let vGutter = 5;
  // colonne = larghezza / (larghezza rett + spazio orizzontale)
  let columns = windowWidth / (10 + 5);
  // righe = altezza / (altezza rett + spazio verticale)
  let rows = windowHeight / (altezza + vGutter);

  for(let i = 0; i < columns; i++) {
    for(let r = 0; r < rows; r++) {
      // posizione x
      let xPos = i * 15 + random(-2.5, 2.5);
      // posizione y
      let yPos = r * (altezza + vGutter) + random(-2.5, 2.5);

      rect(xPos, yPos, 10, altezza);
    }
  }
}
