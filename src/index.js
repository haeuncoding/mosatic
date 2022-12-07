
// okay so first, we need a key down handler that tracks
// 1. the audio mapped to each key
// 2. the animation mapped to each key
// 3. it exports it to a separate array or object that keeps track of
// which key pressed and duration between keystrokes 
// 4. if held down, it continually restarts playback, like a little stutter function (auto-repeat)
// 

  
// }
import KeyDownHandler from './key_down_handler.js';

window.addEventListener('load', function() {

    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    context.fillStyle = '#967bb6'
    context.fillRect(0, 0, 1000, 562.5)
    // const keySoundBank = new AudioBank
    // keySoundBank.createBank(CONSTANTS.KEY_ALPHABET)
    // const soundBank = keySoundBank.coreAudioBank
    // console.log(soundBank)


    // notes 12-04-22 : so it seems like without the keydown handler it's working fine, ideally i'd like to put this in its own class and just have it here...

    // notes 12-04-22 #2 : going to add the keydown handler now and see
    const keysDown = new KeyDownHandler

}); //outer Window Event Listener bounds
      


// const recorded = {} // this will have the various keys and their attr, like time/order(?)


// // second, key up handler (?)
// // not sure if i'd need a key up...


// // third, recording handler
// // includes play, pause, stop, and of course record functions

// // fourth, reverb functions



// extraneous code for reference

//   window.addEventListener('keydown', e => {
//         e.preventDefault()
//         e.stopImmediatePropagation()  
//         console.log(e.code)
//         switch(e.code) {
//         case "KeyQ":
//             soundBank.playQ()
//         break;
        
//         case "KeyW":
//             soundBank.playW()
//         break;

//         case "KeyE":
//             soundBank.playE()
//         break;

//         case "KeyR":
//             soundBank.playR()
//         break;

//         case "KeyT":
//             soundBank.playT()
//         break;

//         case "KeyY":
//             soundBank.playY()
//         break;

//         case "KeyU":
//             soundBank.playU()
//         break;

//         case "KeyI":
//             soundBank.playI()
//         break;

//         case "KeyO":
//             soundBank.playO()
//         break;

//         case "KeyP":
//             soundBank.playP()
//         break;

//         case "KeyA":
//             soundBank.playA()
//         break;

//         case "KeyS":
//             soundBank.playS()
//         break;

//         case "KeyD":
//             soundBank.playD()
//         break;

//         case "KeyF":
//             soundBank.playF()
//         break;

//         case "KeyG":
//             soundBank.playG()
//         break;

//         case "KeyH":
//             soundBank.playH()
//         break;

//         case "KeyJ":
//             soundBank.playJ()
//         break;

//         case "KeyK":
//             soundBank.playK()
//         break;

//         case "KeyL":
//             soundBank.playL()
//         break;

//         case "KeyZ":
//             soundBank.playZ()
//         break;

//         case "KeyX":
//             soundBank.playX()
//         break;

//         case "KeyC":
//             soundBank.playC()
//         break;

//         case "KeyV":
//             soundBank.playV()
//         break;

//         case "KeyB":
//             soundBank.playB()
//         break;

//         case "KeyN":
//             soundBank.playN()
//         break;

//         case "KeyM":
//             soundBank.playM()
//         break;
//     }
//     })

