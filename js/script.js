
$( document ).ready(function() {
    $(window).scrollTop(0);
    
    // var position = $(window).scrollTop();
    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();
    //     if(scroll > position) {
    //         console.log('scrollDown');
    //     } else {
    //         console.log('scrollUp');
    //     }
    //     position = scroll;
    // });

    $(window).on('mousewheel DOMMouseScroll', function(e) {
        var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;

        // Jika mouse wheel digerakkan ke atas
        if (delta > 0) {
            // Lakukan sesuatu saat mouse wheel digerakkan ke atas
            console.log('Mouse wheel digerakkan ke atas');
        }
        // Jika mouse wheel digerakkan ke bawah
        else {
            // Lakukan sesuatu saat mouse wheel digerakkan ke bawah
            console.log('Mouse wheel digerakkan ke bawah');
        }
    });
});
