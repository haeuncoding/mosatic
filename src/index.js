import KeyDownHandler from './key_down_handler.js';
import ClickHandler from './click_handler.js'

window.addEventListener('load', function() {

    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    context.fillStyle = '#967bb6'
    context.fillRect(0, 0, 1000, 562.5)

    const keysDown = new KeyDownHandler
    const clickDown = new ClickHandler(keysDown)

});