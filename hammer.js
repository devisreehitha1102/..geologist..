class Hammer {
  constructor(x, y, weight, height) {
    var options = {
      'restitution': 11,
      'friction': 1.0,
      'density': 2.0
  }
   
    this.body = Bodies.rectangle(x, y, weight, height, options);
    this.weight = weight;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(2.6);
    stroke("brown");
    fill("yellow");
    rect(0, 0, this.weight, this.height);
    pop();
  }
}
