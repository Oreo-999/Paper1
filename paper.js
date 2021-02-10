class Paper{
    constructor(x,y){
        this.x=x
        this.y=y
        this.diameter=50
        this.body = Bodies.circle(this.x,this.y,this.diameter)
        World.add(world,this.body)
    }
    display(){
        ellipse(this.body.position.x,this.body.position.y,this.diameter,this.diameter,this.diameter)
    }
}