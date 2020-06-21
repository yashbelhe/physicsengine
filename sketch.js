let movingObjects = []

function setup()
{
    createCanvas(400, 400);
}

function draw()
{
    //Incomplete
}

function drawCircle(x, y, r)
{
    movingObjects.push(Circle(x, y, m, r));
}

function Circle(x, y, m, r)
{
    this.mass = m;
    this.radius = r;
    this.position = CreateVector(x, y);
    this.velocity = CreateVector(0, 0);
    this.acceleration = CreateVector(0, 0);
}

Circle.prototype.display = function()
{
    stroke('#222222');
    strokeWeight(4);
    circle(this.position.x, this.position.y, 2 * this.radius);
}

Circle.prototype.applyForce = function(force)
{
    let a = p5.Vector.div(force, this.mass);
    this.acceleration.add(a);
}

Circle.prototype.update = function(del_t)
{
    this.position.x = this.position.x + this.velocity.x * del_t + this.acceleration.x * del_t * del_t;
    this.position.y = this.position.y + this.velocity.y * del_t + this.acceleration.y * del_t * del_t;

    this.velocity.x = this.velocity.x + this.acceleration.x * del_t;
    this.velocity.y = this.velocity.y + this.acceleration.y * del_t;
}

function Rectangle(x, y, m, l, w)
{
    this.mass = m;
    this.length = l;
    this.width = w;
    this.position = CreateVector(x, y);
    this.velocity = CreateVector(0, 0);
    this.acceleration = CreateVector(0, 0);
}

Rectangle.prototype.display = function()
{
    stroke('#222222');
    strokeWeight(4);
    rect(this.position.x, this.position.y, this.w, this.l);
}

Rectangle.prototype.applyForce = function(force)
{
    let a = p5.Vector.div(force, this.mass);
    this.acceleration.add(a);
}

Rectangle.prototype.update = function(del_t)
{
    this.position.x = this.position.x + this.velocity.x * del_t + this.acceleration.x * del_t * del_t;
    this.position.y = this.position.y + this.velocity.y * del_t + this.acceleration.y * del_t * del_t;

    this.velocity.x = this.velocity.x + this.acceleration.x * del_t;
    this.velocity.y = this.velocity.y + this.acceleration.y * del_t;
}
