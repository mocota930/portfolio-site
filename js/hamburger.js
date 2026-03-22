// .hamburgerというクラスを取得し、hamburgerという定数として保存する
const hamburger = document.querySelector(".hamburger");
// .hamburger liを全部取得し、itemsという定数として保存する
const items = document.querySelectorAll(".hamburger li");

// hamburgerをクリックした時.is-openのクラスをeに入れる
hamburger.addEventListener("click", (e) => {
    // クリックされた時、hamburgerにis-openクラスをつける（外す）
    hamburger.classList.toggle("is-open");
    items.forEach(item => {
        item.classList.toggle("is-open");
    });
// hamburger外にクリックイベントが伝わるのを止める
    e.stopPropagation(); 
});

// .hamburger imgを全部取得し、burgerImagesという定数として保存する
const burgerImages = document.querySelectorAll(".hamburger img");
// burgerImagesをクリックしたとき、hamburgerからis-openクラスを外す
burgerImages.forEach(img => {
    img.addEventListener("click", () => {

        hamburger.classList.remove("is-open");

        // items.forEach(item => {
        //     item.classList.remove("is-open");
        // });

    });
});


// document(html全体)をクリックした時のイベントをeに入れる
document.addEventListener("click", (e) => {
    if (hamburger.contains(e.target)) {
        hamburger.classList.remove("is-open");

        items.forEach(item => {
            item.classList.remove("is-open");
        });
    }
});
