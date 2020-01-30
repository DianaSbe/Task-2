jQuery(document).ready( function($) {

    function f(count, word_forms) {
        if ([11, 12, 13, 14].includes(count % 100)) {
            return word_forms[2];
        } else if ((count % 10) == 1) {
            return word_forms[0];
        } else if ([2, 3, 4].includes(count % 10)) {
            return word_forms[1];
        } else {
            return word_forms[2];
        }
    }

    //показать/скрыть дропдаун + измена иконки
    $('.dropdown__icon').click(function() {
        $(this).parent('.dropdown__inner').parent('.dropdown').children('.dropdown__ul')[0].classList.toggle('dropdown__ul_expanded');
        $(this).parent('.dropdown__inner').parent('.dropdown').children('.dropdown__inner').children('.dropdown__input')[0].classList.toggle('dropdown__input_expanded');
    })
    //кнопка +
    $('.dropdown__addbutton').click(function() {
        var counter = $(this).parent('.dropdown__li').children('.dropdown__counter');
        counter[0].innerHTML = parseInt(counter[0].innerHTML) + 1;
        if (counter[0].innerHTML > "0")
          $(this).parent('.dropdown__li').children('.dropdown__subtractbutton')[0].classList.remove('dropdown__subtractbutton_inactive');
        $(this).parent('.dropdown__li').parent('.dropdown__ul').children('.dropdown__clearbutton')[0].classList.add('dropdown__clearbutton_active');
    })
    //кнопка -
    $('.dropdown__subtractbutton').click(function() {
        var counter = $(this).parent('.dropdown__li').children('.dropdown__counter');
        if (counter[0].innerHTML != "0")
        {
          counter[0].innerHTML = parseInt(counter[0].innerHTML) - 1;
          if (counter[0].innerHTML == "0")
            $(this)[0].classList.add('dropdown__subtractbutton_inactive');
        }
    })
    //кнопка "принять" для дропдауна с гостями
    $('.dropdown__applybutton').click(function() {
        var counter = $(this).parent('.dropdown__ul').children('.dropdown__li').children('.dropdown__counter');
        var name = $(this).parent('.dropdown__ul').children('.dropdown__li').children('.dropdown__item');
        var result = $(this).parent('.dropdown__ul').parent('.dropdown').children('.dropdown__inner').children('.dropdown__input');
        var guests = 0;
        var babies = 0;
        for (var i = 0; i < counter.length; i++) {
            if (name[i].innerHTML == "Младенцы")
              babies = parseInt(counter[i].innerHTML);
            else
              guests += parseInt(counter[i].innerHTML);
        }
        result[0].value = "";
        if (guests !=0) {
          result[0].value = guests + " " + f(guests, ['гость', 'гостя', 'гостей']);
          if (babies !=0) result[0].value += ", ";
        }
        if (babies !=0)
          result[0].value += babies + " " + f(babies, ['младенец', 'младенца', 'младенцев']);
    })
    //кнопка "очистить" для дропдауна с гостями
    $('.dropdown__clearbutton').click(function() {
        var counter = $(this).parent('.dropdown__ul').children('.dropdown__li').children('.dropdown__counter');
        var button = $(this).parent('.dropdown__ul').children('.dropdown__li').children('.dropdown__subtractbutton');
        var result = $(this).parent('.dropdown__ul').parent('.dropdown').children('.dropdown__inner').children('.dropdown__input');
        for (var i = 0; i < counter.length; i++) {
            counter[i].innerHTML = 0;
            button[i].classList.add('dropdown__subtractbutton_inactive');
        }
        result[0].value = "";
        result[0].placeholder = "Сколько гостей";
        $(this)[0].classList.remove('dropdown__clearbutton_active');
    })
    //получение результата для комнат и мебели
    $('.dropdown__ul_type_rooms').click(function() {
        var counter = $(this).children('.dropdown__li').children('.dropdown__counter');
        var name = $(this).children('.dropdown__li').children('.dropdown__item');
        var result = $(this).parent('.dropdown').children('.dropdown__inner').children('.dropdown__input').css("text-transform", "lowercase");
        //избавляемся от нулевых элементов
        let result_counter = new Array();
        let result_name = new Array();
        var j=0;
        for (var i = 0; i < counter.length; i++) {
            if (counter[i].innerHTML != "0") {
                result_counter[j] = counter[i];
                result_name[j] = name[i];
                j++;
            }
        }
        //склоняем по падежам наименования
        for (var i = 0; i < result_counter.length; i++) {
            if (result_name[i].innerHTML == "Кровати")
              result_name[i] = f(parseInt(result_counter[i].innerHTML), ['Кровать', 'Кровати', 'Кроватей']);
            else if (result_name[i].innerHTML == "Спальни")
              result_name[i] = f(parseInt(result_counter[i].innerHTML), ['Спальня', 'Спальни', 'Спален']);
            else
              result_name[i] = f(parseInt(result_counter[i].innerHTML), ['Ванная комната', 'Ванные комнаты', 'Ванных комнат']);
        }
        //собираем результат
        result[0].value = "";
        for (var i = 0; i < result_counter.length; i++) {
              result[0].value += result_counter[i].innerHTML + " " + result_name[i];
              if (i != result_counter.length-1)
                result[0].value += ", ";
        }
    }) 
  });