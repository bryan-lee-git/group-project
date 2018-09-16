//----------------------------------------------------------------------------------------
// YOUTUBE API
//----------------------------------------------------------------------------------------

// function to get list of videos from YouTube Data API

// function to pull videos from YT
function getVideos(userInput) {

    var apiKey = "AIzaSyDEN3-Xo9I-Ycjy-cTlOygMnHB3p5ZhVg4";

    // Url for ajax query
    var queryUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=metallica+master+of+puppets+guitar+lesson&type=video&videoEmbeddable=true&key=" + apiKey;

    // ajax query
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(videoData) {

        // create a shorter variable for videoData
        var videos = videoData.items;

        // for each item videos...
        videos.forEach(function(video) {

            // console log the video object
            console.log(video);
            
            // make a shorter variable for the video's Id
            var videoId = video.id.videoId;

            // add the video embed to the page using standard YT embed code filled in with individual video IDs
            $("#videos-tab").append(
                "<div style='border-radius: 10px; margin-bottom: 10px; margin-top: 10px' class='video-container responsive-video z-depth-5'><iframe src='https://www.youtube.com/embed/" + videoId + "' frameborder='0' allow='autoplay;' allowfullscreen></iframe></div>"
            )
        })

    })

// run the getVideos function
} getVideos();