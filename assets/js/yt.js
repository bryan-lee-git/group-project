//----------------------------------------------------------------------------------------
// YOUTUBE API
//----------------------------------------------------------------------------------------

// set a current page variable to zero for view pagination
var currentPage = 0;
var userInput = "";

// load next set of videos button
$("#next-btn").on("click", function(event) {
    $(window).scrollTop(0);
    event.preventDefault();
    currentPage++;
    $("#video-view").empty();
    getVideos(userInput);
})

// load previous set of videos button
$("#prev-btn").on("click", function(event) {
    if (currentPage > 0) {
        event.preventDefault();
        currentPage--;
        $("#video-view").empty();
        getVideos(userInput);
    }
})

// hide video view until videos are called for
$("#video-view").hide();

// click function to get list of videos from YouTube Data API
$("#yt-form").on("submit", function(event) {
    $("#video-view").empty();
    currentPage = 0;
    event.preventDefault();
    userInput = $("#youtube-search").val().trim();
    getVideos(userInput);
    document.getElementById("yt-form").reset();
})

// function to pull videos from YT
function getVideos(userInput) {

    $("#video-view").hide();

    // remove spaces and replace with +'s
    userInput = userInput.replace(/\s/g, "+");

    // YouTube Data API
    var apiKey = "AIzaSyDEN3-Xo9I-Ycjy-cTlOygMnHB3p5ZhVg4";

    // Url for ajax query
    var queryUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=" + userInput + "+guitar+lesson&type=video&videoEmbeddable=true&key=" + apiKey;

    // ajax query
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(videoData) {

        // console log the whole data request response
        // console.log(videoData);

        // create a shorter variable for videoData
        var videos = [];
        
        // if else if statements for which videos to load depending on user page choice
        if (currentPage === 0) {
            videos.push(videoData.items[0], videoData.items[1], videoData.items[2], videoData.items[3], videoData.items[4], videoData.items[5]);
        } else if (currentPage === 1) {
            videos.push(videoData.items[7], videoData.items[8], videoData.items[9], videoData.items[10], videoData.items[11], videoData.items[12]);
        } else if (currentPage === 2) {
            videos.push(videoData.items[13], videoData.items[14], videoData.items[15], videoData.items[16], videoData.items[17], videoData.items[18]);
        } else if (currentPage === 3) {
            videos.push(videoData.items[19], videoData.items[20], videoData.items[21], videoData.items[22], videoData.items[23], videoData.items[24]);
        } else if (currentPage === 4) {
            videos.push(videoData.items[25], videoData.items[26], videoData.items[27], videoData.items[28], videoData.items[29], videoData.items[30]);
        }

        // for each item videos...
        videos.forEach(function(video) {

            // console log the video object
            // console.log(video);
            
            // make a shorter variable for the video's Id
            var videoId = video.id.videoId;

            // add the video embed to the page using standard YT embed code filled in with individual video IDs
            $("#video-view").prepend(
                "<div class='col s12 m6 l6'><div style='border-radius: 10px; margin-bottom: 10px; margin-top: 10px' class='video-container z-depth-5'><iframe src='https://www.youtube.com/embed/" + videoId + "' frameborder='0' allow='autoplay;' allowfullscreen='true'></iframe><a id='vid-fav' data='" + videoId + "'class='waves-effect waves-light btn-small'>Add to Favs</a></div></div>"
            )
            
        })

        $("#video-view").on("click", "#vid-fav", function(event){
            event.preventDefault();
            
            console.log("here's the youtube video clicked for favs: " + console.dir(event));
            console.log("here's the video id from clicking the add favs button: " + event.currentTarget.attributes.data.value);
            
            var pickedVid = event.currentTarget.attributes.data.value;
            firebase.database().ref("user/favs/vids").push(pickedVid);
        });
    })
    $("#video-view").fadeIn(2000);
}; getVideos("beginner guitar");