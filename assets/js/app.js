//----------------------------------------------------------------------------------------
// Tabs Click Display/Hide Functionality
//----------------------------------------------------------------------------------------

// first hide all areas until called upon
$("#firebaseui-auth-container").hide(0);
$("#tabs-tab").hide();
$("#videos-tab").hide();
$("#tuner-tab").hide();
$("#metronome-tab").hide();
$("#about-tab").hide();
$("#credit-tab").hide();

// home button
$("#home-button, .brand-logo").on("click", function() {
    $(window).scrollTop(0);
    $("#home-tab").slideDown(1000);
    $("#tabs-tab").hide();
    $("#videos-tab").hide();
    $("#tuner-tab").hide();
    $("#metronome-tab").hide();
    $("#tab-for-tabs").removeClass("tab-active");
    $("#tab-for-play").removeClass("tab-active");
    $("#tab-for-tuner").removeClass("tab-active");
    $("#tab-for-metronome").removeClass("tab-active");
    $("#about-tab").hide();
    $("#credit-tab").hide();
})

// tabs tab button
$("#tab-for-tabs, #tab-carousel-btn, #tab-dropdown").on("click", function(){
    $(window).scrollTop(0);
    $("#home-tab").hide();
    $("#tabs-tab").slideToggle(1000);
    $("#videos-tab").hide();
    $("#tuner-tab").hide();
    $("#metronome-tab").hide();
    $("#tab-for-tabs").addClass("tab-active");
    $("#tab-for-play").removeClass("tab-active");
    $("#tab-for-tuner").removeClass("tab-active");
    $("#tab-for-metronome").removeClass("tab-active");
    $("#about-tab").hide();
    $("#credit-tab").hide();
})

// videos tab button
$("#tab-for-play, #videos-carousel-btn, #videos-dropdown").on("click", function(){
    $(window).scrollTop(0);
    $("#home-tab").hide();
    $("#videos-tab").slideToggle(1000);
    $("#tabs-tab").hide();
    $("#tuner-tab").hide();
    $("#metronome-tab").hide();
    $("#tab-for-tabs").removeClass("tab-active");
    $("#tab-for-play").addClass("tab-active");
    $("#tab-for-tuner").removeClass("tab-active");
    $("#tab-for-metronome").removeClass("tab-active");
    $("#about-tab").hide();
    $("#credit-tab").hide();
})

// tuner tab button
$("#tab-for-tuner, #tuner-carousel-btn, #tuner-dropdown").on("click", function(){
    $(window).scrollTop(0);
    $("#home-tab").hide();
    $("#tuner-tab").slideToggle(1000);
    $("#metronome-tab").hide();
    $("#tabs-tab").hide();
    $("#videos-tab").hide();
    $("#tab-for-tabs").removeClass("tab-active");
    $("#tab-for-play").removeClass("tab-active");
    $("#tab-for-tuner").addClass("tab-active");
    $("#tab-for-metronome").removeClass("tab-active");
    $("#about-tab").hide();
    $("#credit-tab").hide();
    initializeTuner();
})

// metronome tab button
$("#tab-for-metronome, #metronome-carousel-btn, #metronome-dropdown").on("click", function(){
    $(window).scrollTop(0);
    $("#home-tab").hide();
    $("#metronome-tab").slideToggle(1000);
    $("#tabs-tab").hide();
    $("#videos-tab").hide();
    $("#tuner-tab").hide();
    $("#tab-for-tabs").removeClass("tab-active");
    $("#tab-for-play").removeClass("tab-active");
    $("#tab-for-tuner").removeClass("tab-active");
    $("#tab-for-metronome").addClass("tab-active");
    $("#about-tab").hide();
    $("#credit-tab").hide();
})

// about us dropdown button
$("#about-dropdown").on("click", function(){
    $(window).scrollTop(0);
    $("#home-tab").hide();
    $("#about-tab").slideToggle(1000);
    $("#tuner-tab").hide();
    $("#metronome-tab").hide();
    $("#tabs-tab").hide();
    $("#videos-tab").hide();
    $("#credit-tab").hide();
})

