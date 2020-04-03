// sometimes they use var instead of let
let carX = 50;
let vroom;

function setup(){
  createCanvas(500, 500);

  vroom = new p5.Oscillator('square');
  vroom.start();

//if (carX !== 60){
//  console.log("truth");
}


//
// // this is for car wheels
// fill(0);
// stroke(255);
// strokeWeight(5);
// ellipse(60, 350, 35, 35);
// ellipse(95, 350, 35, 35);


function draw(){
  console.log(frameCount);
  background(0, 255, 0, 80);

  if(frameCount > 180){



vroom.freq(carX);

//x = x + 2;
carX += 3;

if (carX > 500){
  carX = -50;
}else if (carX > 400) {
    carX += 6;
} else{
  carX += 3;
}
  // this is for race car body
} else{
  vroom.freq(0);

noStroke();
fill(40, 50, 250);
rect(carX, 300, 50, 30);
}


function mousePressed(){
carX = 0;
console.log("mouse IS CLICKED");
vroom.stop();
}
