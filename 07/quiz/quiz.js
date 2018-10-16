var $window = $(window);
var $up = $('.gotop');
function check_scroll(){
    var scrollTop = $window.scrollTop();
    var fadeout_p = 100;
    if(scrollTop>100){
        $up.fadeIn();
    }
    console.log(scrollTop);
}
$window.on('scroll', check_scroll);
$up.on('click',function(event){
    $window.scrollTop(0);
})