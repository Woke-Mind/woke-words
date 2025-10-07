# woke-words

- [timer](./timer)
- [words](./words)

## YouTube Embed and `enablejsapi` Parameter

This project includes embedded YouTube videos using `<iframe>` elements. The `enablejsapi=1` URL parameter is used to enable the YouTube IFrame Player API, which allows JavaScript to control the video playback.

### Key Points:

- **`enablejsapi=1`**: This parameter must be included in the video URL to allow JavaScript to interact with the YouTube player.
- **JavaScript Control**: With the API enabled, you can send commands (e.g., play, pause) to the video player using `postMessage`.

### Example:

```html
<iframe id="example-video" src="https://www.youtube.com/embed/VIDEO_ID?enablejsapi=1" allowfullscreen></iframe>
```

### JavaScript Example:

```javascript
const iframe = document.getElementById('example-video');
const player = iframe.contentWindow;
player.postMessage(JSON.stringify({ event: 'command', func: 'playVideo', args: [] }), '*');
```

### Additional Commands with `postMessage`

The `postMessage` API allows you to send various commands to the YouTube player. Below are some commonly used commands:

- **`playVideo`**: Starts video playback.
- **`pauseVideo`**: Pauses video playback.
- **`stopVideo`**: Stops video playback.
- **`seekTo(seconds, allowSeekAhead)`**: Seeks to a specific time in the video. The `allowSeekAhead` parameter determines whether the player can make a network request to fetch more data if needed.
- **`mute`**: Mutes the video.
- **`unMute`**: Unmutes the video.
- **`setVolume(volume)`**: Sets the volume. The `volume` parameter is a number between 0 and 100.
- **`getVolume`**: Retrieves the current volume.
- **`getPlayerState`**: Retrieves the current state of the player (e.g., playing, paused, buffering).
- **`getCurrentTime`**: Retrieves the current playback position in seconds.

### References:

- [YouTube IFrame Player API Documentation](https://developers.google.com/youtube/iframe_api_reference)
- [YouTube Player Events and Methods](https://developers.google.com/youtube/player_parameters#Events)
