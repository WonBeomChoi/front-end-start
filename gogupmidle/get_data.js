function get_data(tab, callback) {
    document.querySelector('#isload').classList.remove('isload');
    console.log(tab);
    url = `http://1boon.kakao.com/ch/${tab}.json?pagesize=${page_size}&page=${page_no}`;
    fetch(url).then(function(response){
            response.json().then(function(data){
                callback(data);
            });
        })
    .catch(function(err){
        console.log(err);
    })
}
