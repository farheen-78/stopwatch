var sec=0;
var min=0;
var msec=0;
var interval;
var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");
var str=document.getElementById("start");
function disabled(){
 str.disabled=true;
 str.style.display='none';


}
function timer(){
   msec++;
   msecHeading.innerHTML=msec;
   if(msec>=100){

       sec++;
       secHeading.innerHTML=sec;
       msec=0;
   }
   else if(sec>=60){
       min++;
       minHeading.innerHTML=min;
       sec=0;
   }
}
function start(){
disabled();

interval=setInterval(timer,10)
}

function stop(){
    clearInterval(interval)

}
function reset(){
    sec=0
    min=0
    msec=0;
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    msecHeading.innerHTML=msec;

    stop()
}