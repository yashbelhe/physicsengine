class Circle {
    constructor(x, y, m, r) {
        this.mass = m;
        this.radius = r;
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
    }
  
    // applyForce(force) {
    //     let d_acc = p5.Vector.div(force, this.mass);
    //     this.acceleration.add(d_acc);
    // }
  
    show() {
        strokeWeight(4);
        circle(this.position.x, this.position.y, 2 * this.radius);
    }
}