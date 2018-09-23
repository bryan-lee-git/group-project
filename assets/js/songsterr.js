//----------------------------------------------------------------------------------------
// SONGSTER API
//----------------------------------------------------------------------------------------

// start by hiding the table
$("#artist-search").hide();
$("#tabs-view").hide();

// take in the form input value when it is submitted and run it through the getTabs function
$("#tab-form").on("submit", function(event) {
    $("#current-search").remove();
    event.preventDefault();
    var userInput = $("#tab-search").val().trim();
    $('#artist-search').DataTable().destroy();
    getTabs(userInput);
    document.getElementById("tab-form").reset();
    $("#tab-search").blur(); 
    $("#artist-search").before("<h4 id='current-search' style='margin-top: 10px;' class='col s6 white-text'>Results for: " + userInput + "</h4>");
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
    var guitarTabUrl = "";
    var bassTabUrl = "";
    var playerTabUrl = "";
    var chordsTabUrl = "";

    // for teach item in the tab types array do this stuff
    child.tabTypes.forEach(function(type) {

        // if there is a guitar tab...
        if (type === "TEXT_GUITAR_TAB") {
            guitarTabUrl = "<a target='_blank' href='http://www.songsterr.com/a/wa/bestMatchForQueryString?s=" + child.title + "&a=" + child.artist.name + "&track=guitar&inst=guitar'> Guitar Tab</a>";
            types.push(guitarTabUrl);

        // if there is a bass tab...            
        } else if (type === "TEXT_BASS_TAB") {
            bassTabUrl = "<a target='_blank' href='http://www.songsterr.com/a/wa/bestMatchForQueryString?s=" + child.title + "&a=" + child.artist.name + "&track=bass&inst=bass'> Bass Tab</a>";
            types.push(bassTabUrl);
        }

        // if there is a player tab...
        if (type === "PLAYER") {
            playerTabUrl = "<a target='_blank' href='http://www.songsterr.com/a/wa/bestMatchForQueryString?s=" + child.title + "&a=" + child.artist.name + "&track=player'> Tab Player</a>";
            types.push(playerTabUrl);
        }
        if (type === "CHORDS") {
            chordsTabUrl = "<a target='_blank' href='https://www.songsterr.com/a/wsa/" + child.artist.name + "-" + child.title + "-chords-s" + child.id + "'> View Chords</a>";
            types.push(chordsTabUrl);
        }
    })
    
    // fill table with child data
    
    $("tbody").append(
        "<tr>"
        + "<td>" + child.title + "</td>"
        + "<td>" + types + "</td>"
        + "<td>" + chords + chordsTabUrl + "</td>"
        + "<td>" + "<i class='material-icons favs' id='" + child.id + "' name='" + child.artist.name + "' title='" + child.title + "' chords='" + child.chordsPresent + "' types='" + child.tabTypes + "'>favorite_border</i>"
        + "</tr>"
    )
   
};

// function to get list of tabs via the songsterr.com API
function getTabs(userInput) {

    $("tbody").empty();
    $("#tabs-view").fadeIn(1000);
    $("#artist-search").fadeIn(2000);

    userInput = userInput.replace(/\s/g, "%20");
    console.log("Here's what the user input looks like: '" + userInput);

    var queryURL = 'https://www.songsterr.com/a/ra/songs/byartists.json?artists="' + userInput + '"';

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

//listener on Favs to add to favorites
$(".display").on("click", ".favs", function(event) {
    
    event.preventDefault();

    var pickedTab = {
        artist: event.currentTarget.attributes.name.nodeValue,
        title: event.currentTarget.attributes.title.nodeValue,
        id: event.currentTarget.attributes.id.nodeValue,
        chords: event.currentTarget.attributes.chords.nodeValue,
        types: event.currentTarget.attributes.types.nodeValue
    };

    favorite.tabs.forEach(function(){
        
    })

    firebase.database().ref("user/favs/tabs").push(pickedTab);

    console.log("from inside the favs listener inside songsterr.js, here's the selected fav: " + console.dir(pickedTab));
    //console.log("hopefully, this is the value of the database: " + firebase.database().ref("user/favs/tabs").val());
    console.log("here's the favs click event: " + console.dir(event));
    console.log("Here's the artist to save into favTab: " + event.currentTarget.attributes.name.nodeValue);
    console.log("Here's the title to save into favTab: " + event.currentTarget.attributes.title.nodeValue);
    console.log("Here's the id to save into favTab: " + event.currentTarget.attributes.id.nodeValue);
    console.log("Here's the types to save into favTab: " + event.currentTarget.attributes.types.nodeValue);
    console.log("Here's the chords to save into favTab: " + event.currentTarget.attributes.chords.nodeValue);

});
