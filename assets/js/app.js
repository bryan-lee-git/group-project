//----------------------------------------------------------------------------------------
// Tabs Click Display/Hide Functionality
//----------------------------------------------------------------------------------------

//hide all tab areas until called upon
$(document).ready(function() {
    $("#tabs-tab").hide();
    $("#videos-tab").hide();
    $("#tuner-tab").hide();
    $("#metronome-tab").hide();
    $("#favorites-tab").hide();
    $("#about-tab").hide();
});

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
$("#home-button, .brand-logo").on("click", function() {
    $(window).scrollTop(0);
    $("#home-tab").slideDown(1000);
    $("#tabs-tab").hide();
    $("#videos-tab").hide();
    $("#tuner-tab").hide();
    $("#metronome-tab").hide();
    $("#favorites-tab").hide();
    $("#tab-for-tabs").removeClass("tab-active");
    $("#tab-for-play").removeClass("tab-active");
    $("#tab-for-tuner").removeClass("tab-active");
    $("#tab-for-metronome").removeClass("tab-active");
    $("#tab-for-favorites").removeClass("tab-active");
    $("#about-tab").hide();
})

// tabs tab button
$("#tab-for-tabs, #tab-carousel-btn, #tab-dropdown").on("click", function(){
    $(window).scrollTop(0);
    $("#home-tab").hide();
    $("#tabs-tab").slideToggle(1000);
    $("#videos-tab").hide();
    $("#tuner-tab").hide();
    $("#metronome-tab").hide();
    $("#favorites-tab").hide();
    $("#tab-for-tabs").addClass("tab-active");
    $("#tab-for-play").removeClass("tab-active");
    $("#tab-for-tuner").removeClass("tab-active");
    $("#tab-for-metronome").removeClass("tab-active");
    $("#tab-for-favorites").removeClass("tab-active");
    $("#about-tab").hide();
})

// videos tab button
$("#tab-for-play, #videos-carousel-btn, #videos-dropdown").on("click", function(){
    $(window).scrollTop(0);
    $("#home-tab").hide();
    $("#videos-tab").slideToggle(1000);
    $("#tabs-tab").hide();
    $("#tuner-tab").hide();
    $("#metronome-tab").hide();
    $("#favorites-tab").hide();
    $("#tab-for-tabs").removeClass("tab-active");
    $("#tab-for-play").addClass("tab-active");
    $("#tab-for-tuner").removeClass("tab-active");
    $("#tab-for-metronome").removeClass("tab-active");
    $("#tab-for-favorites").removeClass("tab-active");
    $("#about-tab").hide();
})

// tuner tab button
$("#tab-for-tuner, #tuner-carousel-btn, #tuner-dropdown").on("click", function(){
    $(window).scrollTop(0);
    $("#home-tab").hide();
    $("#tuner-tab").slideToggle(1000);
    $("#metronome-tab").hide();
    $("#tabs-tab").hide();
    $("#videos-tab").hide();
    $("#favorites-tab").hide();
    $("#tab-for-tabs").removeClass("tab-active");
    $("#tab-for-play").removeClass("tab-active");
    $("#tab-for-tuner").addClass("tab-active");
    $("#tab-for-metronome").removeClass("tab-active");
    $("#tab-for-favorites").removeClass("tab-active");
    $("#about-tab").hide();
    initializeTuner();
})

// metronome tab button
$("#tab-for-metronome, #metronome-carousel-btn, #metronome-dropdown").on("click", function(){
    $(window).scrollTop(500);
    $("#home-tab").hide();
    $("#metronome-tab").slideToggle(1000);
    $("#tabs-tab").hide();
    $("#videos-tab").hide();
    $("#tuner-tab").hide();
    $("#favorites-tab").hide();
    $("#tab-for-tabs").removeClass("tab-active");
    $("#tab-for-play").removeClass("tab-active");
    $("#tab-for-tuner").removeClass("tab-active");
    $("#tab-for-metronome").addClass("tab-active");
    $("#tab-for-favorites").removeClass("tab-active");
    $("#about-tab").hide();
})

// favorites tab button
$("#tab-for-favorites, #favorites-carousel-btn, #favorites-dropdown").on("click", function(){
    $(window).scrollTop(500);
    $("#home-tab").hide();
    $("#metronome-tab").hide();
    $("#tabs-tab").hide();
    $("#videos-tab").hide();
    $("#tuner-tab").hide();
    $("#favorites-tab").slideToggle(1000);
    $("#tab-for-tabs").removeClass("tab-active");
    $("#tab-for-play").removeClass("tab-active");
    $("#tab-for-tuner").removeClass("tab-active");
    $("#tab-for-metronome").removeClass("tab-active");
    $("#tab-for-favorites").addClass("tab-active");
    $("#about-tab").hide();
})

