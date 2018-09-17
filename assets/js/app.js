//----------------------------------------------------------------------------------------
// Tabs Click Display/Hide Functionality
//----------------------------------------------------------------------------------------

//hide all tab areas until called upon
$("#tabs-tab").hide();
$("#videos-tab").hide();
$("#tuner-tab").hide();
$("#metronome-tab").hide();

// home button
$("#home-button, .brand-logo").on("click", function(event) {
    $("#home-tab").slideDown(1000);
    $("#tabs-tab").hide();
    $("#videos-tab").hide();
    $("#tuner-tab").hide();
    $("#metronome-tab").hide();
})

// tabs tab button
$("#tab-for-tabs, #tab-carousel-btn, #tab-dropdown").on("click", function(event){
    $("#home-tab").hide();
    $("#tabs-tab").slideToggle(1000);
    $("#videos-tab").hide();
    $("#tuner-tab").hide();
    $("#metronome-tab").hide();
})

// videos tab button
$("#tab-for-play, #videos-carousel-btn, #videos-dropdown").on("click", function(event){
    $("#home-tab").hide();
    $("#videos-tab").slideToggle(1000);
    $("#tabs-tab").hide();
    $("#tuner-tab").hide();
    $("#metronome-tab").hide();
})

// tuner tab button
$("#tab-for-tuner, #tuner-carousel-btn, #tuner-dropdown").on("click", function(event){
    $("#home-tab").hide();
    $("#tuner-tab").slideToggle(1000);
    $("#metronome-tab").hide();
    $("#tabs-tab").hide();
    $("#videos-tab").hide();
})

// metronome tab button
$("#tab-for-metronome, #metronome-carousel-btn, #metronome-dropdown").on("click", function(event){
    $("#home-tab").hide();
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

$(document).ready(function(){
    // nav bar dropdown (Google Materialize)
    $('.dropdown-trigger').dropdown({hover: true});
    // floating buttons
    $('.fixed-action-btn').floatingActionButton();
    // collapsible initialization
    $('.collapsible').collapsible();
    // tabs initialization
    $('.tabs').tabs();
});

$("#dropdown1").on("mouseleave", function(event) {
    $("#dropdown1").fadeOut(500);
})

$(".dropdown-trigger, #tab-dropdown, #videos-dropdown, #tuner-dropdown, #metronome-dropdown").on("click", function(event) {
    event.preventDefault();
    $("#dropdown1").fadeToggle(500);
})