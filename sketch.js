//create the bullet and the wall
var wall, thickness;
var bullet,speed, weight;

function setup() 
{

  createCanvas(1600, 400);

  //assign random  valuees for speed,weight and thickness
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)




   //create the bullet and give it velocity and color
    bullet=createSprite(50, 200, 50,5);  
    bullet.velocityX = speed;
    bullet.shapeColor=color(255);

 
  	
    //create the wall and give it color
    wall=createSprite(1200, 200, thickness, height/2);  

    wall.shapeColor=color(230,230,230);
    //wall.shapeColor=color(80,80,80)
}


function draw() 
{
  background(0);  
  //bullet.sprite.collide(wall.sprite,calculateDeformation)
  if(hasCollided(bullet, wall))
  {
	  //set velocity of the bullet to 0 and calculate the damage done
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
		
	}

	

	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
	}
	
  }


  drawSprites();
 
}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}
