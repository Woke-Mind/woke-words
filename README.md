# woke-words

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

### References:
- [YouTube IFrame Player API Documentation](https://developers.google.com/youtube/iframe_api_reference)