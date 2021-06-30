$(function () {
    // $(".navigatoin .title").text("JQuery");
    hideMenu();

    $(".item-sidemenu").on("click", toggleMenu);
    $(".item-sidemenu").on("mouseleave", function () {

    });

    function toggleMenu() {
        $(".item").toggle(300);
        $(".item-sidemenu li a").toggleClass("check");
        // $(".item-back").toggle(200);
    }

    function hideMenu() {
        $(".item").hide();
        // $(".item-back").hide();
    }

    $(".item").on("click", function () {
        let str = $(this).text();
        $(".item-sidemenu a").text(str);
        hideMenu();
    });

    $(".item-back").on("click", function () {
        $(".item-sidemenu a").text("Меню");
        hideMenu();
    });
});


