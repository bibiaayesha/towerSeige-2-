class Block  {
    constructor(x,y,width,height)  {
        var options={
            restitution : 0.4,
            friction : 1.0,
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        

        World.add(world,this.body)

        this.visibility = 255;

    }
    display()  {
        if(this.body.speed<5){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
        fill("pink")
        rect(0,0,this.width,this.height)
        pop();
        }
        else{
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility - 5;
        pop();
        }
    }

}