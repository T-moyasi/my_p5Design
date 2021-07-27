function setup(){
    createCanvas(windowWidth, windowHeight);
    noLoop();
    background(255, 255, 255);
    ellipseMode(CENTER);
    
}
 
function draw(){
    noStroke();
    rgba1=color('rgba(0, 0, 255, 5)')
    rgba2=color('rgba(255,0,0,5)')
    //fill(rgba1);
    //ellipse(width/2, height/2, height/2);
    let lissajousM=2,lissajousN=3;
    let a=1;
    
    for(var i=0; i+0.01<= 2*PI;i+=0.01){
        let [x1,y1]=lissajousCurve(lissajousM,lissajousN,i);
        /*
        stroke(255,255,0);
        strokeWeight(1)
        fill(rgba1);        
        ellipse(width/2+x1*200,height/2+y1*200,10);
        */
        for(var j=0;j<=2*PI;j+=0.1){
            let [x2,y2]=logarithmicSpiral(a,j);
            stroke(0,255,0);
            strokeWeight(1)
            fill(rgba2)
            ellipse(width/2+x1*200+x2*10, height/2+y1*200+y2*10, 10);
        }
    }
}
