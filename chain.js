class Chain{
    constructor(bodyA,bodyB){
       var options={
           bodyA:bodyA,
           bodyB:bodyB,
           length:20,
           stiffnes:0.2
       }
       this.chain=Constraint.create(options);
       World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}