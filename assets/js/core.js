$(document).ready(function () {
    var sidebar = $('#sidebar');

    if (location.pathname != "/") {
        $('#nav').find('a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
    } else sidebar.find('a:eq(0)').addClass('active');

    $('#page').flowtype({
        fontRatio: 45,
        minFont: 11,
        maxFont: 18
    });

    sidebar.flowtype({
        fontRatio: 11,
        minFont: 12.1,
        maxFont: 18 * 1.1
    });

    hljs.initHighlightingOnLoad();
    footerPad();

    var document = $('#ftc5395');
    if (document != null) {
        $('html').css.addClass('ftc5395')
    }
});

$("#facebook-btn").click(function () {
    alert("Our Facebook page is not available at this moment. Check back sometime soon.");
});

$("#twitter-btn").click(function () {
    alert("Our Twitter page is not available at this moment. Check back sometime soon.");
});

$(window).resize(function () {
    footerPad();
});

function footerPad() {
    document.body.style.overflow = "hidden";
    var viewportHeight = "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    document.body.style.overflow = "";
    var documentHeight = $(document).height();
    var footerHeight = $('footer').height();

    if (documentHeight - footerHeight < viewportHeight) {
        $('#content').css('padding-bottom', function () {
            var pageContentHeight = $('#page').height();
            var diff = viewportHeight - pageContentHeight;
            return footerHeight + diff;
        });

        //console.log(documentHeight + " " + viewportHeight);
    }
}

$.getDocumentHeight = function(){
    return Math.max(
        $(document).height(),
        $(window).height(),
        /* For opera: */
        document.documentElement.clientHeight
    );
};

function viewportHeight() {
    return "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
}






