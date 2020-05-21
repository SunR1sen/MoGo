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
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");


        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });


    // Logos 
    $("#logo").on("click", function(event) {
        // event.preventDefault();

        $("#nav").removeClass("active");
        $("#nav_toggle").removeClass("active");
        
    });

    // Menu nav toggle 
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    });

    // Close nav 
    $("#nav a").on("click", function(event) {
        event.preventDefault();

        $("#nav").removeClass("active");
        $("#nav_toggle").removeClass("active");
    });


    // Collpse
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });


    // Slider
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slideToShow: 1,
        slideToScroll: 1,

    });

});