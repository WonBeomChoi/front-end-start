
    var wrap = document.querySelector(".wrap")
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){ 
            var w = document.createElement('div');
            var b = document.createElement('div');
            w.className="w";
            b.className="b";
            (i+j)%2==1 ? wrap.appendChild(w): wrap.appendChild(b)
        }
    }