$(function () {
    $("span").after('<div id="mySidenav" class="sidenav">' +
            '<a href="javascript:void(0)" class="closebtn">&times;</a>' +
            '<img id="slideMenuLogo" src="images/Screens Bs/2/PSUSymbol.png" />' +
            '<p class="par-menu"><a href="about.html">About</a></p>' +
            '<p class="par-menu"><a href="#">Log out</a></p>' +
        '</div>' +
        '<span class="openSlideMenu"></span>');

    /* Set the width of the side navigation to 250px */
    $(document).on('click', '.openSlideMenu', function () {
        $("#mySidenav").addClass("showSlideMenu");

    });

    /* Set the width of the side navigation to 0 */
    $(document).on('click', '.closebtn', function () {
        $("#mySidenav").removeClass("showSlideMenu");
    });

});