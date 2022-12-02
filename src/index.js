// for cross browser or legacy browsers
// const AudioContext = window.AudioContext || window.webkitAudioContext;
const audiocontext = new AudioContext()

// load a sound
const audioElement = document.querySelector("#sound-1")
const track = audioContext.createMediaElementSource(audioElement);

const playButton = document.querySelector("button");

playButton.addEventListener(
  "click",
  () => {
    // Check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // Play or pause track depending on state
    if (playButton.dataset.playing === "false") {
      audioElement.play();
      playButton.dataset.playing = "true";
    } else if (playButton.dataset.playing === "true") {
      audioElement.pause();
      playButton.dataset.playing = "false";
    }

    let state = this.getAttribute('aria-checked') === "true" ? true : false;
    this.setAttribute('aria-checked', state ? "false" : "true" );

  },
  false
);

track.connect(audioContext.destination);
