var newWidth = 100;
var newHeight = 100;

//setup function executes once
function setup(){
    createCanvas(600,400);
    background(13,6,61);
}

//draw function loops forever
function draw(){
    //background(13,6,61);
    if(mouseIsPressed){
        noStroke();
        fill(255,0,0,50);
        rect(mouseX,mouseY,newWidth,newHeight);
    }
    
}