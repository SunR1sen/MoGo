$(function() {

    var introH = $("#intro").innerHeight(),
        header = $("#header"),
        scrollOffset = $(window).scrollTop();  


        // Fixed header
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {

        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    }


    // Smooth scroll


});