
var box = document.querySelector('.box');
var missscore = document.querySelector('.miss');
var score = document.querySelector('.score');
var container = document.querySelector('.container');

var point = 0;
var miss = 0; 
var wrapWidth = 500;
var boxWidth = 30;
var level = 1;
var speed = 2000;

function move() {
  var x = random(wrapWidth - boxWidth);
  var y = random(wrapWidth - boxWidth);

  box.style.left = x + 'px';
  box.style.top = y + 'px';
}
function levelup() {
    
    level+=1
    speed = speed-100;
    console.log(level);
    if(point == 10){
        point = 0
        console.log('렙업');
        score.innerHTML = point;
    }
}

function random(max) {
  return Math.floor(Math.random() * max);
}


function scorepoint(e) {
    if(e.target.className == 'box'){
        point +=1;
        score.innerHTML = point;
        console.log(point);
    }
    else{
        miss +=1;
        missscore.innerHTML = miss;
    }
}

container.addEventListener('click',scorepoint);
setInterval(move, speed);
setInterval(levelup, 1000);






// var map = document.querySelector('.container');
// var box = document.querySelector('.box');
// var point = 0;
// var score = document.querySelector('.score')
// function creatBox() {
    
//     map.innerHTML += '<div class="box"></div>'
//     var box = document.querySelector('.box');
//     box.style.left = Math.floor(Math.random() * 400) + 50+'px';
//     box.style.top = Math.floor(Math.random() * 400) + 50+'px';
//     point += 1;
//     score.innerHTML = point;

// }

// function removeBox(e) {
//     if(e.target.className =='box')
//     {
//         e.target.remove();
//     }
    
// }
// map.addEventListener('click',removeBox);
// box.addEventListener('click',creatBox);