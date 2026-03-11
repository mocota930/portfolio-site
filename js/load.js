
$(function () {
    function end_loader() {
        $('.loader').fadeOut(500);
    }
    $(window).on('load', function () {
        setTimeout(function () {
            end_loader();
        }, 1500)
    })
})