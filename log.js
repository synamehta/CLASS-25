class LOG extends PARENT{
    constructor(x,y,h,a){
        super(x,y,20,h,a);
        this.image=loadImage("sprites/wood2.png");
        Matter.Body.setAngle(this.base,a);
    }      
}