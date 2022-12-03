
// okay so first, we need a key down handler that tracks
// 1. the audio mapped to each key
// 2. the animation mapped to each key
// 3. it exports it to a separate array or object that keeps track of
// which key pressed and duration between keystrokes 
// 4. if held down, it continually restarts playback, like a little stutter function (auto-repeat)
// 

  
// }
// import keyDownHandler from './scripts/key_down_handler.js'


window.addEventListener('load', function() {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');
  context.fillStyle = '#95c88c'
  context.fillRect(0, 0, 1920, 1080)

  

  class KeyDownHandler {
    constructor(){
        this.keys = [];
        // this.addSoundbank()
        this.addListeners()
    }


    addListeners () {

      window.addEventListener('keydown', e => {
          e.preventDefault()
          e.stopImmediatePropagation()  
          console.log(e.code)


          switch(e.code) {
          case "KeyQ":
            qSound.play()
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
    })};
  };

  const keyDownInp = new KeyDownHandler

}); //outer Window Event Listener bounds
      


// const recorded = {} // this will have the various keys and their attr, like time/order(?)


// // second, key up handler (?)
// // not sure if i'd need a key up...


// // third, recording handler
// // includes play, pause, stop, and of course record functions

// // fourth, reverb functions



