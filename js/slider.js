// $('.slide-items').slick();

$('.slide-items').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 490,
            settings: {
                arrows: true,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
