// var btn = document.getElementById('btn');
var btn = document.querySelector('#btn');
// console.log(btn)
btn.addEventListener('click', daumbutton)
function daumbutton(){
    console.log('click');
    window.location.href()
    // console.log(arguments,this,event, event.type,event.currentTarget);
    var count = 0;
    if(count%2==0){
        console.log("으히히");
    }
    count++;
}