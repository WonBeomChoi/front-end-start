console.log('app.js');
function json(){
    fetch('./data.json')
    .then(function(resp){
        resp.json().then(function(data){
            console.log('json data:', data);
            document.getElementById('name').innerHTML = data.name;
        });
    })
    .catch(function(err){
        console.log('errererererererer에러존나뜸', err);
    });
}

function jsonp(){
    var head = document.querySelector("head");
    var script = document.createElement("script");
    script.src = 'jsonp.js';
    head.appendChild(script);
}
function callback(data){
    console.log(data);
}

