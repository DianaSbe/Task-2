jQuery(document).ready( function($) {
    $('.slider-range').slider({
      range: true,
      min: 0,
      max: 15700,
      values: [ 5000, 10000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ].toLocaleString() + "₽ - " + ui.values[ 1 ].toLocaleString() + "₽");
      }
    });
    $( "#amount" ).val( $( ".slider-range" ).slider( "values", 0 ).toLocaleString() +
      "₽ - " + $( ".slider-range" ).slider( "values", 1 ).toLocaleString() + "₽");
  } );