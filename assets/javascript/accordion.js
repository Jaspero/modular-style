$(document).ready(function(){

    $("accordion-panel[opened]").click(function () {
        console.log("bla");
    });

    $("accordion-toggle").click(function () {

        let scrollHeight = $(this).siblings("accordion-panel").prop("scrollHeight");
        let height = $(this).siblings("accordion-panel").height();

        if (height) {
            $(this).siblings("accordion-panel").css("max-height", "0");
        } else {
            $(this).siblings("accordion-panel").css("max-height", scrollHeight);
        }

    });
});