class GROUND{
  constructor(w,h){
   var stayground={
       isStatic:true
   } 
    this.ground=Bodies.rectangle(600,390,w,h,stayground);
    World.add(worlds,this.ground);
    this.w=w;
    this.h=h;
  }
  display(){
    fill("brown");
    rectMode(CENTER);
    rect(this.ground.position.x,this.ground.position.y,this.w,this.h);
  }
}