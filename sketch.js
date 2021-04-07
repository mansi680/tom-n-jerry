var tom;
var jerry;
var cat1Img,cat2Img,cat3Img,cat4Img;
var mouse1Img,mouse2Img,mouse3Img,mouse4Img;
var bg;


function preload() {
    //load the images here
   cat1Img=loadAnimation("images/cat1.png");
   cat2Img=loadAnimation("images/cat2.png","images/cat3.png");
   cat4Img=loadAnimation("images/cat4.png");

   mouse1Img=loadAnimation("images/mouse1.png");
   mouse2Img=loadAnimation("images/mouse2.png","images/mouse3.png");
   mouse4Img=loadAnimation("images/mouse4.png");

   bg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom=createSprite(800,650,20,20);
    tom.addAnimation("catStanding",cat1Img);
    tom.scale=0.1;

    jerry=createSprite(200,650,20,20);
    jerry.addAnimation("jerryStanding",mouse4Img);
    jerry.scale=0.1;


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyDown(LEFT_ARROW)){
      jerry.changeAnimation("jerryTeasing",mouse2Img);
  }


}
