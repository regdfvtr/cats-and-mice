var backgroundImage
var cat, catSitting, catRunning
var mouse, mouseWaiting, mouseHappy
var garden, gardenImage
var catSpeed = 7

function preload() {
    //load the images here
    catSitting = loadImage("images/cat1.png")
    catMoving =  loadImage("images/cat2.png")
    mouseWaiting = loadImage("images/mouse1.png")
    mouseHappy = loadImage("images/mouse3.png")
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(900, 600, 50, 50)
    cat.addImage(catSitting)
    cat.scale = 0.07
    mouse = createSprite(300, cat.y)
    mouse.addImage(mouseWaiting)
    mouse.scale = 0.1
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (cat.isTouching(mouse)){

        mouse.addImage(mouseHappy)

    }

    else{

        keyPressed()

    }
    drawSprites();
}


function keyPressed(){
    //For moving and changing animation write code here
    if (keyDown("left")){
        cat.x = cat.x - catSpeed
        cat.addImage(catMoving)
        
    }
    else{

        cat.addImage(catSitting)

    }




}