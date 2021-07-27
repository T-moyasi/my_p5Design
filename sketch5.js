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
    noStroke();
    rgba1=color(random(255),random(255),random(255));
    rgba2=color(random(255),random(255),random(255));
    rgba3=color(random(255),random(255),random(255));
    console.log("color",rgba1);
    let color1=rgba1;
    let color2=rgba2;
    let color3=rgba3;
    let lissajousM=2,lissajousN=1;
    let epA=1.2,epB=1;
    let hyN=1.6;
    let TriW = width/3;
    let iMax = width/TriW;
    let jMax = height/(TriW*sin(PI/3));

    for(i=0;i<=iMax;i++){
        for(j=0;j<=jMax;j++){
            fill(color1);
            SierpinskiTri(i*TriW,j*2*TriW,i*TriW+TriW/2,j*2*TriW+TriW/2,(i+1)*TriW,j*2*TriW,fibonacci(4));
            SierpinskiTri(i*TriW,j*2*TriW,i*TriW+TriW/2,j*2*TriW-TriW/2,(i+1)*TriW,j*2*TriW,fibonacci(4));
            if(i%2==0){
                fill(color3);
                SierpinskiTri(i*TriW+TriW,j*TriW,i*TriW+TriW/2,j*TriW+TriW/2,i*TriW+TriW+TriW/2,j*TriW+TriW/2,fibonacci(4)); 
                SierpinskiTri(i*TriW+TriW,j*TriW+TriW,i*TriW+TriW/2,j*TriW+TriW/2,i*TriW+TriW+TriW/2,j*TriW+TriW/2,fibonacci(4));
                fill(color2);
                SierpinskiTri(i*TriW,j*2*TriW,  i*TriW-TriW,  j*2*TriW+TriW,i*TriW+TriW,  j*2*TriW+TriW,fibonacci(5));
                SierpinskiTri(i*TriW,j*2*TriW+2*TriW,  i*TriW-TriW,  j*2*TriW+TriW,i*TriW+TriW,  j*2*TriW+TriW,fibonacci(5));
            }
        }
      
    }
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
    
}