//----------------------------------------------------------------------------------------
// Tabs Click Display/Hide Functionality
//----------------------------------------------------------------------------------------

 // hide all areas until called upon
 $("#firebaseui-auth-container").hide();
 $("#tabs-tab").hide();
 $("#videos-tab").hide();
 $("#tuner-tab").hide();
 $("#metronome-tab").hide();
 $("#about-tab").hide();
 $("#credit-tab").hide();
 $("#favorites-tab").hide();

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
    $("#favorites-tab").hide();
    $("#tab-for-tabs").addClass("tab-active");
    $("#tab-for-play").removeClass("tab-active");
    $("#tab-for-tuner").removeClass("tab-active");
    $("#tab-for-metronome").removeClass("tab-active");
    $("#tab-for-favorites").removeClass("tab-active");
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
    $("#favorites-tab").hide();
    $("#tab-for-tabs").removeClass("tab-active");
    $("#tab-for-play").addClass("tab-active");
    $("#tab-for-tuner").removeClass("tab-active");
    $("#tab-for-metronome").removeClass("tab-active");
    $("#tab-for-favorites").removeClass("tab-active");
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
    $("#favorites-tab").hide();
    $("#tab-for-tabs").removeClass("tab-active");
    $("#tab-for-play").removeClass("tab-active");
    $("#tab-for-tuner").addClass("tab-active");
    $("#tab-for-metronome").removeClass("tab-active");
    $("#tab-for-favorites").removeClass("tab-active");
    $("#about-tab").hide();
    $("#credit-tab").hide();
})

// metronome tab button
$("#tab-for-metronome, #metronome-carousel-btn, #metronome-dropdown").on("click", function(){
    $(window).scrollTop(0);
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
    $("#credit-tab").hide();
});

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
    $("#credit-tab").hide();
});

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
    $("#favorites-tab").hide();
});

// when the mouse leaves the dropdown navigation menu area, fade it out of view
$("#dropdown1").on("mouseleave", function() {
    $("#dropdown1").fadeOut(200);
});

// hide the menus whenever the mouse is over the body (which means the mouse has left the dropdown content)
$("#main-container").on("mouseover", function() {
    $("#dropdown1, #user-dropdown").fadeOut(200);
});

// content dropdown on content icon mouseover
$("#content-button").on("mouseover", function() {
    $("#user-dropdown").fadeOut(200);
});

// when the mouse leaves the dropdown navigation menu area, fade it out of view
$("#user-dropdown").on("mouseleave", function() {
    $("#user-dropdown").fadeOut(200);
});

// user dropdown on icon mouseover
$("#user-button").on("mouseover", function() {
    $("#dropdown1").fadeOut(200);
});

// when the dropdown icon or any dropdown menu item is clicked on, hide the dropdown menu
$("#tab-dropdown, #videos-dropdown, #tuner-dropdown, #metronome-dropdown").on("click", function(event) {
    event.preventDefault();
    $("#dropdown1").fadeToggle(200);
});

// content dropdown menu for mobile
$("#content-button").on("touchstart", function() {
    $("#dropdown1").fadeToggle(200);
});

// user dropdown menu for mobile
$("#user-button").on("touchstart", function() {
    $("#user-dropdown").fadeToggle(200);
});

//----------------------------------------------------------------------------------------
// MATERIALIZE FUNCTIONALITY
//----------------------------------------------------------------------------------------

// run materialize functions for site styling functionality.

$(document).ready(function(){
    // nav bar dropdown (Google Materialize)
    $('.dropdown-trigger').dropdown();
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
    apiKey: "AIzaSyA7JCfzX0k3UcXiQh195gMsVhGChW_xHu0",
    authDomain: "fir-test-6bb17.firebaseapp.com",
    databaseURL: "https://fir-test-6bb17.firebaseio.com",
    projectId: "fir-test-6bb17",
    storageBucket: "fir-test-6bb17.appspot.com",
    messagingSenderId: "250844724426"
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
        // User is signed out
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
});

//----------------------------------------------------------------------------------------
// FAVORITES SECTION FUNCTIONALITY
//----------------------------------------------------------------------------------------

// define a local variable to hold incoming firebase data.
var favorite = {
    tabs: [],
    vids: [],
};

