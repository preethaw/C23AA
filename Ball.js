
class Ball {
  constructor(x, y, r) {
    var options = { 
      density: 1, 
      frictionAir: 0.005, 
      restitution: 1.0
    };

    this.x = x;
    this.y = y;
    this.body = Bodies.circle(x, y, r, options);
    this.radius = r;
    World.add(world, this.body);
  }


  display() {
   // push();
   // translate(this.body.position.x, this.body.position.y);
    //rotate(this.body.angle);
    ellipseMode(RADIUS);   

    ellipse(this.body.position.x,this.body.position.y, this.radius, this.radius);
   // ellipse(0,0, this.radius, this.radius);
    //pop();
  }

  
}


