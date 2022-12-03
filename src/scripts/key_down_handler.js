import AudioBank from './audio_bank.js'
import AniBank from './ani_bank.js'
let CONSTANTS = {
    KEY_ALPHABET: Array.from('QWERTYUIOPASDFGHJKLZXCVBNM')
    // KEY_ALPHABET: Array.from('Q')
    
}

export default class KeyDownHandler {
    constructor(){
        this.keys = [];
        this.keyAudioBank = new AudioBank
        // this.createAudioBank(CONSTANTS.KEY_ALPHABET)
        this.addListeners()
        this.keyAniBank = new AniBank
    }

    createAudioBank (array) {
        this.keyAudioBank.createGenBank(array)
    }

    addListeners () {

    window.addEventListener('keydown', e => {
        console.log(e.code)
        switch(e.code) {
        case "KeyQ":

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

