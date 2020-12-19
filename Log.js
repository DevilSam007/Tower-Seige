class Log extends BaseClass{
  constructor(x,y,height,width,angle){
    super(x,y,width,height,angle);
    this.image = loadImage("wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
}
