$(document).ready(function(){

    $("main").css("margin-top", $("header").outerHeight());

    $(window).on('resize scroll', function() {
        if ($(window).scrollTop() > $("main").offset().top) {
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");
        }
    });

    $("#menu").click(function() {
        $("aside, aside nav").addClass('active');
    });

    $("aside").click(function() {
        $("aside, aside nav").removeClass('active');
    });
});