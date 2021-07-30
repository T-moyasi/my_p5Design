function setup(){
    createCanvas(windowWidth, windowHeight);
    noLoop();
    background(100, 100, 100);
    ellipseMode(CENTER);

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
