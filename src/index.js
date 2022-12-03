
// okay so first, we need a key down handler that tracks
// 1. the audio mapped to each key
// 2. the animation mapped to each key
// 3. it exports it to a separate array or object that keeps track of
// which key pressed and duration between keystrokes 
// 4. if held down, it continually restarts playback, like a little stutter function (auto-repeat)
// 

  
// }
import KeyDownHandler from './scripts/key_down_handler.js'

window.addEventListener('load', function() {
  
  const keyDownInp = new KeyDownHandler

}); //outer Window Event Listener bounds
      


// const recorded = {} // this will have the various keys and their attr, like time/order(?)


// // second, key up handler (?)
// // not sure if i'd need a key up...


// // third, recording handler
// // includes play, pause, stop, and of course record functions

// // fourth, reverb functions



