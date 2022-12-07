
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

    const keysDown = new KeyDownHandler
    
    hitRecordButton = function () {
        if (!keysDown.recording) {
            keysDown.recording = true;
        } else {
            keysDown.recording = false;
        }
    }
});