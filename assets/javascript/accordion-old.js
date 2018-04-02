$(document).ready(function(){

    $("accordion-panel").each(function(){
        if ($(this).is("[opened]")) {
            $(this).css("max-height", $(this).prop("scrollHeight"));
        } else {
            $(this).css("max-height", "0");
        }
    });

    $("accordion-toggle").click(function () {
        if ($(this).siblings("accordion-panel").height()) {
            $(this).siblings("accordion-panel").css("max-height", "0");
        } else {
            $(this).siblings("accordion-panel").css("max-height", $(this).siblings("accordion-panel").prop("scrollHeight"));
        }
    });

});