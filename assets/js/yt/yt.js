//----------------------------------------------------------------------------------------
// YOUTUBE API
//----------------------------------------------------------------------------------------

// key: AIzaSyDEN3-Xo9I-Ycjy-cTlOygMnHB3p5ZhVg4
// function to get list of tabs via the songsterr.com API

function getVideos(userInput) {

    var queryUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=metallica+master+of+puppets+guitar+lesson&type=video&videoEmbeddable=true&key=AIzaSyDEN3-Xo9I-Ycjy-cTlOygMnHB3p5ZhVg4";

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(videoData) {
        var videos = videoData.items;

        videos.forEach(function(video) {
            console.log(video);
            var videoId = video.id.videoId;

            $("#test-area").append(
                "<div class='video-container responsive-video z-depth-3'><iframe width='560' height='315' src='https://www.youtube.com/embed/" + videoId + "' frameborder='0' allow='autoplay;' allowfullscreen></iframe></div>"
            )

        })

    })
} getVideos();