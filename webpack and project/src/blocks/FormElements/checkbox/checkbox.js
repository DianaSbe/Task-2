jQuery(document).ready( function($) {
  $('.checkbox__arrow').click(function() {
    $(this).parent('.checkbox__name').parent('.checkbox').children('.checkbox__list')[0].classList.toggle('checkbox__list_nonexpanded');
    var icon = $(this).parent('.checkbox__name').children('.checkbox__arrow').children('.icon').children('.material-icons');
    (icon[0].innerHTML == "keyboard_arrow_down") ? icon[0].innerHTML = "keyboard_arrow_up" : icon[0].innerHTML = "keyboard_arrow_down";
  })
});
      
      //function visibl323e() {
        //var els = document.getElementsByClassName("checkbox__list");
          //for (var i = 0; i < els.length; i++) {
            //this[i].classList.toggle("checkbox__list_nonexpanded");
          //}
          //el.classList.toggle("checkbox__list_nonexpanded");
        //}