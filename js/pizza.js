document.addEventListener("DOMContentLoaded", () => {
// .skill-itemのクラス名をite
  const items = document.querySelectorAll(".skill-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {

        const item = entry.target;
        const level = Number(item.dataset.level);
        const pizzas = Array.from(item.querySelectorAll(".pizza-slice"));
        const total = pizzas.length;

        // 大きい番号から消す
        for (let i = total - 1; i >= level; i--) {
          setTimeout(() => {
            pizzas[i].classList.add("hide");
          }, (total - 1 - i) * 120);
        }

        observer.unobserve(item);
      }

    });
  }, { threshold: 0.3 });

  items.forEach(item => observer.observe(item));


});