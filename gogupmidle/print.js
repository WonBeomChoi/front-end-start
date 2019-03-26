function print(json) {
    console.log(json);
    var str = '';
    for(i = 0; i<json.data.length; i++){
        var title = json.data[i].title;
        var image = json.data[i].coverImage;
        var view = json.data[i].totalView;
        var path = json.data[i].path
        // console.log(title);
        str += `
                <div  class = 'text-center tabtab'>
                    <a href='https://1boon.kakao.com/${path}'>
                        <img src = '${image}'>
                        <div class ='title'>${title}</div>
                        <div class ='total_view'>${view}읽음</div>
                    </a>
                </div>
        `
    }
    
    setTimeout(() => {
    
        list_box.innerHTML += str;    
        window.onload =  document.querySelector('#isload').classList.add('isload');
    
    }, 1000); //로딩중이 너무빨리 지나가서 넣어봤습니다.
}