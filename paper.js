class Paper{
    constructor(x,y,radius){
        
    var option={
        isStatic:false,
       restituition:0.3, friction: 0.5,density: 1.2
    }
    this.x = x;
    this.y = y;
    this.radius = 70;
    this.body=Bodies.circle(this.x, this.y, 70/2, option);
    this.width =83;
    this.image= loadImage("imgpaper.png");

        World.add(world,this.body);

    }
display(){
var pos =this.body.position;
push()
			translate(pos.x, pos.y);
			imageMode(CENTER);
			image(this.image,0, 0, 83, 83);
			pop();
}

};