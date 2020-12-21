class Log extends BaseClass{
  constructor(x,y,height,width,angle){
    super(x,y,width,height,angle);
    //this.image = loadImage("wood2.png"); (not working for some reason)
    this.Visibilty = 255;
    Matter.Body.setAngle(this.body, angle);
  }

  display(){
    if(this.body.speed < 4){
      super.display();
      }
      else{
        World.remove(world,this.body);
        push()
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop()
      }
  }
}
