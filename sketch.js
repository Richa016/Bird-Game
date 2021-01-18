var FoodIMG, Food2IMG, Food3IMG, Food4IMG, Food;
var backgroundIMG;
var F1, F2, F3, F;
var ground;
var database;
var brick1, brick2, brick3, brickIMG;
var brick4, brick5, brick6, brick7;
var WaterIMG, water;
var bird, birdIMG;
function preload() {
  backgroundIMG = loadImage('BackGround.png');
  brickIMG = loadImage('Bricks.png');
  WaterIMG = loadImage('Water.png');
  birdIMG = loadImage('Bird.png');
  FoodIMG = loadImage('Food.png');
  Food2IMG = loadImage('Food2.jpg');
  Food3IMG = loadImage('Food3.jpg');
  Food4IMG = loadImage('Food4.jpg');
}
function setup() {
  createCanvas(1200, 400);
  database = firebase.database();
  

  ground = createSprite(600, 600, 1200, 400);
  ground.addImage(backgroundIMG);
  bird = createSprite(120, 300);
  bird.addImage(birdIMG);
  bird.scale = 0.01;
  //F = createSprite(120, 30);
  //F.addImage(FoodIMG);
  //F.scale = 9;
  

  brick1 = createSprite(70, 350);
  brick1.addImage(brickIMG);
  brick1.scale = 0.3;

  brick2 = createSprite(100, 350);
  brick2.addImage(brickIMG);
  brick2.scale = 0.3;

  brick3 = createSprite(900, 350);
  brick3.addImage(brickIMG);
  brick3.scale = 0.3;
  brick4 = createSprite(400, 350);
  brick4.addImage(brickIMG);
  brick4.scale = 0.3;
  brick5 = createSprite(250, 300);
  brick5.addImage(brickIMG);
  brick5.scale = 0.3;
  brick6 = createSprite(1000, 50, 20, 20);
  brick6.addImage(brickIMG);
  brick6.scale = 0.2;
  water = createSprite(500, 490);
  water.addImage(WaterIMG);
}
function draw() {
  background(0);
  food();
  water.velocityX = -3;
console.log(water.x)
  if (water.x < 0) {
    water.x = water.width / 2;
  }

  if (keyWentDown('UP_ARROW')) {
    bird.x = bird.x;
    bird.y = bird.y - 20;
  }
  if (keyWentDown('Down_ARROW')) {
    bird.x = bird.x;
    bird.y = bird.y + 20;
  }
  if (keyWentDown('LEFT_ARROW')) {
    bird.velocityX = -5;
    bird.velocityY = 0;
  }
  if (keyWentDown('RIGHT_ARROW')) {
    bird.velocityX = 5;
    bird.velocityY = 0;
  }
  drawSprites();
}
function food() {
  if (frameCount % 80 === 0) {
    Food = createSprite(1000, 200, 30, 30);
    Food.scale = 0.1;
    Food.velocityX = -5;
    var r = Math.round(random(1, 4));

    switch (r) {
      case 1:
        console.log('1 added');
        Food.addImage(FoodIMG);
        break;
      case 2:
        console.log('2 added');
        Food.addImage(Food2IMG);
        break;
      case 3:
        console.log('3 added');
        Food.addImage(Food3IMG);
        break;
      case 4:
        console.log('4 added');
        Food.addImage(Food4IMG);
        break;
    }

    console.log(r);
    console.log(frameCount);
    console.log(Food.x);
  }
}
