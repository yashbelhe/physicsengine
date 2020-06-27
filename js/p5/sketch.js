let movingObjects = []

function setup()
{
    createCanvas(600, 600);

    new_circle = new Circle(100, 100, 5, 50);
    movingObjects.push(new_circle);

    new_rect = new Rectangle(300, 300, 5, 100, 100);
    movingObjects.push(new_rect);
}

function draw() {
    background(0);
    for (var i = 0; i < movingObjects.length; i++) {
        movingObjects[i].show();
    }
}