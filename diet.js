

let menuArray = ['편의점', '비빔국수', '다이어트 도시락', '닭볶음탕', '샐러드', '김치볶음밥', 
'된장찌개', '비빔밥'];

function todayMenu(){
    let random = parseInt(Math.random()*menuArray.length);
    alert('오늘의 메뉴는 '+menuArray[random]+'입니다.');
}

let menu = document.querySelector('.today-menu');
menu.addEventListener("click", todayMenu);