jQuery(document).ready( function($) {
  $('.checkbox__arrow').click(function() {
    $(this).parent('.checkbox__name').parent('.checkbox').find('.checkbox__list')[0].classList.toggle('checkbox__list_nonexpanded');
    var icon = $(this).find('.material-icons');
    (icon[0].innerHTML == "keyboard_arrow_down") ? icon[0].innerHTML = "keyboard_arrow_up" : icon[0].innerHTML = "keyboard_arrow_down";
  })
});