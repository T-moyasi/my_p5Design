function setup(){
    createCanvas(windowWidth, windowHeight);
    noLoop();
    background(100, 100, 100);
    ellipseMode(CENTER);
    //blendMode(DIFFERENCE);
    randomSeed(2500);
    noiseSeed(5000);
}
 
function draw(){
    stroke(random(255));
    rgba1=color(random(255),random(255),random(255));
    rgba2=color(random(255),random(255),random(255));
    rgba3=color(random(255),random(255),random(255));
    console.log("color",rgba1);
    let color1=rgba1;
    let color2=rgba2;
    let color3=rgba3;
    let color4=color(random(255))
    let lissajousM=2,lissajousN=1;
    let epA=1.2,epB=1;
    let hyN=1.6;
    let TriW = width/3;
    let iMax = width/TriW;
    let jMax = height/(TriW*sin(PI/3));
    let kochN = 2;
    let kochP1 = [width/4,height/4];
    let kochP2 = [width/4+width/2,height/4];
    let kochP3 = LastPoint_RegularTri_P(kochP1[0],kochP1[1],kochP2[0],kochP2[1]);
    let kochPoints12 =Koch(kochP1[0],kochP1[1],kochP2[0],kochP2[1]); 
    let kochPoints23 =Koch(kochP2[0],kochP2[1],kochP3[0],kochP3[1]);
    let kochPoints31 =Koch(kochP3[0],kochP3[1],kochP1[0],kochP1[1]);
    
    strokeWeight(3);
    KochCurve(kochP1[0],kochP1[1],kochP2[0],kochP2[1],1);
    KochCurve(kochP2[0],kochP2[1],kochP3[0],kochP3[1],1);
    KochCurve(kochP3[0],kochP3[1],kochP1[0],kochP1[1],1);
    KochCurve(kochP1[0],kochP1[1],kochP3[0],kochP3[1],kochN);
    KochCurve(kochP3[0],kochP3[1],kochP2[0],kochP2[1],kochN);
    KochCurve(kochP2[0],kochP2[1],kochP1[0],kochP1[1],kochN);
    KochCurve(kochP1[0],kochP1[1],kochP3[0],kochP3[1],1);
    KochCurve(kochP3[0],kochP3[1],kochP2[0],kochP2[1],1);
    KochCurve(kochP2[0],kochP2[1],kochP1[0],kochP1[1],1);
    KochCurve(kochPoints12[0][0],kochPoints12[0][1],kochPoints12[2][0],kochPoints12[2][1],1);
    KochCurve(kochPoints12[2][0],kochPoints12[2][1],kochPoints12[0][0],kochPoints12[0][1],1);
    KochCurve(kochPoints23[0][0],kochPoints23[0][1],kochPoints23[2][0],kochPoints23[2][1],1);
    KochCurve(kochPoints23[2][0],kochPoints23[2][1],kochPoints23[0][0],kochPoints23[0][1],1);
    KochCurve(kochPoints31[0][0],kochPoints31[0][1],kochPoints31[2][0],kochPoints31[2][1],1);
    KochCurve(kochPoints31[2][0],kochPoints31[2][1],kochPoints31[0][0],kochPoints31[0][1],1);
    noStroke()

}

