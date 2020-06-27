class Rectangle {
    constructor(x, y, m, x_len, y_len) {
        this.mass = m;
        this.x_len = x_len;
        this.y_len = y_len;
        this.position = createVector(x, y);
        this.velocity = createVector(0, 10);
        this.acceleration = createVector(0, 30);
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
        stroke('#222222');
        strokeWeight(4);
        rect(this.position.x, this.position.y, this.x_len, this.y_len);
    }
}