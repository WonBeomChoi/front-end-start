var li_tabs = document.querySelectorAll('.nav.nav-tabs > li');
var now_active = document.querySelector('.active');
var list_box = document.querySelector('#list');
var more_btn = document.querySelector('.btn-default');
var page_no = 1;
var page_size = 9;


get_data(now_active.id,print);

li_tabs.forEach(function(element){
    element.addEventListener('click', change_active );
    
});
more_btn.addEventListener('click',more);

function change_active() {
    page_no = 1;
    page_size =10;
    now_active.classList.remove('active');
    now_active = event.target.parentNode;
    now_active.classList.add('active');
    list_box.innerHTML = '';
    get_data(now_active.id,print);
};



function more(){
    page_no++;
    get_data(now_active.id, print);
}

