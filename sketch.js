//adding the components for physics engine
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//creating the variables
var canvas;
var INTRO = 0
var PLAY =1;
var END = 2;
var gameState = INTRO;
var back,background1Img,background2Img, background3Img;
var hero, heroImg;
var drone,droneImg;
var invisibleGround1,invisibleGround2,invisibleGround3, invisibleGround4;
var bg;
var bullets, bulletsGroup, bulletsImg;
var VDrone, VDroneImg,VDroneGroup;
var villain, villainImg;
var droneCount = 0
var form, introImg;
var playButton,playImg;
var gameover;

function preload(){

//preloading the images;
droneImg = loadImage("hDrone.png")
heroImg = loadAnimation("hero1.png","hero2.png","hero3.png","hero4.png","hero5.png","hero6.png")
bulletsImg = loadImage("bullets.png");
background1Img = loadImage("bg.jpg");
VDroneImg = loadImage("vDrone.png");
introImg = loadImage("introimg.jpg");
playImg = loadImage("play.png");
gameover = loadImage("game over.jpg")

}
function setup(){

  //creating the canvas
  createCanvas(displayWidth, displayHeight-110);
  //creating the engine and adding it to the world
  engine = Engine.create();
  world = engine.world;
 
 // form = new Form();
 

//create the background

  background(introImg)
  back = createSprite(windowWidth/2 , windowHeight/10 , windowWidth, windowHeight);
  back.addImage(background1Img);
  back.scale = 1;
  back.visible = false

  invisibleGround1 = createSprite(100,500,2500,20)
  invisibleGround1.visible = false

  invisibleGround2 = createSprite(100,80,2500,20)
  invisibleGround2.visible = false

  invisibleGround3 = createSprite(100,330,2500,20)
  invisibleGround3.visible = false

  invisibleGround4 = createSprite(displayWidth/2-230,100,20,20000)
  invisibleGround4.visible = false

  //creating the ground;
  drone = createSprite(200,200,30,30);
  drone.addImage(droneImg);
  drone.scale = 1;
  drone.visible = false

  //creating the hero
  hero = createSprite(200,400,200,200);
  hero.addAnimation("hero",heroImg);
  hero.scale = 0.5;
  hero.visible = false

  playButton = createSprite(displayWidth/2-40,displayHeight/2+120,20,20);
  playButton.addImage(playImg);
  playButton.scale = 0.6

  bulletsGroup  = new Group();
  VDroneGroup = new Group();
}

function draw(){
  
if(gameState === INTRO){
  form();
}
if(mousePressedOver(playButton)){
  gameState = PLAY
  playButton.visible = false;
}

if(gameState === PLAY){

  back.velocityX = -15
  back.visible = true;
  hero.visible = true;
  drone.visible = true;

  if(back.x< windowWidth ){
    back.x = back.width /2;
   }

    //colliding drone from the invisible grounds
    drone.collide(invisibleGround2);
    drone.collide(invisibleGround3);
  
    //positioning the drone
    drone.x = hero.x+100;
     
    //condition to control the drone
    if(keyDown(DOWN_ARROW)){
      drone.y = drone.y+15
    }
    if(keyDown(UP_ARROW)){
      drone.y = drone.y-15
    }
  
    if(keyWentDown("space")){
      bullets = createSprite(drone.x,drone.y);
      bullets.addImage("bullet",bulletsImg);
      bullets.velocityX= 20;
      bullets.scale = 0.1;
      bulletsGroup.add(bullets);
  
    }
  
    if(bulletsGroup.isTouching(VDroneGroup)){
      bulletsGroup.destroyEach();
      VDroneGroup.destroyEach();
      droneCount = droneCount+1
    }

    spawnVDrone();
}

if(VDroneGroup.isTouching(invisibleGround4)){
  gameState = END
}

if(gameState === END){

  back.addImage(gameover);
  back.x = windowWidth/2
  back.y = windowHeight/2
  back.scale = 2
  back.velocityX = 0;
  hero.visible = false;
  drone.visible = false;
  bulletsGroup.destroyEach();
  VDroneGroup.destroyEach();

}
 
  //drawing the sprites
  drawSprites();
  
}

function spawnVDrone(){

    if(frameCount%40 ===0){
      var rand = Math.round(random(120,280))
      VDrone = createSprite(displayWidth-30,rand,30,30);
      VDrone.addImage(VDroneImg);
      VDrone.velocityX = -25;
      VDroneGroup.add(VDrone);
    }
}
function form(){
  textSize(35);
  fill("black")
  text("CyberYear_2099",displayWidth/2-120 ,50);

  textSize(20);
  fill("black")
  text("Hi, Welcome to CyberYear_2099",displayWidth/2 - 270 ,140);
  text("You, Mr. John Marcus, are a cyber human in year 2099.",displayWidth/2 -270, 180);
  text("Mr. Doom the psychic robot is trying to rule over the World",displayWidth/2 - 270, 220);
  text("Fight from the drones and save the World from him.",displayWidth/2 -270, 260);
  text("Press space to shoot and up and down arrow key to",displayWidth/2-270, 300 );
  text("the drone up and down and be safe from the drones.",displayWidth/2-270, 340);

  textSize(25)
  text("SO BEST OF LUCK !!!",displayWidth/2-150, 420 );
}