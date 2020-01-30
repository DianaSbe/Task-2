$(document).ready( function() {
  $('.datepicker-here').datepicker({
    navTitles : {
        days: 'MM <i>yyyy</i>'
    },
    nextHtml: '<i class="material-icons" style="color:#BC9CFF;">arrow_forward</i>',
    prevHtml: '<i class="material-icons" style="color:#BC9CFF;">arrow_back</i>',
    onSelect: function (fd, d, picker) {
        $(this).val(fd.split("-")[0]);
        $('.datepicker-end').val(fd.split("-")[1]);
        //$('.date-dropdown').find('.datepicker-end').val(fd.split("-")[1]);
    },
    onShow(inst, animationCompleted) {
        if (!animationCompleted) {
          if (!inst.$datepicker.find('.datepicker--buttons .datepicker--button-apply').length) {
            $('<span class="datepicker--button datepicker--button-apply">Применить</span>').on('click', function (e) {
              e.stopPropagation();
              inst.hide();
            }).appendTo(inst.$datepicker.find('.datepicker--buttons'));
          }
        }
      }
    });
    $('#calendar').datepicker().data('datepicker').selectDate([new Date(2020, 0, 19), new Date(2020, 0, 23)]);
    //$('.datepicker-end').val("20012020");
});