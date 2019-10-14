$(document).ready( function() {
    $('.paginator').pagination({
        items: 180,
        itemsOnPage: 12,
        //cssStyle: 'light-theme',
        displayedPages: 3,
        edges: 1,
        prevText: '',
        nextText: ' '
    });
} );