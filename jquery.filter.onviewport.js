(function( $ ) {
 
    $.expr.filters.onviewport = function(el) {
        var viewportWidth = $(window).width(),
            viewportHeight = $(window).height(),
    
            documentScrollTop = $(document).scrollTop(),
            documentScrollLeft = $(document).scrollLeft(),
    
            minTop = documentScrollTop,
            maxTop = documentScrollTop + viewportHeight,
            minLeft = documentScrollLeft,
            maxLeft = documentScrollLeft + viewportWidth,
    
            $myElement = $(el),
            elementOffset = $myElement.offset(),
            elementWidth = $myElement.width(),
            elementHeight = $myElement.height();
    
        return (
            (elementOffset.top+elementHeight > minTop && elementOffset.top < maxTop) &&
            (elementOffset.left+elementWidth > minLeft &&elementOffset.left < maxLeft)
        );
    }
 
}( jQuery ));
