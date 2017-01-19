var x;
var y;
var dx;
var dy;
var img;
var w = 10;
var h = 100;
var y_rect;
var x_rect;
var score = 0;
var Sound;

function reset() {
    x = 50;
    y = 50;
    y_rect = 220;
    x_rect = 330;
    dx = random(2,4);
    dy = random(2,4);
}

function setup() {
	Sound = loadSound("Recording.wav");
	createCanvas(360, 550);
    reset();
    img = loadImage("Fikrul.jpg");
}

function draw() {
    background(50);
    image(img, x, y, img.width/10, img.height/10);
    rect(x_rect, y_rect, w, h);
    fill(100);
    text(score, width/2-27, 40);
    fill(255);

    if ((x+img.width/20) >= width) {
        fill (255);
        background(100);
        text ("Game Over", width/2-25, height/2);
        text (score, width/2, height/2+20);
        noLoop();
    } //game over
    
    x += dx;
    y += dy;
    
    if (collisionX()) {
        dx *= -1;
        x += dx;
    }
    
    if (collisionY()) {
        dy *= -1;
        y += dy;
    }
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        if (y_rect - h/2 > 0 ) {
            y_rect -= 40;
        } 
    } else if (keyCode == DOWN_ARROW) {
        if (y_rect + h/2 <500){
            y_rect += 40;
        } 
    }
}

function collisionX() {
    if (x<0) { //corner of canvas
        score++;
		Sound.setVolume(0.1);
		Sound.play();
        return true;
    } else if ((x+img.width/20>x_rect-w/2) && (y+img.height/20 >= y_rect) && (x-img.width/20 <= x_rect - w/2 + w) && (y-img.height/20 <= y_rect + h)) { //side of paddle
	Sound.setVolume(0.1);
	Sound.play();
	return true;
    } return false;
}

function collisionY() {
    if (y<0 || y-img.height/20>500){
        Sound.setVolume(0.1);
		Sound.play();
		return true;
    } else return false;
}

function mouseMoved() {
	y_rect = mouseY;
}

function touchMoved() {
	y_rect = mouseY;
}

