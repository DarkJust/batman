$(document).ready(function () {
    let tabsItem = $('.tabs-item');

    tabsItem.on ('click', function(event){
        event.preventDefault ();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass ('visible');
        $(activeContent).toggleClass ('visible');
        $('.tabs-item-activ').toggleClass ('tabs-item-activ');
        $(this).toggleClass ('tabs-item-activ');
    });
});