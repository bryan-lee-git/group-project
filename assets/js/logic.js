//----------------------------------------------------------------------------------------
// MATERIALIZE FUNCTIONALITY
//----------------------------------------------------------------------------------------

 // carousel functionality (Swiper)

 $(document).ready(function () {
  //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters include horizontal scrolling, looping, nav arrows, pagination with dynamic bullets, and autoplay
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
    })
  });

//  $('.carousel.carousel-slider').carousel({
//   fullWidth: true,
//   indicators: true
// });
// /Animate the carousel

// function cycle() {
//   var timer = setInterval(advance, 4000);
//   function advance() {
//       $('.carousel').carousel('next');
//   }
// };

// cycle();

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



// when the mouse leaves the dropdown navigation menu area, fade it out of view

$("#dropdown1").on("mouseleave", function(event) {
  $("#dropdown1").fadeOut(200);
})

// when the dropdown icon or any dropdown menu item is clicked on, hide the dropdown menu
$(".dropdown-trigger, #tab-dropdown, #videos-dropdown, #tuner-dropdown, #metronome-dropdown").on("click", function() {
  event.preventDefault();
  $("#dropdown1").fadeToggle(200);
})

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
  
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});
  
  
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDF16YKI3mYgmTkUOQ09dANHOIVjMsFcJk",
  authDomain: "group-project-1-3b1fb.firebaseapp.com",
  databaseURL: "https://group-project-1-3b1fb.firebaseio.com",
  projectId: "group-project-1-3b1fb",
  storageBucket: "group-project-1-3b1fb.appspot.com",
  messagingSenderId: "502946428711"
};

firebase.initializeApp(config);
$(".firebase-auth").hide();

// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: 'index.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    //firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: '<your-tos-url>',
  // Privacy policy url/callback.
  privacyPolicyUrl: function() {
    window.location.assign('<your-privacy-policy-url>');
  }
};

$("#user-button, .carousel-slider").on("click", function(){
  $(".firebase-auth").fadeToggle(500);
  $("#home-tab").fadeToggle(500);
});

$(".carousel-slider").on("click", function(){
    $(".firebase-auth").show();
  });

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

//The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
          
       
   