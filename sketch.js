let ball,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10;


function setup() {
  createCanvas(300, 300); 
  ball = new Walker();
  ball2 = new Walker();
  ball3 = new Walker();
  ball4 = new Walker();
  ball5 = new Walker();
  ball6 = new Walker();
  ball7 = new Walker();
  ball8 = new Walker();
  ball9 = new Walker();
  ball10 = new Walker();
}


function draw() {
  background(220, 0);
  ball.update();
  ball.display();
  ball2.update();
  ball2.display();
  ball3.update();
  ball3.display();
  ball4.update();
  ball4.display();
  ball5.update();
  ball5.display();
  ball6.update();
  ball6.display();
  ball7.update();
  ball7.display();
  ball8.update();
  ball8.display();
  ball9.update();
  ball9.display();
  ball10.update();
  ball10.display();
  
  
}


// new way to define Object
class Walker {
  //setup values
  constructor() {
  	this.x = random(0,300);
  	this.y = random(0,300);
  	this.w = 5;
    this.a = random(0,50);
    this.b = random(0,100);
    this.c = random(50,255);
  }
  
  update() {
    //update position
  	this.x = this.x + random(-10, 10);
  	this.y = this.y + random(-10, 10);
  }
  
  display() {
    //display walker
    noStroke();
    // fill(random(0,100),random(0,100),random(0,255));
    fill(this.a,this.b,this.c, 100);
	ellipse(this.x, this.y, this.w);
  }
}