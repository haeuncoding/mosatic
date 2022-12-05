import AudioBank from './audio_bank.js'

let CONSTANTS = {
    KEY_ALPHABET: Array.from('QWERTYUIOPASDFGHJKLZXCVBNM')
}

export default class KeyDownHandler {
    constructor(){
        this.keys = [];
        this.keySoundBank = new AudioBank
        this.keySoundBank.createBank(CONSTANTS.KEY_ALPHABET)
        this.addListeners()
    }

    // extraneous code that worked previously for reference () {
    //     const audioContextQ = new AudioContext()
    //     const qSource = document.querySelector('#Q-id')
    //     const qSound = audioContextQ.createMediaElementSource(qSource);
    //     qSound.connect(audioContextQ.destination)
        //   const audioContextQ = new AudioContext()
    //   console.log(audioContextQ instanceof AudioContext)
    //   const qSource = document.querySelector('#Q-id')
    //   console.log(qSource instanceof HTMLMediaElement)
    //   const qSound = audioContextQ.createMediaElementSource(qSource);
    //   console.log(qSound instanceof MediaElementAudioSourceNode)
    //   qSound.connect(audioContextQ.destination)
    // }

    addListeners () {
    window.addEventListener('keydown', e => {
        e.preventDefault()
        e.stopImmediatePropagation()  
        console.log(e.code)
        switch(e.code) {
        case "KeyQ":
            this.keySoundBank.playQ()
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

