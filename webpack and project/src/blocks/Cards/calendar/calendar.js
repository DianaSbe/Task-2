$(document).ready( function() {
    $('.datepicker-here').datepicker({
        navTitles : {
            days: 'MM <i>yyyy</i>'
        },
        nextHtml: '<i class="material-icons" style="color:#BC9CFF;">arrow_forward</i>',
        prevHtml: '<i class="material-icons" style="color:#BC9CFF;">arrow_back</i>'
    });
});