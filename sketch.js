const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var sideBar1,SideBar2;

var particle = [];
var plinkos = [];
var division = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

   engine = Engine.create();
    world = engine.world;

    ground = new Ground(240,800,480,50);
    sideBar1 = new Ground(480,400,30,800);
    sideBar2 = new Ground(0,400,30,800);

    //division set_up
    for(var k = 0; k <= width; k = k + 80){
      division.push(new Division(k, height - divisionHeight/2, 10, divisionHeight))
    }


    //plinkos set_up
    for(var j = 40; j <= 440; j = j + 50){
      plinkos.push(new Plinko(j, 55))
    }

    for(var i = 80; i <= 400; i = i + 50){
      plinkos.push(new Plinko(i, 165))
    }

    for(var i = 40; i <= width; i = i + 50){
      plinkos.push(new Plinko(i, 275))
    }

    for(var z = 80; z <= 400; z = z + 50){
      plinkos.push(new Plinko(z, 385))
    }

}

function draw() {
  background(0); 
   Engine.update(engine);

if(frameCount%60 === 0){
      particle.push(new Particle(random(width/2-10,width/2+10),10,10));
    }
    //console.log(frameCount)

ground.display();
sideBar1.display();
sideBar2.display();

//our divisions or buckets....

for(var k = 0; k < division.length; k++){
  division[k].display();
}

//now we will make the Plinkos...

for(var j = 0; j < plinkos.length; j++){
  plinkos[j].display();
}

for(var i = 0; i < plinkos.length; i++){
  plinkos[i].display();
}

for(var b = 0; b < plinkos.length; b++){
  plinkos[b].display();
}

for(var z = 0; z < plinkos.length; z++){
  plinkos[z].display();
}

//particle display();...
for(var a = 0; a < particle.length; a++){
  particle[a].display();
}

  drawSprites();
}

