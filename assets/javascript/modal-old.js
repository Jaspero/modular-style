$(document).ready(function(){

    $("[opens]").click(function() {
        thisOpens = $(this).attr("opens");
        $('#' + thisOpens).addClass('active');
    });

    $("modal-overlay, [closeModal]").click(function(){
        $("modal").removeClass("active");
    });

});