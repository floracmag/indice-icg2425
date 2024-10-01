let xsize = 400;
let ysize = 400;

function setup() {
  createCanvas(xsize, ysize);
}

function draw() {
  //fare cielo scuro
  background("darkblue");
  //vogliamo disegnare la luna
  fill("yellow");
  stroke("red");
  strokeWeight(5);
  circle(320, 75, 100);
  //prima della forma desiderata
  //cambiare fill e stroke
  fill("green");
  stroke("pink");
  strokeWeight(5);
  rect(0,200,400,200);
  //ordine in p5
  stroke("yellow");
  strokeWeight(30);
  let xStars_primordiale= 10;
  let yStars_primordiale= 20;
  point(xStars_primordiale, yStars_primordiale)
  //i<X define qtde de estrelas
  //i+X é o passo, define distância entre as estrelas
  let passo=1;
  //for(init; test; update){corpo}
  for(let i=0; i<50; i=i+passo){
    //0 --> y 1 --> w 2 --> y 3 --> w ...49
    strokeWeight(i*3);
      if(i%2==0){
        //numeri pari
        //corpo di ramo vero
        stroke("yellow");
      }else{
        //numeri dispari
        //altrimenti questo
        stroke("white");
      }
      point(xStars_primordiale*i, yStars_primordiale+i);
  }
  //stella polare
  //point(xStars_primordiale+60,30);
  //aggiungiamo un'altra stella
  //point(xStars_primordiale,100);
  //point(70,100);
  //exercício casinhas
  //teto
  fill("red");
  triangle(50,75,62,62,75,75);
  //parede
  fill("white");
  stroke("black");
  strokeWeight(2);
  rect(100,135,60,60);
  //text
  fill("white");
  stroke(0);
  strokeWeight(0);
  textSize(20);
  text("C'era una volta...",200,350);
}
