var hr, sec ,min;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background("black");

  //creating a text called Clock
  fill("PURPLE");
  textFont("Comic sans MS")
  textSize(25);
  text("CLOCK",170,30)

  // creating a text for reference to say which hand represents hour/seconds/minutes
  textSize(15);
  fill("yellow");
  text("Yellow= Hour",50,390);
  fill("red");
  text("Red= Seconds",150,390);
  fill("green");
  text("Green= Minutes",250,390);

  translate(200,200)
  //rotate(-88)

// making the angle mode to degrees
  angleMode(DEGREES);

  //giving the time function to the variables
  hr= hour();
  min= minute();
  sec= second();

// creating the hands of the clock by using map function , giving stroke weight, stroke, rotating the hands and line 
  scAngle=map(sec,0,60,0,360)
  schour=map(hr,0,60,0,360);
  scmin= map(min,0,60,0,360);
  push();
  rotate(-88)
  rotate(scAngle)
  stroke("red")
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(-70)
  rotate(schour)
  stroke("yellow")
  strokeWeight(8);
  line(0,0,70,0);
  pop();

  push();
  rotate(-88)
  rotate(scmin)
  stroke("green")
  strokeWeight(8);
  line(0,0,90,0);
  pop();


  drawSprites();
}