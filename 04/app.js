
    var wrap = document.querySelector(".wrap")
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){ 
            var div = document.createElement('div');
            div.className = (i+j)%2 ==1 ? "w":"b"
            wrap.appendChild(div);
        }
    }
    var blocks = document.querySelectorAll('.wrap > div'); 
    
    
    function select(event){
        var block = event.currentTarget;
        block.style.backgroundColor = 'yellow';
    }
    for ( var i = 0; i <16 ; i++){
        blocks[i].addEventListener('click', select);
    }