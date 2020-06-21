// function setup() {
//   createCanvas(windowWidth, windowHeight );
//   drawingContext.shadowOffsetX = 5;
//   drawingContext.shadowOffsetY = -5;
//   drawingContext.shadowBlur = 10;
//   drawingContext.shadowColor = "black";
//   background(200);
//   ellipse(width/2, height/2, 50, 50);
// }

// let x = 0;

// // function setup() {
// //   background(100);  
// // }

// function draw() {
//   ellipse(x, height/2, 20, 20);
//   x = x + 1;
// }

let ball;

function setup() {
    createCanvas(600, 600);
    ball = new Ball();

    stroke(255); // Set line drawing color to white
    frameRate(30);// set the framerate will be useful for computing delta_t
}

function draw() {
    background(0);
    ball.move();
    ball.bounce();
    ball.show();
}