//----------------------------------------------------------------------------------------
// MATERIALIZE FUNCTIONALITY
//----------------------------------------------------------------------------------------

// first hide the auth area until called upon
$(".firebase-auth").hide();

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
            //dynamicBullets: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
    })
});

// when the mouse leaves the dropdown navigation menu area, fade it out of view
$("#dropdown1").on("mouseleave", function() {
  $("#dropdown1").fadeOut(200);
})

// toggle user log-in on nav button click or slider button click
$("#user-button, #metronome-carousel-btn, #tuner-carousel-btn, #tab-carousel-btn, #videos-carousel-btn").on("click", function(event){
  event.preventDefault();
  $(".firebase-auth").fadeToggle(500);
  $("#home-tab").fadeToggle(500);
});

//----------------------------------------------------------------------------------------
// FIREBASE INITIALIZATION FOR LANDING PAGE
//----------------------------------------------------------------------------------------
  
// initialize Firebase
var config = {
  apiKey: "AIzaSyA7JCfzX0k3UcXiQh195gMsVhGChW_xHu0",
  authDomain: "fir-test-6bb17.firebaseapp.com",
  databaseURL: "https://fir-test-6bb17.firebaseio.com",
  projectId: "fir-test-6bb17",
  storageBucket: "fir-test-6bb17.appspot.com",
  messagingSenderId: "250844724426"
}; firebase.initializeApp(config);

// Firebase UI config
var uiConfig = {

  signInSuccessUrl: 'index.html',
  signInOptions: [

    // Leave the lines as is for the providers you want to offer your users.

    firebase.auth.GoogleAuthProvider.PROVIDER_ID,

    //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //firebase.auth.GithubAuthProvider.PROVIDER_ID,

    firebase.auth.EmailAuthProvider.PROVIDER_ID,

    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
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

// initialize the FirebaseUI Widget using Firebase
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// start method will wait until the DOM is loaded
ui.start('#firebaseui-auth-container', uiConfig);