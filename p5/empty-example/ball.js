class Ball {
    constructor(){
      this.location = createVector(width/2,height/2);
      this.velocity = createVector(0,0);
      this.acceleration = createVector(0,0.5);
    }
  
    move(){
      this.velocity.add(this.acceleration);
      this.location.add(this.velocity);
    }
  
    bounce(){
      if(this.location.x<10){
        this.location.x = 10;
        this.velocity.x = -this.velocity.x;
      }
      else if(this.location.x>width-10){
        this.location.x = width-10;
        this.velocity.x = -this.velocity.x;
      }
      if(this.location.y<10){
        this.location.y = 10;
        this.velocity.y = -this.velocity.y;  
      }
      else if(this.location.y>height-10){
        this.location.y = height-10;
        this.velocity.y = -this.velocity.y;
      }
    }
  
    show(){
      fill(255);
      ellipse(this.location.x , this.location.y , 20 ,20);
    }
}