// datepicker, input date
$( function() {
$( "#datepicker" ).datepicker();
} );

$( function() {
   	$("#profession").selectmenu();
});

// { icons:{ button:"ui-icon-caret-1-s" } }

// $( function() {
//     $( "#slider" ).slider();
//   } );


$('#slider').slick({
	arrows: false,
	vertical: true,
	verticalSwiping: true,
	dots: true
});