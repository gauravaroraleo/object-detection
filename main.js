function setup(){
    c1=createCanvas(640,420);
    c1.center()
    myModel=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="Status: Detecting Objects"
}
ok=""
status=""
objects=[]
function modelLoaded(){
    console.log("modeel iis loadeedss")
status=true
    myModel.detect(ok,gotResult)
    
}
function gotResult(error,results){
    if(error){console.log(error)}
else{
console.log(results)    
    objects=results
}    
}
function preload(){
    ok=loadImage('dog_cat.jpg')
    
}
function draw(){
    image(ok,0,0,640,420);
    if(status != ""){
        for(i=0; i<objects.length;i++){
            document.getElementById("status").innerHTML="Status: Detected Objects"
            p=floor(objects[i].confidence*100);
            fill("black")
            text(objects[i].label+" "+p+" %",objects[i].x,objects[i].y)
            noFill()
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
            
        }
        
    }
}