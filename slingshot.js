class SlingShot{
    constructor (bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            lenght:10,
            stiffness: 0.02
        }

        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        this.pointB = pointB;

        this.sling = Matter.Constraint.create(options);
        World.add (world, this.sling);

    }

    fly(){

        this.sling.bodyA = null;

    }

    attach(body){
        
        this.sling.bodyA = body;

    }

    display (){
      
        image(this.sling1, 200, 20);
        image(this.sling2, 175, 20);
        

        if(this.sling.bodyA){
            
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
          
            push();

            stroke(48,22,8);

            if(pointA.x < 200){
                
                strokeWeight(4);

                line(pointA.x -20, pointA.y +5, pointB.x -15, pointB.y -50);
                line(pointA.x -20, pointA.y +5, pointB.x +30, pointB.y -50);

                image(this.sling3, pointA.x -30, pointA.y, 15, 30);

            }else{

                strokeWeight(7);

                line(pointA.x -20, pointA.y +5, pointB.x -15, pointB.y -50);
                line(pointA.x -20, pointA.y +5, pointB.x +30, pointB.y -50);
    
                image(this.sling3, pointA.x -30, pointA.y, 15, 30);

            }

            pop();

        }
    }
}