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
    rgba4=color(random(255),random(255),random(255));
    console.log("color",rgba1);
    let color1=rgba1;
    let color2=rgba2;
    let color3=rgba3;
    let color4=rgba4;
    
    let kochP1 = [width/4,height/4];
    let kochP2 = [width/4+width/2,height/4];
    let kochP3 = LastPoint_RegularTri_P(kochP1[0],kochP1[1],kochP2[0],kochP2[1]);
    let kochPoints0102 =Koch(kochP1[0],kochP1[1],kochP2[0],kochP2[1]); 
    let kochPoints0201 =Koch(kochP2[0],kochP2[1],kochP1[0],kochP1[1]); 
    let kochPoints0203 =Koch(kochP2[0],kochP2[1],kochP3[0],kochP3[1]);
    let kochPoints0301 =Koch(kochP3[0],kochP3[1],kochP1[0],kochP1[1]);
    let kochPoints0401 =Koch(kochPoints0102[0][0],kochPoints0102[0][1],kochP1[0],kochP1[1]);
    let kochPoints0406 =Koch(kochPoints0102[0][0],kochPoints0102[0][1],kochPoints0102[2][0],kochPoints0102[2][1]);
    let kochPoints0604 =Koch(kochPoints0102[2][0],kochPoints0102[2][1],kochPoints0102[0][0],kochPoints0102[0][1]);
    let kochPoints0709 =Koch(kochPoints0203[0][0],kochPoints0203[0][1],kochPoints0203[2][0],kochPoints0203[2][1]);
    let kochPoints0907 =Koch(kochPoints0203[2][0],kochPoints0203[2][1],kochPoints0203[0][0],kochPoints0203[0][1]);
    let kochPoints1012 =Koch(kochPoints0301[0][0],kochPoints0301[0][1],kochPoints0301[2][0],kochPoints0301[2][1]);
    let kochPoints1210 =Koch(kochPoints0301[2][0],kochPoints0301[2][1],kochPoints0301[0][0],kochPoints0301[0][1]);
    let kochPoints1304 =Koch(kochPoints0201[1][0],kochPoints0201[1][1],kochPoints0102[0][0],kochPoints0102[0][1]);
    let kochPoints1307 =Koch(kochPoints0201[1][0],kochPoints0201[1][1],kochPoints0203[0][0],kochPoints0203[0][1]);
    let kochPoints1310 =Koch(kochPoints0201[1][0],kochPoints0201[1][1],kochPoints0301[0][0],kochPoints0301[0][1],);
    let kochPoints0112 =Koch(kochP1[0],kochP1[1],kochPoints0301[2][0],kochPoints0301[2][1]); 
    let kochPoints0206 =Koch(kochP2[0],kochP2[1],kochPoints0102[2][0],kochPoints0102[2][1]);
    let kochPoints0702 =Koch(kochPoints0203[0][0],kochPoints0203[0][1],kochP2[0],kochP2[1]);
    let kochPoints1003 =Koch(kochPoints0301[0][0],kochPoints0301[0][1],kochP3[0],kochP3[1]);
    let kochPoints0309 =Koch(kochP3[0],kochP3[1],kochPoints0203[2][0],kochPoints0203[2][1]);
    
    push();
    noStroke();
    fill(color1);
    triangle(kochP1[0],kochP1[1],kochP2[0],kochP2[1],kochP3[0],kochP3[1]);
    fill(color2);
    triangle(kochPoints0406[1][0],kochPoints0406[1][1],kochPoints1012[1][0],kochPoints1012[1][1],kochPoints0709[1][0],kochPoints0709[1][1]);
     
    fill(color1);
    triangle(kochPoints1304[1][0],kochPoints1304[1][1],kochPoints1307[1][0],kochPoints1307[1][1],kochPoints1310[1][0],kochPoints1310[1][1]);
    
    fill(color3);
    quad(kochPoints0102[0][0],kochPoints0102[0][1],kochPoints0102[1][0],kochPoints0102[1][1],kochPoints0102[2][0],kochPoints0102[2][1], kochPoints0201[1][0],kochPoints0201[1][1]);
    quad(kochPoints0203[0][0],kochPoints0203[0][1],kochPoints0203[1][0],kochPoints0203[1][1],kochPoints0203[2][0],kochPoints0203[2][1], kochPoints0201[1][0],kochPoints0201[1][1]);
    quad(kochPoints0301[0][0],kochPoints0301[0][1],kochPoints0301[1][0],kochPoints0301[1][1],kochPoints0301[2][0],kochPoints0301[2][1], kochPoints0201[1][0],kochPoints0201[1][1]);
    
    //ひし形の中のひし形
    fill(color4);
    quad(kochPoints0406[0][0],kochPoints0406[0][1],kochPoints0406[1][0],kochPoints0406[1][1],kochPoints0406[2][0],kochPoints0406[2][1], kochPoints0604[1][0],kochPoints0604[1][1]);
    quad(kochPoints0709[0][0],kochPoints0709[0][1],kochPoints0709[1][0],kochPoints0709[1][1],kochPoints0709[2][0],kochPoints0709[2][1], kochPoints0907[1][0],kochPoints0907[1][1]);
    quad(kochPoints1012[0][0],kochPoints1012[0][1],kochPoints1012[1][0],kochPoints1012[1][1],kochPoints1012[2][0],kochPoints1012[2][1], kochPoints1210[1][0],kochPoints1210[1][1]);
    
    //端の細かいやつ
    fill(color4)
    triangle(kochPoints0401[0][0],kochPoints0401[0][1],kochP1[0],kochP1[1],kochPoints0112[2][0],kochPoints0112[2][1]);
    triangle(kochPoints0702[0][0],kochPoints0702[0][1],kochP2[0],kochP2[1],kochPoints0206[2][0],kochPoints0206[2][1]);
    triangle(kochPoints1003[0][0],kochPoints1003[0][1],kochP3[0],kochP3[1],kochPoints0309[2][0],kochPoints0309[2][1]);
    fill(color2);
    quad(kochP1[0],kochP1[1],kochPoints0401[2][0],kochPoints0401[2][1],kochPoints0401[1][0],kochPoints0401[1][1],kochPoints0112[0][0],kochPoints0112[0][1]);
    quad(kochP2[0],kochP2[1],kochPoints0702[2][0],kochPoints0702[2][1],kochPoints0702[1][0],kochPoints0702[1][1],kochPoints0206[0][0],kochPoints0206[0][1]);
    quad(kochP3[0],kochP3[1],kochPoints1003[2][0],kochPoints1003[2][1],kochPoints1003[1][0],kochPoints1003[1][1],kochPoints0309[0][0],kochPoints0309[0][1]);
    
    pop();

    strokeWeight(3);
    KochCurve(kochP1[0],kochP1[1],kochP2[0],kochP2[1],1);
    KochCurve(kochP2[0],kochP2[1],kochP3[0],kochP3[1],1);
    KochCurve(kochP3[0],kochP3[1],kochP1[0],kochP1[1],1);
    KochCurve(kochP1[0],kochP1[1],kochP3[0],kochP3[1],2);
    KochCurve(kochP3[0],kochP3[1],kochP2[0],kochP2[1],2);
    KochCurve(kochP2[0],kochP2[1],kochP1[0],kochP1[1],2);
    KochCurve(kochP1[0],kochP1[1],kochP3[0],kochP3[1],1);
    KochCurve(kochP3[0],kochP3[1],kochP2[0],kochP2[1],1);
    KochCurve(kochP2[0],kochP2[1],kochP1[0],kochP1[1],1);
    KochCurve(kochPoints0102[0][0],kochPoints0102[0][1],kochPoints0102[2][0],kochPoints0102[2][1],1);
    KochCurve(kochPoints0102[2][0],kochPoints0102[2][1],kochPoints0102[0][0],kochPoints0102[0][1],1);
    KochCurve(kochPoints0203[0][0],kochPoints0203[0][1],kochPoints0203[2][0],kochPoints0203[2][1],1);
    KochCurve(kochPoints0203[2][0],kochPoints0203[2][1],kochPoints0203[0][0],kochPoints0203[0][1],1);
    KochCurve(kochPoints0301[0][0],kochPoints0301[0][1],kochPoints0301[2][0],kochPoints0301[2][1],1);
    KochCurve(kochPoints0301[2][0],kochPoints0301[2][1],kochPoints0301[0][0],kochPoints0301[0][1],1);

}