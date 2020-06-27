class Rectangle {
    constructor(x, y, m, x_len, y_len) {
        this.mass = m;
        this.x_len = x_len;
        this.y_len = y_len;
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
    }
  
    // applyForce(force) {
    //     let d_acc = p5.Vector.div(force, this.mass);
    //     this.acceleration.add(d_acc);
    // }
  
    show() {
        stroke('#222222');
        strokeWeight(4);
        rect(this.position.x, this.position.y, this.x_len, this.y_len);
    }
}