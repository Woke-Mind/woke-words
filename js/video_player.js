// Load the YouTube IFrame Player API code asynchronously
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var players = {};

function create_video_player(id, vid, delay) {
  return new YT.Player(id, {
    height: '608',
    width: '1080',
    videoId: vid,
    playerVars: {
      playlist: vid, // Enables looping by setting the playlist to the same video ID
      cc_load_policy: true,
    },
    events: {
      onReady: (event) => {
        event.target.mute(); // Mute the video on ready
        // event.target.playVideo();
        event.target.setLoop(true);
        setTimeout(() => {
          event.target.playVideo();
        }, delay * 1000);
      },
    },
  });
}
