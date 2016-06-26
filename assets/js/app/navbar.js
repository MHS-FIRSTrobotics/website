$(document).ready(function() {
    if(location.pathname != "/") {
        $('#nav').find('a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
    } else $('#sidebar').find('a:eq(0)').addClass('active');
});