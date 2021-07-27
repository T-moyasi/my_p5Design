function setup(){
    createCanvas(windowWidth, windowHeight);
    noLoop();
    background(255, 255, 255);
    ellipseMode(CENTER);
    blendMode(DIFFERENCE);
}
 
function draw(){
    noStroke();
    rgba1=color('rgba(255, 0, 100, 155)')
    rgba2=color('rgba(205,100,0,100)')
    let lissajousM=2,lissajousN=1;
    let epA=1.2,epB=1;
    let hyN=1.6;
    for(var i=0; i+0.05<= 10*PI;i+=0.01){
        let [x1,y1]=epicycloid(epA,epB,i);
        //noStroke();
        fill(rgba1);        
        ellipse(width/2+x1*50,height/2+y1*50,fibonacci(round(i/4)));
        //ellipse(width/2+x1*50,height/2+y1*50,5);
        let [x2,y2]=hypocycloid(hyN,i);
        fill(rgba2)
        ellipse(width/2+x2*90,height/2+y2*90,fibonacci(round(i/5)));
        //ellipse(width/2+x2*90,height/2+y2*90,5);
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