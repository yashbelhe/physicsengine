let movingObjects = [];
let staticObjects = [];
let fps = 60;
let del_t = 1/fps;

function setup() {
    createCanvas(windowWidth, windowHeight);

    frameRate(fps);

    new_circle = new Circle(100, 100, 5, 50);
    movingObjects.push(new_circle);

    new_rect = new Rectangle(300, 300, 5, 100, 100);
    movingObjects.push(new_rect);

    new_boundary = new Boundary(30, 30, 30, 30);
    staticObjects.push(new_boundary);
}

function draw() {
    background(0);
    for (var i = 0; i < movingObjects.length; i++) {
        movingObjects[i].update();
        movingObjects[i].show();
    }
    for (var i = 0; i < staticObjects.length; i++) {
        staticObjects[i].show();
    }
}