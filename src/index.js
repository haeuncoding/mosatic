// import KeyPressHandler from './intro_key_press_handler'
import KeyDownHandler from './key_down_handler.js';
import ClickHandler from './click_handler.js'


if (document.readyState === "interactive") {
    const allAudio = document.querySelectorAll("audio")
    console.log(allAudio)
    if (allAudio.entries(audio => (audio.readyState === 4)))
    window.addEventListener('load', function() {
        const keysDown = new KeyDownHandler()

        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');
        context.fillStyle = '#967bb6'
        context.fillRect(0, 0, 1000, 562.5)
        
        const clickDown = new ClickHandler(keysDown)
        }
    );
}