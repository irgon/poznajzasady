(function($) {
    $(document).ready(function() {
        $('article:nth-child(2n+1)').addClass('odd');
        $('a.image').prettyPhoto({show_title: false, social_tools: ''});
        if (window.PIE) {
            $('article').each(function() {
                PIE.attach(this);
            });
        }
        $('body').css('min-height', $(window).height());
        setInterval(function() {
           // $('#bottles').css('top', ($('body').height() > $(window).height() ? $('body').height() : $(window).height()) - $('#bottles').height()).css('bottom', 'auto');
            $('body').css('min-height', $(window).height());
        }, 100);
    });
})(jQuery);