// start an event listener for additional videos saved to favorites.
database.ref("user/favs/vids").on("child_added", function(snap) {

    if (!favorite.vids.includes(snap.val)) {
        favorite.vids.push(snap.val());
    };

    $("#fav-video-view").empty();

    favorite.vids.forEach(function(vid) {
        
        // add the video embed to the page using standard YT embed code filled in with individual video IDs
        $("#fav-video-view").prepend(
            "<div class='col s12 m6 l6'><div style='border-radius: 10px; margin-bottom: 10px; margin-top: 10px' class='video-container'>" + vid + "</div><button class='video-remove-btn col s12 btn'>Remove</button></div>"
        )
    });

    // click function for deleting items from the screen and database
    $(".video-remove-btn").on("click", function(event) {

        var deleteCode = this.parentNode.children[0];
        console.log($(deleteCode).html());

        // prevent any default click functions
        event.preventDefault();

        // get unique identifier value to delete desired row of data from page and from storage
        var storageIndex = parseInt($(this).attr("value"));
        $(this.parentNode).remove();

        // remove this child/row of data from the database
        database.ref("user/favs/vids").once("value", function(snapshot) {

            // for each child in the database
            snapshot.forEach(function(childNode) {

                if(childNode.val() === $(deleteCode).html()) {
                    var deleteId = childNode.key;
                    database.ref("user/favs/vids/" + deleteId).remove();
                }

                
            })

        })
    })
});

// start an event listener for additional tabs saved to favorites.
database.ref("user/favs/tabs").on("child_added", function(snap) {

    // fill local array upon page load and when a new fav tab is added
    favorite.tabs.push(snap.val());

    // fill favorite tabs into their space in the DOM
    // 1. Empty the space
    $("#favorite-tabs").empty();
    $('#artist-fav').DataTable().destroy();
  
    // 2. Loop through the local array...
    for (i = 0; i < favorite.tabs.length; i++) {

        //draw a filled in heart for each favorite tab in the Tabs content table
        var favTabID = favorite.tabs[i].id;

        $("#" + favTabID).text("favorite");

        // create a songster query for the song with the stored data using the local variable array.
   
        var child = {
            chordsPresent: favorite.tabs[i].chords,
            tabTypes: favorite.tabs[i].types,
            title: favorite.tabs[i].title,
            artist: favorite.tabs[i].artist,
            chordsPresent: favorite.tabs[i].chords
        };

        // create an empty variable to hold tab links
        var types = [];
        var guitarTabUrl = "";
        var bassTabUrl = "";
        var playerTabUrl = "";
        var chordsTabUrl = "";

        // for teach item in the tab types array do this stuff
        var tTypes = child.tabTypes.split(",");
    
        // construct URLs based upon types available according to API docs
        tTypes.forEach(function(type) {

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
            // there are are chords available
            if (type === "CHORDS") {
                chordsTabUrl = "<a target='_blank' href='https://www.songsterr.com/a/wsa/" + child.artist + "-" + child.title + "-chords-s" + child.id + "'> View Chords</a>";
                types.push(chordsTabUrl);
            }
        })

        $("#favorite-tabs").prepend(
            "<tr id='" + favorite.tabs[i].id + "'>"
            + "<td>" + child.title + "</td>"
            + "<td>" + types + "</td>"
            + "<td class='trash-tab' value='" + favorite.tabs[i].id + "'><i class='fav-delete material-icons medium'>delete</i></td>"
            + "</tr>"
        );

        $(".fav-delete").on("mouseover", function() {
            $(this).empty();
            $(this).text("delete_forever");
        });

        $(".fav-delete").on("mouseleave", function() {
            $(this).empty();
            $(this).text("delete");
        })
        
        // console.log("here's where we are on the loop: " + i);
        // console.log("Here's child at this trip through the loop: " + console.dir(child));
    }

    // click function for deleting items from the screen and database
    $(".trash-tab").on("click", function(event) {

        // prevent any default click functions
        event.preventDefault();

        // get unique identifier value to delete desired row of data from page and from storage
        var deleteBtn = $(this).attr("value");

        var tableDelete = "#" + deleteBtn;
        console.log(tableDelete);

        // delete from table
        $(tableDelete).remove();

        // remove this child/row of data from the database
        database.ref("user/favs/tabs").once("value", function(snapshot) {

            // for each child in the database
            snapshot.forEach(function(childNode) {

                // if the childNode's trainNumber equals the value of the clicked delete button
                if (childNode.val().id === deleteBtn) {

                    // remove that child from the database 
                    var deleteId = childNode.key;
                    database.ref("user/favs/tabs/" + deleteId).remove();
                }
            })
        })
    })
});