class BIRD extends PARENT{
    constructor(x,y){
        super(x,y,60,60);
        this.image=loadImage("sprites/bird.png"); 
    }
   display(){
       super.display();
       this.base.position.x=mouseX;
       this.base.position.y=mouseY;
       
   } 
}