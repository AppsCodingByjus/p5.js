function preload(){
}

function setup() {
    canvas= createCanvas(640, 480);
    canvas.position(110, 250);
    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,640,480);
    circle(30, 30, 60);
    fill(0,123,0);
    stroke(0,128,0);
    circle(605,30,60);
    fill(0,123,0);
    stroke(0,128,0);
    circle(30,450,60);
    fill(0,123,0);
    stroke(0,129,0);
    circle(605,450,60);
    fill(0,123,0);
    stroke(0,128,0);
    rect(30,30,575,10);
 rect(30,450,575,10);
    
    


}

function take_snapshot(){
    save('student_name_png');
}