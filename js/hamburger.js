// const hamburger = document.querySelector('.hamburger');
// hamburger.addEventListener('click', function(e) {
//     e.stopPropagation();
//     hamburger.classList.toggle('is-open');
//     if (hamburger.classList.contains('is-open')) {
       

// const burger = document.querySelector(".hamburger_wrapper");
// const links = document.querySelectorAll(".hamburger li");

// // btnをクリックした時.is-openのクラスを足してください
// burger.addEventListener("click", () => {
// 	burger.classList.toggle("is-open");
// })
// //具材をクリックした時上記の処理をリムーブする 
// links.forEach((link) => {
// 	link.addEventListener("click", () => {
// 		burger.classList.remove("is-open");
// 	})
// })

const burgerHome = document.querySelector(".hamburger-home");
const burgerAbout = document.querySelector(".hamburger-about");
const burgerSkill = document.querySelector(".hamburger-skill");
const burgerContact = document.querySelector(".hamburger-contact");
const links = document.querySelectorAll(".hamburger li");

// btnをクリックした時.is-openのクラスを足してください
burgerHome.addEventListener("click", () => {
    burgerHome.classList.toggle("is-open");
}) 