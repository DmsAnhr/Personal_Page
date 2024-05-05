var scrollPos = 0;
var scrollCount = 0;
var timeout = null;
var pageOffsets = [];

$( document ).ready(function() {
    $(window).scrollTop(0);

    $('.page[id!=page45]').each(function(){
        var offset = $(this).offset().top;
        var sectionId = $(this).attr('id');
        console.log("Section " + sectionId + " : " + offset);
        pageOffsets.push(offset);
    });

    console.log(pageOffsets);


    $('.fixed a').on('click', function() {
        var index = $(this).index();
        var targetOffset = pageOffsets[index];
        scrollPos = index;
        $('html, body').animate({
            scrollTop: targetOffset
        }, 100);
    });

    $(window).on('wheel', function(event) {
        if (event.originalEvent.deltaY > 0) { 
            // scroll ke bawah
            scrollCount++;
            if (scrollCount === 1) {
                console.log('bawah');
                scrollPos ++;
                var targetOffset = pageOffsets[scrollPos];
                $('html, body').animate({
                    scrollTop: targetOffset
                }, 100);
            }
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                scrollCount = 0;
            }, 500);
        } else { 
            // scroll ke atas
            scrollCount++;
            if (scrollCount === 1) {
                console.log('atas');
                scrollPos--;
                var targetOffset = pageOffsets[scrollPos];
                $('html, body').animate({
                    scrollTop: targetOffset
                }, 100);
            }
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                scrollCount = 0;
            }, 500);
        }
    });


});
