const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    hamburger.classList.toggle('is-open');
    if (hamburger.classList.contains('is-open')) {
       