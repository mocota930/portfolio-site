
const hamburger = document.querySelector(".hamburger");
const items = document.querySelectorAll(".hamburger li");

// btnをクリックした時.is-openのクラスを足す
hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("is-open");
    items.forEach(item => {
        item.classList.toggle("is-open");
    });

    e.stopPropagation(); // 外クリック防止
});

//具材をクリックした時上記の処理をリムーブする 
const burgerImages = document.querySelectorAll(".hamburger img");

burgerImages.forEach(img => {
    img.addEventListener("click", () => {

        hamburger.classList.remove("is-open");

        // items.forEach(item => {
        //     item.classList.remove("is-open");
        // });

    });
});


// メニュー以外クリック → 閉じる
document.addEventListener("click", () => {

    hamburger.classList.remove("is-open");

    items.forEach(item => {
        item.classList.remove("is-open");
    });

});
