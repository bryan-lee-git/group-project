// At Beginning...

$("#tabs-tab").hide();
$("#videos-tab").hide();
$("#tuner-tab").hide();
$("#metronome-tab").hide();

$("#tab-for-tabs").on("click", function(event){
    $("#header").fadeOut(300);
    $("#carouselRow").fadeOut(300);
    $("#tabs-tab").slideToggle(1000);
    $("#videos-tab").hide();
    $("#tuner-tab").hide();
    $("#metronome-tab").hide();
})

$("#tab-for-play").on("click", function(event){
    $("#header").fadeOut(300);
    $("#carouselRow").fadeOut(300);
    $("#videos-tab").slideToggle(1000);
    $("#tabs-tab").hide();
    $("#tuner-tab").hide();
    $("#metronome-tab").hide();
})

$("#tab-for-tuner").on("click", function(event){
    $("#header").fadeOut(300);
    $("#carouselRow").fadeOut(300);
    $("#tuner-tab").slideToggle(1000);
    $("#metronome-tab").hide();
    $("#tabs-tab").hide();
    $("#videos-tab").hide();
})

$("#tab-for-metronome").on("click", function(event){
    $("#header").fadeOut(300);
    $("#carouselRow").fadeOut(300);
    $("#metronome-tab").slideToggle(1000);
    $("#tabs-tab").hide();
    $("#videos-tab").hide();
    $("#tuner-tab").hide();
})

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