// about us dropdown button
$("#about-dropdown").on("click", function(){
    $(window).scrollTop(0);
    $("#home-tab").hide();
    $("#about-tab").slideToggle(1000);
    $("#tuner-tab").hide();
    $("#metronome-tab").hide();
    $("#favorites-tab").hide();
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

//Animate the carousel

function cycle() {
    var timer = setInterval(advance, 4000);
    function advance() {
        $('.carousel').carousel('next');
    }
};

cycle();

// when the mouse leaves the dropdown navigation menu area, fade it out of view

$("#dropdown1").on("mouseleave", function(event) {
    $("#dropdown1").fadeOut(200);

})

// when the dropdown icon or any dropdown menu item is clicked on, hide the dropdown menu
$(".dropdown-trigger, #tab-dropdown, #videos-dropdown, #tuner-dropdown, #metronome-dropdown").on("click", function() {
    event.preventDefault();
    $("#dropdown1").fadeToggle(200);
})

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

  var database = firebase.database();

   var favorite = {
       tabs: [],
       vids: [],
   };

   console.log("before any listeners in app.js, here's our local data for tabs: " + favorite.tabs);

   database.ref("user/favs/vids").on("child_added", function(snap) {

    favorite.vids.push(snap.val());

    console.log("favorite.vids: " + favorite.vids);

    favorite.vids.forEach(function(vid) {

  
    //fill favorites videos into their space
    $("#fav-video-view").empty();

    console.log("from app.js inside the vids child added listener, vid = " + vid);
    

        // add the video embed to the page using standard YT embed code filled in with individual video IDs
        $("#fav-video-view").prepend(
            "<div class='col s12 m6 l6'><div style='border-radius: 10px; margin-bottom: 10px; margin-top: 10px' class='video-container z-depth-5'><iframe src='https://www.youtube.com/embed/" + vid + "' frameborder='0' allow='autoplay;' allowfullscreen='true'></iframe></div></div>"
        )
    
});//end forEach on favorite.vids

}); //end child-added listener on user/favs/vids

  database.ref("user/favs/tabs").on("child_added", function(snap) {
    //fill local array upon page load and when a new fav tab is added
    favorite.tabs.push(snap.val());

    console.log("from inside the firebase listener in app.js, here's favorite.tabs: " + console.dir(favorite.tabs));
    

    //fill favorite tabs into their space
    //1. Empty the space
    $("#favorite-tabs").empty();

    //2. Loop through the local array...
    favorite.tabs.forEach(function(tab){
        
        console.log("What is the tab?? " + console.dir(tab));
        //...to create a songster query for the song with the stored data = song id.
   
        var child = {
            chordsPresent: tab.chords,
            tabTypes: tab.types,
            title: tab.title,
            artist: tab.artist,
            chordsPresent: tab.chords
        }
       console.log("Here's the child I'm about to sent to fillChart: " + console.dir(child));
           fillChart(child);
      
        $('#artist-search').DataTable().destroy();
        $('#artist-fav').DataTable().destroy();
        $('#artist-fav').DataTable();

        $('#artist-fav').DataTable();
        
   

    function fillChart(child) {

    var chords = "";

    // chords if true or if false
    if (child.chordsPresent === true) {
        chords = "✅";
    } else {
        chords = "❌";
    }
    
    // create an empty variable to hold tab links
    var types = [];
    var guitarTabUrl = "";
    var bassTabUrl = "";
    var playerTabUrl = "";
    var chordsTabUrl = "";

    // for teach item in the tab types array do this stuff
    child.tabTypes.forEach(function(type) {

        // if there is a guitar tab...
        if (type === "TEXT_GUITAR_TAB") {
            guitarTabUrl = "<a target='_blank' href='http://www.songsterr.com/a/wa/bestMatchForQueryString?s=" + child.title + "&a=" + child.artist + "&track=guitar&inst=guitar'> Guitar Tab</a>";
            types.push(guitarTabUrl);

        // if there is a bass tab...            
        } else if (type === "TEXT_BASS_TAB") {
            bassTabUrl = "<a target='_blank' href='http://www.songsterr.com/a/wa/bestMatchForQueryString?s=" + child.title + "&a=" + child.artist + "&track=bass&inst=bass'> Bass Tab</a>";
            types.push(bassTabUrl);
        }

        // if there is a player tab...
        if (type === "PLAYER") {
            playerTabUrl = "<a target='_blank' href='http://www.songsterr.com/a/wa/bestMatchForQueryString?s=" + child.title + "&a=" + child.artist + "&track=player'> Tab Player</a>";
            types.push(playerTabUrl);
        }
        if (type === "CHORDS") {
            chordsTabUrl = "<a target='_blank' href='https://www.songsterr.com/a/wsa/" + child.artist + "-" + child.title + "-chords-s" + child.id + "'> View Chords</a>";
            types.push(chordsTabUrl);
        }
    })
    $("#favorite-tabs").append(
        "<tr>"
        + "<td>" + child.title + "</td>"
        + "<td>" + types + "</td>"
        + "<td>" + chords + chordsTabUrl + "</td>"
        + "</tr>"
    );

    }

}); //end filling favorite tabs section




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
      };
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
})