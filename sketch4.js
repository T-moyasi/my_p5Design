function setup(){
    createCanvas(windowWidth, windowHeight);
    noLoop();
    background(255, 255, 255);
    ellipseMode(CENTER);
    blendMode(DIFFERENCE);
}
 
function draw(){
    noStroke();
    rgba1=color('rgba(255, 0, 100,255)')
    rgba2=color('rgba(205,100,0,100)')

    for(var i=3; i+0.05<= 10*PI;i+=0.01){
        let[x,y] = logarithmicSpiral(i,i);
        //fill(rgba2)
        square(width/2+x,height/2+y,13);
        //square(width/2+x,height/2+y,fibonacci(i/2));
    }
}
