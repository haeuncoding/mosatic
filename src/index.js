// for cross browser or legacy browsers
// const AudioContext = window.AudioContext || window.webkitAudioContext;
const audiocontext = new AudioContext()

// load a sound
const audioElement = document.querySelector("#sound-1")
const track = audioContext.createMediaElementSource(audioElement);

const playButton = document.querySelector("button");

// okay so first, we need a key down handler that tracks
// 1. the audio mapped to each key
// 2. the animation mapped to each key
// 3. it exports it to a separate array or object that keeps track of
// which key pressed and duration between keystrokes 
// 4. if held down, it continually restarts playback, like a little stutter function (auto-repeat)
// 

// key = document.querySelector() ideally key... will need to do some more research

// function pressKey(e) {
  
// }

const recorded = {} // this will have the various keys and their attr, like time/order(?)

window.addEventListener('keydown', (event) => {
  


  switch(event.code) {
    case "KeyQ":
      console.log("Hiya!")
      break;
      
    case "KeyW":
      break;

    case "KeyE":
      break;

    case "KeyR":
      break;

    case "KeyT":
      break;

    case "KeyY":
      break;

    case "KeyU":
      break;

    case "KeyI":
      break;

    case "KeyO":
      break;

    case "KeyP":
      break;

    case "KeyA":
      break;

    case "KeyS":
      break;

    case "KeyD":
      break;

    case "KeyF":
      break;

    case "KeyG":
      break;

    case "KeyH":
      break;

    case "KeyJ":
      break;

    case "KeyK":
      break;

    case "KeyL":
      break;

    case "KeyZ":
      break;

    case "KeyX":
      break;

    case "KeyC":
      break;

    case "KeyV":
      break;

    case "KeyB":
      break;

    case "KeyN":
      break;

    case "KeyM":
      break;
  }

})




// second, key up handler (?)
// not sure if i'd need a key up...


// third, recording handler
// includes play, pause, stop, and of course record functions

// fourth, reverb functions



track.connect(audioContext.destination);
