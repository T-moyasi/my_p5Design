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

function epicycloid(a,b,theta){
    let x = (a+b)*cos(theta)-b*cos((a+b)/b*theta);
    let y = (a+b)*sin(theta)-b*sin((a+b)/b*theta);
    return [x,y];
}

function hypocycloid(n,theta){
    let x = n*cos(theta)+cos(n*theta);
    let y = n*sin(theta)-sin(n*theta);
    return [x,y];
}

function lissajousCurve(m,n,theta){
    let x = sin(m*theta);
    let y = sin(n*theta);
    return [x,y];
}

function logarithmicSpiral(a,theta){
    let x = a*theta*cos(a*theta);
    let y = a*theta*sin(a*theta);
    return [x,y];
}
function fibonacci(n){
   let a=0,b=1;
   for(let i=1;i<n;i++){
       let c=a+b;
       a=b;
       b=c;
   }
   return b;
}

function SierpinskiTri(x1,y1,x2,y2,x3,y3,n) {
    triangle((x1+x2)/2,(y1+y2)/2,(x2+x3)/2,(y2+y3)/2,(x3+x1)/2,(y3+y1)/2);
    if (n>1) {
        SierpinskiTri(x1,y1,(x1+x2)/2,(y1+y2)/2,(x1+x3)/2,(y1+y3)/2,n-1);
        SierpinskiTri(x2,y2,(x1+x2)/2,(y1+y2)/2,(x2+x3)/2,(y2+y3)/2,n-1);
        SierpinskiTri(x3,y3,(x2+x3)/2,(y2+y3)/2,(x1+x3)/2,(y1+y3)/2,n-1);
    }
}

function KochCurve(x1,y1,x2,y2,n){
    if(n==0){
        //console.log(x1,y1,x2,y2);
        line(x1, y1, x2, y2);
    }else{
        let x3=(x2-x1)/3+x1;
        let y3=(y2-y1)/3+y1;
        let x4=(x2-x1)*2/3+x1;
        let y4=(y2-y1)*2/3+y1;
        //let x5=1/2*(x4-x3)+sqrt(3)/2*(y4-y3)+x3;
        //let y5=(-sqrt(3)/2*(x4-x3)+1/2*(y4-y3))+y3;
        let [x5,y5]=LastPoint_RegularTri_N(x3,y3,x4,y4);
        KochCurve(x1,y1,x3,y3,n-1);
        KochCurve(x3,y3,x5,y5,n-1);
        KochCurve(x5,y5,x4,y4,n-1);
        KochCurve(x4,y4,x2,y2,n-1);
    }
}
function Koch(x1,y1,x2,y2){
    let x3=(x2-x1)/3+x1;
    let y3=(y2-y1)/3+y1;
    let x5=(x2-x1)*2/3+x1;
    let y5=(y2-y1)*2/3+y1;
    //let x5=1/2*(x4-x3)+sqrt(3)/2*(y4-y3)+x3;
    //let y5=(-sqrt(3)/2*(x4-x3)+1/2*(y4-y3))+y3;
    let [x4,y4]=LastPoint_RegularTri_N(x3,y3,x5,y5);
    return [[x3,y3],[x4,y4],[x5,y5]];
}

function LastPoint_RegularTri_P(x1,y1,x2,y2){
    let x3=1/2*(x2-x1)-sqrt(3)/2*(y2-y1)+x1;
    let y3=(sqrt(3)/2*(x2-x1)+1/2*(y2-y1))+y1;
    return [x3,y3];
}
function LastPoint_RegularTri_N(x1,y1,x2,y2){
    let x3=1/2*(x2-x1)+sqrt(3)/2*(y2-y1)+x1;
    let y3=(-sqrt(3)/2*(x2-x1)+1/2*(y2-y1))+y1;
    return [x3,y3];
}