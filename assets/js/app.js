//---------------------------------------------------------------------------
// Firebase Config 
//---------------------------------------------------------------------------

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

  var database = firebase(database);

//---------------------------------------------------------------------------
// Firebase Authentication Config with UI
//---------------------------------------------------------------------------

var uiConfig = {
    signInSuccessUrl: 'https://bryan-lee-git.github.io/group-project/index.html',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      //firebase.auth.PhoneAuthProvider.PROVIDER_ID,
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

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);


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

        $("#user").text(user.displayName);
        $("#user-button").hide();
        $("#menu").show();
        $(".user-tabs").show();
        $("#logout").on("click", function(){
            user.signout();
        })
       
      } else {
        // User is signed out.
        $("#user").hide();
        $("#user-button").show();
        $("#menu").hide();
        $(".user-tabs").hide();
        $("#user-button", "#carousel-row").on("click", function(){
            initApp();
         });
      }
    }, function(error) {
      console.log(error);
    });
  };

  window.addEventListener('load', function() {
    initApp()
  });


//----------------------------------------------------------------------------------------
// Tabs Click Display/Hide Functionality
//----------------------------------------------------------------------------------------

//hide all tab areas until called upon
$("#tabs-tab").hide();
$("#videos-tab").hide();
$("#tuner-tab").hide();
$("#metronome-tab").hide();
$("#about-tab").hide();


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

// home button
$("#home-button, .brand-logo").on("click", function(event) {
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
})

// tabs tab button
$("#tab-for-tabs, #tab-carousel-btn, #tab-dropdown").on("click", function(event){
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
})

// videos tab button
$("#tab-for-play, #videos-carousel-btn, #videos-dropdown").on("click", function(event){
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
})

// tuner tab button
$("#tab-for-tuner, #tuner-carousel-btn, #tuner-dropdown").on("click", function(event){
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
    initializeTuner();
})

// metronome tab button
$("#tab-for-metronome, #metronome-carousel-btn, #metronome-dropdown").on("click", function(event){
    $(window).scrollTop(500);
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
})

// about us dropdown button
$("#about-dropdown").on("click", function(event){
    $(window).scrollTop(0);
    $("#home-tab").hide();
    $("#about-tab").slideToggle(1000);
    $("#tuner-tab").hide();
    $("#metronome-tab").hide();
    $("#tabs-tab").hide();
    $("#videos-tab").hide();
})

//----------------------------------------------------------------------------------------
// MATERIALIZE FUNCTIONALITY
//----------------------------------------------------------------------------------------

 // carousel functionality (Google Materialize)

 $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
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

// when the mouse leaves the dropdown navigation menu area, fade it out of view
$("#dropdown1").on("mouseleave", function(event) {
    $("#dropdown1").fadeOut(500);
})

// when the dropdown icon or any dropdown menu item is clicked on, hide the dropdown menu
$(".dropdown-trigger, #tab-dropdown, #videos-dropdown, #tuner-dropdown, #metronome-dropdown").on("click", function(event) {
    event.preventDefault();
    $("#dropdown1").fadeToggle(500);
})