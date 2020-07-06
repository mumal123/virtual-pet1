//Create variables here
var dog, happyDog, database, foodS, foodStock,database,dogimg;
function preload(){
happyDog=loadImage("images/dogImg.png");
dogimg=loadImage("images/dogImg1.png")
}
function setup() {
  database = firebase.database();
  console.log(database);
	createCanvas(500, 500);
  dog=createSprite(250,250,20,20);
dog.addImage(dogimg)
 foodStock=database.ref("food")
 foodStock.on("value",readStock)
}
function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(happyDog)

  }
  drawSprites();
  textSize(35)
  fill("white")
  text("foodStock",10,100)
  
}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref("/").update({
    food:x
    
  })
}