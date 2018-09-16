//----------------------------------------------------------------------------------------
// MATERIALIZE FUNCTIONALITY
//----------------------------------------------------------------------------------------

 // carousel functionality (Google Materialize)

 $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

$(document).ready(function(){
    $('select').material_select();
    // nav bar dropdown (Google Materialize)
    $(".dropdown-trigger").dropdown({hover: true});
    // floating buttons
    $('.fixed-action-btn').floatingActionButton();
    // collapsible initialization
    $('.collapsible').collapsible();
    // tabs initialization
    $('.tabs').tabs();
});

//----------------------------------------------------------------------------------------
// Tabs Click Dispaly/Hide Functionality
//----------------------------------------------------------------------------------------

//hide all tab areas until called upon
$("#tabs-tab").hide();
$("#videos-tab").hide();
$("#tuner-tab").hide();
$("#metronome-tab").hide();

// home button
$("#home-button").on("click", function(event) {
    $("#home-tab").slideDown(1000);
    $("#tabs-tab").hide();
    $("#videos-tab").hide();
    $("#tuner-tab").hide();
    $("#metronome-tab").hide();
})

// tabs tab button
$("#tab-for-tabs, #tab-carousel-btn").on("click", function(event){
    $("#home-tab").hide();
    $("#tabs-tab").slideToggle(1000);
    $("#videos-tab").hide();
    $("#tuner-tab").hide();
    $("#metronome-tab").hide();
})

// videos tab button
$("#tab-for-play, #videos-carousel-btn").on("click", function(event){
    $("#home-tab").hide();
    $("#videos-tab").slideToggle(1000);
    $("#tabs-tab").hide();
    $("#tuner-tab").hide();
    $("#metronome-tab").hide();
})

// tuner tab button
$("#tab-for-tuner, #tuner-carousel-btn").on("click", function(event){
    $("#home-tab").hide();
    $("#tuner-tab").slideToggle(1000);
    $("#metronome-tab").hide();
    $("#tabs-tab").hide();
    $("#videos-tab").hide();
})

// metronome tab button
$("#tab-for-metronome, #metronome-carousel-btn").on("click", function(event){
    $("#home-tab").hide();
    $("#metronome-tab").slideToggle(1000);
    $("#tabs-tab").hide();
    $("#videos-tab").hide();
    $("#tuner-tab").hide();
})