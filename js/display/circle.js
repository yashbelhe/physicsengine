class Circle {
    constructor(x, y, m, r) {
        this.mass = m;
        this.radius = r;
        this.position = createVector(x, y);
        this.velocity = createVector(10, 0);
        this.acceleration = createVector(50, 0);
    }
  
    // applyForce(force) {
    //     let d_acc = p5.Vector.div(force, this.mass);
    //     this.acceleration.add(d_acc);
    // }

    update() {
        this.velocity.add(scaleVector(this.acceleration, del_t));
        this.position.add(scaleVector(this.velocity, del_t));
    }
  
    show() {
        strokeWeight(4);
        circle(this.position.x, this.position.y, 2 * this.radius);
    }
}