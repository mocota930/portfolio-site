// $('.slide-items').slick();

$('.slide-items').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    // 自動再生追加　4/23追加
    autoplay: true,
    autoplaySpeed: 2000,

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
                centerPadding: '0px',
                slidesToShow: 1
            }
        }
    ]
});
