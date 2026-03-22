
document.addEventListener("DOMContentLoaded", () => {


    // 詳しく見るボタンを全部取得（querySelectorAllは、指定したセレクタに一致するすべての要素を取得する）
    const openButtons = document.querySelectorAll(".open-modal");

    // モーダル本体を全部取得
    const modals = document.querySelectorAll(".modal");

    // 「閉じる」ボタンを全部取得
    const closeButtons = document.querySelectorAll(".close");

    // 開く処理。それぞれ処理する
        // forEachとは？　配列の要素を一つずつ処理するためのメソッド

    openButtons.forEach(button => {

        // 各ボタンにクリックイベントをつける
        button.addEventListener("click", () => {
// modalIDという名前の定数に、modal1とかを入れる。
            const modalId = button.dataset.modal;

            // 取得したIDのモーダルを探す
            const modal = document.getElementById(modalId);

            // もしモーダルが存在するならばactiveクラスをつける
            if (modal) {
                modal.classList.add("active");
            }
        });
    });


// 閉じる処理。それぞれ処理する
    closeButtons.forEach(button => {
// 各ボタンにクリックイベントをつける
        button.addEventListener("click", () => {

            // closestでbuttonから一番近い親要素のmodalクラスを探す
            const modal = button.closest(".modal");

            // activeクラスを外す
            modal.classList.remove("active");
        });
    });

// 閉じる以外にも背景クリックで閉じるようにする
    modals.forEach(modal => {
// eにクリック情報を入れる
        modal.addEventListener("click", (e) => {

            // e.targetはクリックされた場所？？？？"
            // もし背景がクリックされたなら、activeクラスを外す
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });
    });

});
// escキーで閉じる
// keydownは、キーボードが押されたときのイベント。eに押されたキーの情報を入れる。
document.addEventListener("keydown", (e) => {
    // もし押されたキーがEscapeならば
    if (e.key === "Escape") {
        // 全てのmodalのactiveクラスを取得
        const modals = document.querySelectorAll(".modal.active");
        // activeクラスを外す
        modals.forEach(modal => {
            modal.classList.remove("active");
        });
    }
});