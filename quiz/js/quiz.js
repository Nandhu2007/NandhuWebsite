var score = 0;
var viewer1 = 1;
var viewer2=1;
function correct() {
    
    document.getElementById("output").innerHTML=("correct");
    if(score<4 || viewer1==1 );
        score+=1;
        viewer1-=1

}
function wrong() {
    
    document.getElementById("output").innerHTML=("wrong");
    if(viewer1==0){
        score-=1;
        viewer1+=1
    }
}
function correct1() {
    
    document.getElementById("output1").innerHTML=("correct");
    
    score+=1
    
}
function wrong1() {
    
    document.getElementById("output1").innerHTML=("wrong");
}
function correct2() {
    
    document.getElementById("output2").innerHTML=("correct");
   
}
function wrong2() {
    
    document.getElementById("output2").innerHTML=("wrong");
}
function correct3() {
    
    document.getElementById("output3").innerHTML=("correct");
    if(score<4)
        score+=1;
}
function wrong3() {
    
    document.getElementById("output3").innerHTML=("wrong");
}
function displayscore(){

    document.getElementById("score").innerHTML=score + "/4"
}