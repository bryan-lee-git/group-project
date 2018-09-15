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

//----------------------------------------------------------------------------------------
// SONGSTER API
//----------------------------------------------------------------------------------------

    // function for replacing spaces with the & in user search queries

    function replaceSpaces(artist) {
        return artist.replace(/\s/g, "&");
    }

    // take in the form input value when it is submitted and run it through the getTabs function

    $("#form-submit").on("click", function(event) {
        event.preventDefault();
        var userInput = $("#user-input").val().trim();
        userInput = removeSpaces(userInput);
        getTabs(userInput);
    });

    // function to fill up the data table from the getTabs resulting children

    function fillTable(child) {

        // console log entire child object
        console.log(child);

        // set variable to hold chords icon
        var chords = "";

        // chords if true or if false
        if (child.chordsPresent === true) {
            chords = "✅";
        } else {
            chords = "❌";
        }
        
        // create an empty variable to hold tab links
        var types = [];

        // for teach item in the tab types array do this stuff
        child.tabTypes.forEach(function(type) {

            // if there is a guitar tab...
            if (type === "TEXT_GUITAR_TAB") {
                var tabUrl = "<a href='http://www.songsterr.com/a/wa/bestMatchForQueryString?s=" + child.title + "&a=" + child.artist.name + "&track='guitar''> Guitar Tab</a>";
                types.push(tabUrl);

            // if there is a bass tab...            
            } else if (type === "TEXT_BASS_TAB") {
                var tabUrl = "<a href='http://www.songsterr.com/a/wa/bestMatchForQueryString?s=" + child.title + "&a=" + child.artist.name + "&track='bass''> Bass Tab</a>";
                types.push(tabUrl);
            }

            // if there is a player tab...
            if (type === "PLAYER") {
                var tabUrl = "<a href='http://www.songsterr.com/a/wa/bestMatchForQueryString?s=" + child.title + "&a=" + child.artist.name + "&track='player''> Tab Player</a>";
                types.push(tabUrl);
            }
            if (type === "CHORDS") {
                var tabUrl = "<a href='https://www.songsterr.com/a/wsa/" + child.artist.name + "-" + child.title + "-chords-s" + child.id + "'> View Chords</a>";
                types.push(tabUrl);
            }
        })

        // fill table with child data
        $("tbody").append(
            "<tr>"
            + "<td>" + child.title + "</td>"
            + "<td>" + types + "</td>"
            + "<td>" + chords + "</td>"
            + "</tr>"
        )
    };

    // function to get list of tabs via the songsterr.com API

    function getTabs(userInput) {

        var queryURL = "http://www.songsterr.com/a/ra/songs/byartists.json?artists=" + userInput;
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(songsterr) {
            songsterr.forEach(function(child) {
                fillTable(child);
            })

            $('#artist-search').DataTable();
        })
    };

    // testing that the getTabs function works

    $(document).ready( function () {
        var search = "metallica";
        getTabs(search);
    });

//----------------------------------------------------------------------------------------
// YOUTUBE API
//----------------------------------------------------------------------------------------

// key: AIzaSyDEN3-Xo9I-Ycjy-cTlOygMnHB3p5ZhVg4
// function to get list of tabs via the songsterr.com API

function getVideos(userInput) {

    var queryURL = "GET https://www.googleapis.com/youtube/v3/search=metallica";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(videoData) {
        videoData.forEach(function(child) {
            console.log(child);
        })
    })
};