//credit dropdown button
$("#credit-dropdown").on("click", function(){
    $(window).scrollTop(0);
    $("#home-tab").hide();
    $("#credit-tab").slideToggle(1000);
    $("#about-tab").hide();
    $("#tuner-tab").hide();
    $("#metronome-tab").hide();
    $("#tabs-tab").hide();
    $("#videos-tab").hide();
})

// when the mouse leaves the dropdown navigation menu area, fade it out of view
$("#dropdown1").on("mouseleave", function() {
    $("#dropdown1").fadeOut(200);
})

// hide the menus whenever the mouse is over the body (which means the mouse has left the dropdown content)
$("#main-container").on("mouseover", function() {
    $("#dropdown1, #user-dropdown").fadeOut(200);
})

// content dropdown on content icon mouseover
$("#content-button").on("mouseover", function() {
    $("#user-dropdown").fadeOut(200);
})

// when the mouse leaves the dropdown navigation menu area, fade it out of view
$("#user-dropdown").on("mouseleave", function() {
    $("#user-dropdown").fadeOut(200);
})

// user dropdown on icon mouseover
$("#user-button").on("mouseover", function() {
    $("#dropdown1").fadeOut(200);
})

// when the dropdown icon or any dropdown menu item is clicked on, hide the dropdown menu
$("#tab-dropdown, #videos-dropdown, #tuner-dropdown, #metronome-dropdown").on("click", function() {
    event.preventDefault();
    $("#dropdown1").fadeToggle(200);
})

// content dropdown menu for mobile
$("#content-button").on("touchstart", function() {
    $("#dropdown1").fadeToggle(200);
})

// user dropdown menu for mobile
$("#user-button").on("touchstart", function() {
    $("#user-dropdown").fadeToggle(200);
})

//----------------------------------------------------------------------------------------
// MATERIALIZE FUNCTIONALITY
//----------------------------------------------------------------------------------------

// carousel functionality (Google Materialize)
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

// animate the carousel
function cycle() {
    var timer = setInterval(advance, 4000);
    function advance() {
        $('.carousel').carousel('next');
    }
}; cycle();

// move next carousel
$('.moveNextCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
});

// move prev carousel
$('.movePrevCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
});

// run materialize functions for site styling functionality.
$(document).ready(function(){
    // nav bar dropdown (Google Materialize)
    $('.dropdown-trigger').dropdown({hover: true});
    // floating buttons
    $('.fixed-action-btn').floatingActionButton();
    // collapsible initialization
    $('.collapsible').collapsible();
    // tabs initialization, mobile swipe
});

//---------------------------------------------------------------------------
// Firebase Config 
//---------------------------------------------------------------------------

var config = {
    apiKey: "AIzaSyDF16YKI3mYgmTkUOQ09dANHOIVjMsFcJk",
    authDomain: "group-project-1-3b1fb.firebaseapp.com",
    databaseURL: "https://group-project-1-3b1fb.firebaseio.com",
    projectId: "group-project-1-3b1fb",
    storageBucket: "group-project-1-3b1fb.appspot.com",
    messagingSenderId: "502946428711"
};
  
firebase.initializeApp(config);
var database = firebase.database();

//---------------------------------------------------------------------------
// Firebase Authentication Config with UI
//---------------------------------------------------------------------------

initApp = function() {

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var uid = user.uid;
        var phoneNumber = user.phoneNumber;
        var providerData = user.providerData;

        $("#user").text(displayName);
       
       
      } else {
        // User is signed out.
       
        window.location.assign('landing.html')
      }
    }, function(error) {
      console.log(error);
    });
};

window.addEventListener('load', function() {
    initApp()
});

$("#logout").on("click", function(){
    firebase.auth().signOut();
})