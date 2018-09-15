//----------------------------------------------------------------------------------------
// MATERIALIZE FUNCTIONALITY
//----------------------------------------------------------------------------------------

 // carousel functionality (Google Materialize)

 $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

// nav bar dropdown (Google Materialize)

$(".dropdown-trigger").dropdown({hover: true});

// tabs initialization

$(document).ready(function(){
    $('.tabs').tabs();
});

// floating buttons
$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });

// collapsible initialization
$(document).ready(function(){
$('.collapsible').collapsible();
});