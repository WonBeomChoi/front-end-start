
var url = 'https://1boon.kakao.com/ch/enter.json?page=1&pagesize=10'
var page_n = 2;


getUrlData(url,print);

function print(json){
    console.log(json);
    
    var str = '';
    for( var i=0; i< json.data.length; i++){
        var title = json.data[i].title;
        var path = json.data[i].path;
        str += `<a href="https://1boon.kakao.com/${path}">${title}</a><br>`;
    }
    document.getElementById('wrap').innerHTML += str;
}

function getUrlData(url, callback){
    fetch(url)
    .then(function(response){
        response.json().then(function(data){
            callback(data);
        });
    })
    .catch(function(err) {
        console.log("err");
    });
}

document.getElementById('more').addEventListener('click',function(){
    url = `https://1boon.kakao.com/ch/enter.json?page=${page_n}&pagesize=10`;
    getUrlData(url, print);
    page_n++;
})

