//Placar
let myP = 0
let OP = 0

//bolinha
let Xb = 100;
let Yb = 50;
let D = 30
let r = D  / 2;

//velocidade da bolinha
let VXb = 8
let VYb = 8

//minha raquete
let Xr = 15;
let Yr = 100;
let C = 10
let h = 90;

//linha do meio
let Xlinhadomeio = 290;
let Ylinhadomeio =0;
let c = 10
let H =10000;

//raquete do oponente
let XrO = 585;
let YrO =150;

//velocidade
let VX = 10

//colisão
let colidiu = false;

let raquetada;
let ponto;
let trilha;

function preload(){
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
  trilha = loadSound("trilha.mp3");
}

 function setup() {
  createCanvas(610, 400);
   trilha.loop();
 }

function draw() {
  background(0);
  mb();
  mob();
  vbo();
  raquetes(Xr, Yr);
  raquetes(XrO, YrO);
  mraquete();
  mraqueteO();
  Lra();
  LraO();
  colisorR(Xr, Yr);
  colisorR(XrO, YrO);
  Placar();
  Pontuação();
}

function mb(){
  fill(275);
  circle(Xb, Yb, D);
}

function mob(){
  Xb += VXb;
  Yb += VYb;
}

function vbo(){
  if (Xb + r > width ||
     Xb - r < 0){
     VXb *= -1;
  }
  if (Yb + r > height ||
    Yb - r< 0){
    VYb *= -1;
  }
}

function raquetes(x, y){
    fill(275);
    rect(x, y, C, h);
  //LINHA DO MEIO  
    fill("orange");
    stroke("orange");
    rect(Xlinhadomeio, Ylinhadomeio, c, H);
}

function mraquete(){
  if (keyIsDown(87)){
    Yr -= 8;
  }
  if ((keyIsDown(83)) || keyIsDown(65)){
    Yr += 8;
  }
}

function mraqueteO(){
  if (keyIsDown(79)){
    YrO -= 8;
  }
  if ((keyIsDown(75)) || keyIsDown(76)){
    YrO += 8;
  }
}

function Lra(){
  if (Yr + C > 340){
    Yr -= 8
  }
    if (Yr - C < -20){
  Yr += 8
  }
}

function LraO(){
  if (YrO + C > 340){
    YrO -= 8
  }
    if (YrO - C < -20){
  YrO += 8
  }
}

function colisorR(x, y){
  colidiu = 
  collideRectCircle(x, y, C, h, Xb, Yb, r);
  if(colidiu) {
    VXb *= -1;
    raquetada.play();
  }
}

function Placar(){
  textAlign(CENTER);
  textSize(60)
  
  fill(color(275))
  text(myP, 175, 50);
  
  fill(color(275))
  text(OP, 385, 50);
  
  fill(color(10, 10, 100, 90)); 
  stroke(275);
  rect(145, 0, 60, 60);
  
  fill(color(255,0,0, 100));
  stroke(275);
  rect(355, 0, 60, 60)
}

function Pontuação(){
  if (Xb > 590){
    myP += 1
    ponto.play();
  }
  if (Xb < 15){
    OP += 1
    ponto.play();
  }
  if (Xb < 15){
    //WAIT (Pontuação);
  }
}
function teste(){
  
  }