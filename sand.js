class Sand {
    constructor(x, y, radius, maxSides){
      var options = {
          'restitution': 1,
          'friction': 0.3,
          'density': 0.6
      }

      this.body = Bodies.circle(x, y, radius, options, maxSides);
      this.radius = radius;
      this.maxSides = maxSides;
      
      World.add(world, this.body);
    }

    display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill("red");
      circle(0, 0, this.radius, this.maxSides);
      pop();
    }
  }
  