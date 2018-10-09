var query = '';
var appkey = 'KakaoAK 17d2dc4e661078bf47fcd2a706393314';
var more = document.getElementById('more');
var searchvar = document.getElementById('searchbar');
var page_n = 1;
var str = '';


searchvar.onkeypress = function enterkeysearch(event){
    if(event.keyCode == 13){
        str = '';
        query = searchvar.value;
        getUrlData(query, option, print);
        console.log(searchvar.value);
        more.style.display = 'block'
    }
}

var option = {
    method : 'GET',
    headers : {Authorization : appkey}
}



more.addEventListener('click', function(){
    getUrlData(query, option, print);
});


function print(json){
    console.log(json);
    console.log(json.documents[1].title);
    for( var i=0; i< json.documents.length; i++){
        var title = json.documents[i].title;
        var content = json.documents[i].contents;
        var url = json.documents[i].url;
        str += 
        `
        <div id="container">   
            <a href=${url} id = "title">${title}</a>
            <a href=${url} id = "url">${url}</a>
            <div id = "content">${content}</div>
        </div>
        `
    }
    document.getElementById('list').innerHTML = str;
}



function getUrlData(query, option, callback){
    var url = `https://dapi.kakao.com/v2/search/web?query=${query}&page=${page_n}`;
    page_n++;
    fetch(url,option)
    .then(function(response){
        response.json().then(function(data){
            callback(data);
        });
    })
    .catch(function(err) {
        console.log("err");
    });
}












// class kakaosearch{
//     constructor(query, appkey){
//         this.url = `https://dapi.kakao.com/v2/search/web?query=${query}`;
//         this.query = query;
//         this.option = {
//             method : 'GET',
//             headers : {'Authorization':appkey, }
//         }
//     }
//     get_data(){
//         fetch(this.url,this.option)
//         .then(function(response){
//             response.json().then(function(data){
//                 console.log(data.documents[0]);
//             });
//         })
//         .catch(function(err) {
//             console.log("err");
//         });
//     }
    
// }
// new kakaosearch(query,appkey).get_data();


// function search(appkey, query, option) {
//     this.appkey = appkey;
//     this.query = query;
//     this.option = option;
//     this.get_data = function getUrlData(url){
//             fetch(url,this.option)
//             .then(function(response){
//                 response.json().then(function(data){
//                 });
//             })
//             .catch(function(err) {
//                 console.log("err");
//             });
//     }
// }


