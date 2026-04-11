$(function () {
    $('.timeline-item').click(function () {
        var $text = $(this).find('.timeline-text');
        var $icon = $(this).find('span');

        if ($text.is(':visible')) {
            $text.stop().slideUp();
            $icon.text('▼');
        } else {
            $text.stop().slideDown();
            $icon.text('▲');
        }
    });
});