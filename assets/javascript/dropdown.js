$(document).ready(function(){
    $("dropdown-toggle").click(function(event) {
        $("dropdown").removeClass('active');
        $(this).parent("dropdown").addClass('active');
        event.stopPropagation();
    });
    $(window, "dropdown-item").click(function() {
        $("dropdown").removeClass('active');
    });
});