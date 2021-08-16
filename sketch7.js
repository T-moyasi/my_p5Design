function setup(){
    createCanvas(windowWidth, windowHeight);
    noLoop();    
    colorMode(HSB);
    background(random(360));
    ellipseMode(CENTER);
    randomSeed(2100);
    noiseSeed(5000);

}
 
function draw(){
    stroke(random(255));
    s=random(0, 100);
    b=random(0, 100);
    h1=random(0, 360);
    hsba1=color(h1,s,b,random(0.5,1));
    hsba2=color((h1+90)%360,s,b,random(0.5,1));
    hsba3=color((h1+180)%360,s,b,random(0.5,1));
    hsba4=color((h1+270)%360,s,b,random(0.5,1));
    console.log("color",hsba1);
    let color1=hsba1;
    let color2=hsba2;
    let color3=hsba3;
    let color4=hsba4;
    let r1=200;
    let r2=100;
    let r3=50;
    let kochP1 = [width/4,height/3];
    let kochP2 = [width/4+width/2,height/3];
    let kochP3 = LastPoint_RegularTri_P(kochP1[0],kochP1[1],kochP2[0],kochP2[1]);
    let kochPoints0102 =Koch(kochP1[0],kochP1[1],kochP2[0],kochP2[1]); 
    let kochPoints0201 =Koch(kochP2[0],kochP2[1],kochP1[0],kochP1[1]); 
    let kochPoints0203 =Koch(kochP2[0],kochP2[1],kochP3[0],kochP3[1]);
    let kochPoints0301 =Koch(kochP3[0],kochP3[1],kochP1[0],kochP1[1]);
    let kochPoints0406 =Koch(kochPoints0102[0][0],kochPoints0102[0][1],kochPoints0102[2][0],kochPoints0102[2][1]);
    let kochPoints0604 =Koch(kochPoints0102[2][0],kochPoints0102[2][1],kochPoints0102[0][0],kochPoints0102[0][1]);
    let kochPoints0709 =Koch(kochPoints0203[0][0],kochPoints0203[0][1],kochPoints0203[2][0],kochPoints0203[2][1]);
    let kochPoints0907 =Koch(kochPoints0203[2][0],kochPoints0203[2][1],kochPoints0203[0][0],kochPoints0203[0][1]);
    let kochPoints1012 =Koch(kochPoints0301[0][0],kochPoints0301[0][1],kochPoints0301[2][0],kochPoints0301[2][1]);
    let kochPoints1210 =Koch(kochPoints0301[2][0],kochPoints0301[2][1],kochPoints0301[0][0],kochPoints0301[0][1]);
  
    push();
    noStroke();
    fill(color1);
    ellipse(kochP1[0],kochP1[1], r1);
    ellipse(kochP2[0],kochP2[1], r1);
    ellipse(kochP3[0],kochP3[1], r1);

    fill(color2);
    ellipse(kochPoints0102[1][0],kochPoints0102[1][1], r1);
    ellipse(kochPoints0203[1][0],kochPoints0203[1][1], r1);
    ellipse(kochPoints0301[1][0],kochPoints0301[1][1], r1);

    fill(color3);
    ellipse(kochPoints0102[0][0],kochPoints0102[0][1], r2);
    ellipse(kochPoints0203[0][0],kochPoints0203[0][1], r2);
    ellipse(kochPoints0301[0][0],kochPoints0301[0][1], r2);
    ellipse(kochPoints0102[2][0],kochPoints0102[2][1], r2);
    ellipse(kochPoints0203[2][0],kochPoints0203[2][1], r2);
    ellipse(kochPoints0301[2][0],kochPoints0301[2][1], r2);
    
    fill(color4)
    ellipse(kochPoints0406[1][0],kochPoints0406[1][1], r3);
    ellipse(kochPoints1012[1][0],kochPoints1012[1][1], r3);
    ellipse(kochPoints0709[1][0],kochPoints0709[1][1], r3);
    
    

    ellipse(kochPoints0102[1][0],kochPoints0102[1][1], r3);
    ellipse(kochPoints0203[1][0],kochPoints0203[1][1], r3);
    ellipse(kochPoints0301[1][0],kochPoints0301[1][1], r3);
    
    ellipse(kochPoints0604[1][0],kochPoints0604[1][1], r3);
    ellipse(kochPoints1210[1][0],kochPoints1210[1][1], r3);
    ellipse(kochPoints0907[1][0],kochPoints0907[1][1], r3);
    
    ellipse(kochPoints0201[1][0],kochPoints0201[1][1], r3);

    pop();

}
