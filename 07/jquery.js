// document.querySelector('h1').innerHTML = 'hi';
//  $('h1').fadeOut().delay(1000).fadeIn();
// var $div = $('div')
// $div
//   .css('background-color', 'yellow')
//   .css('border', '1px solid red');

// var divs = document.querySelectorAll('div');
// for(var i=0 ; i < divs.length; i++) {
//   divs[i].style.backgroundColor = 'red';
// }




var $btn = $('#btn');
var $txt = $('#text');
var $debug = $('#debug');

$btn.on('click', function(event){
  console.log('click')
  $('h1').toggle('fats'); //fadeOut()?
  
//   if($txt.val() === '') {
//     alert('값을 입력하세여')
//     return;
//   }

//   $debug.html($txt.val());

});
$('.wrap').on('click', 'div', function(event){

    $(event.target).fadeOut();
    // console.log(event.target);
  
  })