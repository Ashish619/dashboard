$(document).on("click", "#menu_toggle", function () {

    if ($('body').hasClass('nav-md')) {
        $('#sidebar-menu').find('li.active-sm ul').show();
        $('#sidebar-menu').find('li.active-sm').addClass('active').removeClass('active-sm');
    } else {
        $('#sidebar-menu').find('li.active ul').hide();
        $('#sidebar-menu').find('li.active').addClass('active-sm').removeClass('active');
    }

    $('body').toggleClass('nav-md nav-sm');

    $('.dataTable').each(function () { $(this).dataTable().fnDraw(); });
});
