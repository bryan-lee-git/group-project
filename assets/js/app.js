function replaceSpaces(artist) {
    return artist.replace(/\s/g, "&");
}

$("#form-submit").on("click", function(event) {
    event.preventDefault();
    var userInput = $("#user-input").val().trim();
    userInput = removeSpaces(userInput);
    getTabs(userInput);
});

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

$(document).ready( function () {
    var search = "metallica";
    getTabs(search);
});

//js for carousel
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

//js for dropdown
$(".dropdown-trigger").dropdown({hover: true});

