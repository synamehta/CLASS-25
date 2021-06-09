class PARENT{
    constructor(x,y,w,h,a){
        var options={
            restitution:0.7
        } 
        this.base = Bodies.rectangle(x,y,w,h,options);
        this.image=loadImage("sprites/base.png");
        this.w = w;
        this.h = h;
        World.add(worlds,this.base);
    }
    display(){
        push();
        translate(this.base.position.x,this.base.position.y)
        rotate(this.base.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.w, this.h);
        pop();
    }  
}