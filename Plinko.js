class Plinko {
	constructor(x,y){
		var options = {
			isStatic : true
		}

	this.body = Bodies.circle(x,y,15,options);
	this.radius = 35;
	this.image = loadImage("plinko.png");

	 World.add(world, this.body);
	}

	display(){
		imageMode(CENTER);
		 var pos = this.body.position;
        image(this.image, pos.x, pos.y ,this.radius,this.radius);
	}
}