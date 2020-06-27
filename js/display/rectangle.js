class Rectangle {
    constructor(x_pos, y_pos, mass, x_len, y_len, color='#222222', strokeWeight=4) {
        this.mass = mass;
        this.x_len = x_len;
        this.y_len = y_len;
        this.position = createVector(x_pos, y_pos);
        this.velocity = createVector(0, 10);
        this.acceleration = createVector(0, 30);
        this.color = color;
        this.strokeWeight = strokeWeight;
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
        stroke(this.color);
        strokeWeight(4);
        rect(this.position.x, this.position.y, this.x_len, this.y_len);
    }
}