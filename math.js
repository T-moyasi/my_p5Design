function epicycloid(a,b,theta){
    let x = (a+b)*cos(theta)-b*cos((a+b)/b*theta);
    let y = (a+b)*sin(theta)-b*sin((a+b)/b*theta);
    return [x,y];
}

function hypocycloid(a,b,theta){
    let x = (a-b)*cos(theta)-b*cos((a-b)/b*theta);
    let y = (a-b)*sin(theta)-b*sin((a-b)/b*theta);
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