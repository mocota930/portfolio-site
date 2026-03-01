const items = document.querySelectorAll(".skill-item");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      const item = entry.target;
      const level = Number(item.dataset.level);
      const pizzas = item.querySelectorAll(".pizza-slice");

      pizzas.forEach((pizza, index) => {
        if (index >= level) {
          setTimeout(() => {
            pizza.classList.add("hide");
          }, (index - level) * 120);
        }
      });

      observer.unobserve(item);
    }
  });
}, {
  threshold: 0.3
});

items.forEach(item => observer.observe(item));