class Bullet{
    constructor(x,y,width,height){
        var options = {
        //restitution : 0.8,
        //friction : 0.3,
        //density :1.0,
        //weight : 10,
        //speed : 30
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;

        World.add(world , this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255);
        stroke("blue");
        rect(pos.x,pos.y,this.width, this.height);
    }
}