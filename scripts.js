/*Javascript typical order:
1. Get our elements from the html
2. Build functions to change the data/functionality
3. Hook up event listeners to fire the functions
*/

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
  /*OR
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  */
};

togglePlay();
